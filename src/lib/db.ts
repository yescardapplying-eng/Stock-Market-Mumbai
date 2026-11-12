import mysql from 'mysql2/promise';
import fs from 'fs/promises';
import path from 'path';
import os from 'os';

let pool: mysql.Pool | null = null;
let tableInitialized = false;

export interface LeadRecordInput {
  form_type: 'popup' | 'contact';
  lead_reference: string;
  full_name: string;
  mobile_number: string;
  state: string | null;
  segment?: string | null;
  capital_range?: string | null;
  message?: string | null;
  source_page: string;
  ip_address: string;
  user_agent: string;
}

export function isMysqlConfigured(): boolean {
  return Boolean(process.env.DB_HOST && process.env.DB_HOST.trim() !== '');
}

export function getDbPool(): mysql.Pool {
  if (pool) return pool;

  const host = process.env.DB_HOST || 'localhost';
  const port = parseInt(process.env.DB_PORT || '3306', 10);
  const user = process.env.DB_USER || 'root';
  const password = process.env.DB_PASS || process.env.DB_PASSWORD || '';
  const database = process.env.DB_NAME || 'stock_market_mumbai';
  const ssl = process.env.DB_SSL === 'true' ? { rejectUnauthorized: false } : undefined;

  pool = mysql.createPool({
    host,
    port,
    user,
    password,
    database,
    ssl,
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0,
    enableKeepAlive: true,
    keepAliveInitialDelay: 10000,
    timezone: '+05:30',
  });

  return pool;
}

export async function ensureLeadsTable(): Promise<void> {
  if (tableInitialized || !isMysqlConfigured()) return;

  const db = getDbPool();
  const createTableQuery = `
    CREATE TABLE IF NOT EXISTS \`leads\` (
      \`id\` BIGINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
      \`form_type\` ENUM('popup', 'contact') NOT NULL DEFAULT 'popup',
      \`lead_reference\` VARCHAR(40) UNIQUE,
      \`full_name\` VARCHAR(100) NOT NULL,
      \`mobile_number\` VARCHAR(20) NOT NULL,
      \`state\` VARCHAR(100) NULL,
      \`segment\` VARCHAR(100) NULL,
      \`capital_range\` VARCHAR(100) NULL,
      \`message\` TEXT NULL,
      \`source_page\` VARCHAR(255) DEFAULT '/',
      \`ip_address\` VARCHAR(45) NULL,
      \`user_agent\` TEXT NULL,
      \`status\` ENUM('new', 'contacted', 'enrolled', 'not_interested', 'invalid') NOT NULL DEFAULT 'new',
      \`notes\` TEXT NULL,
      \`created_at\` TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
      \`updated_at\` TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
      INDEX \`idx_lead_form_type\` (\`form_type\`),
      INDEX \`idx_lead_status\` (\`status\`),
      INDEX \`idx_lead_created\` (\`created_at\`),
      INDEX \`idx_lead_mobile\` (\`mobile_number\`)
    ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
  `;

  try {
    await db.query(createTableQuery);
    tableInitialized = true;
  } catch (err) {
    console.warn('[DB] Warning ensuring leads table:', (err as Error).message);
  }
}

async function saveLeadFallbackFile(record: LeadRecordInput): Promise<number> {
  const baseDir = process.env.VERCEL ? os.tmpdir() : path.join(process.cwd(), '.data');
  const filePath = path.join(baseDir, 'smm_leads.json');
  await fs.mkdir(baseDir, { recursive: true });

  let existing: Array<LeadRecordInput & { id: number; status: string; created_at: string }> = [];
  try {
    const raw = await fs.readFile(filePath, 'utf-8');
    existing = JSON.parse(raw);
  } catch {
    existing = [];
  }

  const nextId = existing.length > 0 ? Math.max(...existing.map((r) => r.id)) + 1 : 1;
  existing.unshift({
    id: nextId,
    ...record,
    status: 'new',
    created_at: new Date().toISOString(),
  });
  await fs.writeFile(filePath, JSON.stringify(existing, null, 2), 'utf-8');
  return nextId;
}

async function forwardLeadToAdminPortal(record: LeadRecordInput): Promise<boolean> {
  const adminUrl = process.env.ADMIN_PORTAL_URL?.trim().replace(/\/$/, '');
  if (!adminUrl) return false;

  const secret = process.env.ADMIN_INGEST_SECRET || 'SMM_Admin_Ingest_2026_Secret_Key';
  try {
    const res = await fetch(`${adminUrl}/api/leads/ingest`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-smm-ingest-secret': secret,
      },
      body: JSON.stringify(record),
      cache: 'no-store',
    });
    return res.ok;
  } catch (err) {
    console.warn('[Admin Sync] Failed to forward lead to admin portal:', (err as Error).message);
    return false;
  }
}

/**
 * Persists a lead in MySQL (when configured), forwards to Admin Subdomain/URL if set,
 * and falls back safely to local/temp storage during zero-config Vercel preview testing.
 */
export async function saveLeadRecord(record: LeadRecordInput): Promise<{ insertId: number; syncedToAdmin: boolean }> {
  let insertId = 0;

  if (isMysqlConfigured()) {
    await ensureLeadsTable();
    const db = getDbPool();
    const insertSql = `
      INSERT INTO \`leads\` (
        \`form_type\`, \`lead_reference\`, \`full_name\`, \`mobile_number\`,
        \`state\`, \`segment\`, \`capital_range\`, \`message\`, \`source_page\`,
        \`ip_address\`, \`user_agent\`, \`status\`, \`created_at\`
      ) VALUES (
        ?, ?, ?, ?,
        ?, ?, ?, ?, ?,
        ?, ?, 'new', NOW()
      )
    `;
    const [result] = await db.execute(insertSql, [
      record.form_type,
      record.lead_reference,
      record.full_name,
      record.mobile_number,
      record.state ?? null,
      record.segment ?? null,
      record.capital_range ?? null,
      record.message ?? null,
      record.source_page,
      record.ip_address,
      record.user_agent.substring(0, 255),
    ]);
    insertId = (result as { insertId?: number }).insertId || 1;
  } else {
    insertId = await saveLeadFallbackFile(record);
  }

  const syncedToAdmin = await forwardLeadToAdminPortal(record);
  return { insertId, syncedToAdmin };
}

