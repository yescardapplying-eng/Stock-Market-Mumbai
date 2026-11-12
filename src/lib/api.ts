/**
 * Centralized API Configuration & Endpoints
 * Stock Market Mumbai — Vercel & Hostinger Compatible
 */

export const API_BASE_URL =
  typeof process !== 'undefined' && process.env.NEXT_PUBLIC_API_URL
    ? process.env.NEXT_PUBLIC_API_URL.replace(/\/$/, '')
    : '';

export const API_ENDPOINTS = {
  LEAD: `${API_BASE_URL}/api/lead`,
  CONTACT: `${API_BASE_URL}/api/contact`,
  SETTINGS: `${API_BASE_URL}/api/settings`,
} as const;

