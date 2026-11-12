# Stock Market Mumbai (`stockmarketmumbai.in`)

100% Educational, SEO-optimized website for **Stock Market Mumbai** built with **Next.js 16**, **Tailwind CSS v4**, and **MySQL (`mysql2`)**, ready for both **Vercel** (sample testing via Git) and **Hostinger** (final production hosting).

---

## Key Features Implemented
- **100% Educational & Non-Advisory:** Zero stock tips, calls, brokerage links, or advisory promises.
- **Mumbai SEO Optimization:** Targeted metadata, `EducationalOrganization` / `LocalBusiness` JSON-LD, `FAQPage` JSON-LD on every page, `sitemap.ts`, and `robots.txt`.
- **Responsive Design:** Mobile, Tablet, and Desktop friendly with zero horizontal overflow (`#0B2545` Navy Blue, `#16A34A` Emerald Green, `#F8FAFC` Off-white, `#1E293B` Charcoal).
- **Header & Footer:** 5-link top menu (`Home`, `Our Services`, `About Us`, `Our Packages`, `Contact Us`), Hero Live Educational Chat widget, and compliant Footer ending strictly at `© 2026 All Rights Reserved by Stock Market Mumbai.in`.
- **Packages & Comparison Dashboard:** Basic Plan (`₹24,999 / 1 Month` — 6 USPs), Our Pro Plan (`₹55,999 / 6 Months` — 8 USPs), Ultra Pro Plan (`₹95,999 / 1 Year` — 7 USPs) + Comparison Table.
- **FAQs & Reviews:** 6 FAQs on Homepage, 3 SEO FAQs on every other page (all collapsed by default, smooth single-open accordion), and 8 Mumbai 5-star Google-style reviews auto-swiping every 2 seconds.
- **Live Lead Sync:** Popup Form and Contact Us Form sync directly into **Stock Market Mumbai Admin** (`/api/leads/ingest` webhook + shared MySQL).

---

## 1. Quick Vercel Testing Setup (via Git)

1. Push `d:\Stock Market Mumbai` and `d:\Stock Market Mumbai Admin` to two Git repositories (or monorepo projects).
2. Import **Stock Market Mumbai Admin** to Vercel first and note its live URL (e.g., `https://stock-market-mumbai-admin.vercel.app`).
3. Import **Stock Market Mumbai** to Vercel and add these Environment Variables in **Project Settings → Environment Variables**:
   ```env
   NEXT_PUBLIC_SITE_URL=https://your-vercel-site.vercel.app
   ADMIN_PORTAL_URL=https://stock-market-mumbai-admin.vercel.app
   ADMIN_INGEST_SECRET=SMM_Admin_Ingest_2026_Secret_Key
   ```
   *(Optional for permanent Vercel database storage: set `DB_HOST`, `DB_PORT`, `DB_NAME`, `DB_USER`, `DB_PASS`, `DB_SSL=true` using TiDB Cloud or Hostinger Remote MySQL so Vercel serverless instances share permanent persistence.)*
4. Deploy both projects and test Popup Form + Contact Us submissions.

---

## 2. Hostinger Production Deployment (`stockmarketmumbai.in`)

1. Upload this project to Hostinger Node.js Web App (or connect via Git).
2. Create a MySQL Database in Hostinger hPanel and import `database/schema.sql` from the Admin repository (or let `ensureLeadsTable()` auto-create the `leads` table).
3. Set production environment variables:
   ```env
   NODE_ENV=production
   PORT=3000
   NEXT_PUBLIC_SITE_URL=https://stockmarketmumbai.in
   ADMIN_PORTAL_URL=https://admin.stockmarketmumbai.in
   ADMIN_INGEST_SECRET=your_strong_secret_key
   DB_HOST=localhost
   DB_PORT=3306
   DB_NAME=your_hostinger_db_name
   DB_USER=your_hostinger_db_user
   DB_PASS=your_hostinger_db_password
   DB_SSL=false
   ```
4. Build and start using Hostinger's custom Node entry (`server.js`):
   ```bash
   npm install
   npm run build
   node server.js
   ```

