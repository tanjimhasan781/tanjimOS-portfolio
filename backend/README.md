# tanjimOS — backend

One Express app (`backend/app.js`) that runs two ways:
- **Local dev:** `npm install && npm start` at the project root → http://localhost:3001/Portfolio.dc.html (uses a local `backend/db.json` file).
- **Vercel (production):** the same app is exported as a serverless function via `api/index.js`, with data stored in **Supabase** (free tier) because Vercel's filesystem is ephemeral.

## Environment variables

| Var | Required | Purpose |
|---|---|---|
| SUPABASE_URL | on Vercel | your project URL, e.g. https://xyz.supabase.co |
| SUPABASE_SERVICE_KEY | on Vercel | service_role key (server-only secret) |
| ADMIN_PASSWORD | first boot | seeds the admin password (default `letmein`) |
| GROQ_API_KEY | recommended | terminal AI for all visitors + contact-form spam gating |
| RESEND_API_KEY | optional | emails INQUIRY-classified messages to you |
| NOTIFY_EMAIL | optional | notification recipient (default tanjimulhasan781@gmail.com) |
| RESEND_FROM | optional | sender; default `onboarding@resend.dev` needs no domain setup |

Without SUPABASE_* vars the app falls back to `backend/db.json` (local dev mode).

## Supabase setup (one time)

SQL editor → run:

```sql
create table kv (key text primary key, value jsonb);
```

That's the whole schema — the app stores its state under one key. Keep RLS OFF for this table (it's only ever accessed with the service key from the server; the anon key is never used).

## Contact-form gating

Every message is saved to the admin inbox. Groq classifies it (INQUIRY / SPAM / ABUSE / JUNK); only INQUIRY (or UNCHECKED, when Groq is unavailable — fails open) is emailed to you. Plus: min-length check, 5 msgs/hour/IP rate limit, honeypot field support.

## API

| Method | Path | Auth | Purpose |
|---|---|---|---|
| GET | /api/content | – | full portfolio content |
| PUT | /api/content | ✓ | update one section `{section, value}` |
| POST | /api/content/reset | ✓ | reset to data.js defaults |
| POST | /api/auth/login | – | `{password}` → `{token}` (7-day) |
| POST | /api/auth/password | ✓ | `{current, next}` change password |
| POST | /api/messages | – | contact form `{from, subject, body}` (gated) |
| GET | /api/messages | ✓ | admin inbox (with classifier labels) |
| GET/POST | /api/assets/cv, /api/assets/avatar | POST ✓ | serve / replace files (`{dataUrl}`) |
| POST | /api/ai | – | `{question}` → `{answer}` |
