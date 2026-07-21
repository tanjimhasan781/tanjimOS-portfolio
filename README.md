# tanjimOS — Gamified Portfolio

A portfolio that behaves like an operating system. Instead of nav tabs, visitors explore through a macOS-style desktop — a dock, draggable-feel windows with stage-manager switching, and the star of the show: a **fully working terminal** with real commands and an **AI assistant** that answers questions about me from my CV.

**Live:** https://tanjim-os-portfolio.vercel.app

![theme: purple / green / cyan](https://img.shields.io/badge/themes-purple%20%7C%20green%20%7C%20cyan-7c5cff)

## Features

- **Terminal-first navigation** — `cd projects`, `ls`, `cat about`, `grep react`, tab-completion, command history, `neofetch`, easter eggs. Sections slide in from the bottom.
- **Terminal AI** — `ai <question>` or `ai` for chat mode. Answers from CV data only (anti-hallucination prompt). Groq `openai/gpt-oss-120b` via a server-side proxy — no keys in the browser — with an in-browser WebLLM fallback.
- **macOS-style desktop** — dock with tooltips & running indicators, traffic-light window controls, stage-manager stacking for open apps, smooth cubic-bezier animations.
- **Phone-OS mode on mobile** — full-screen apps, bottom dock, tap-to-run command chips in the terminal.
- **Apps**: Terminal, Sections (finder), Mail (contact form), Settings (3 themes, code-rain intensity, CRT scanlines), Resume viewer, chiptune Music player (Web Audio, no audio files).
- **Hidden admin dashboard** — `sudo admin` in the terminal (no visible link anywhere). Edit every section via friendly forms or raw JSON, view the message inbox, swap the CV/photo, change the password.
- **AI-gated contact form** — every message lands in the admin inbox; Groq classifies it (INQUIRY / SPAM / ABUSE / JUNK) and only genuine inquiries are emailed to me via Resend. Rate limiting + honeypot included.
- **Matrix-style code rain** background on canvas, theme-aware.

## Stack

| Layer | Tech |
|---|---|
| Frontend | HTML/CSS/JS (component-based, no build step), Canvas, Web Audio |
| Backend | Node.js + Express — one app that runs as a local server *and* a Vercel serverless function |
| Database | Supabase (Postgres, single `kv` table) in production; local JSON file in dev |
| AI | Groq (`openai/gpt-oss-120b`) + WebLLM in-browser fallback |
| Email | Resend |
| Hosting | Vercel (static frontend + `/api/*` serverless) |

## Run locally

```bash
npm install
npm start        # http://localhost:3001 → serves the site + API (local db.json)
```

## APIs

See [backend/README.md](backend/README.md) for the full API reference.

## Try these in the terminal

```
help          ls            cd projects
grep react    neofetch      theme green
ai what projects has he built?
```

---

Built by **Md. Tanjimul Hasan**
