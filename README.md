# CS Mobility

Marketing website for [CS Mobility](https://csmobility.se) — helping international companies establish and operate in Sweden.

Built with Next.js 16, React 19, and Tailwind CSS 4. Designed from the Figma mobile mockup, extended responsively for desktop.

## Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Contact form & email

Submissions go to `/api/contact`, which sends email via [Resend](https://resend.com).

1. Copy `.env.example` to `.env.local` and set:

   ```
   RESEND_API_KEY=re_xxxxxxxx
   CONTACT_TO_EMAIL=advice@csmobility.se
   CONTACT_FROM_EMAIL=CS Mobility <onboarding@resend.dev>
   ```

2. Verify your sending domain in Resend (or use `onboarding@resend.dev` for testing).

**Netlify fallback:** If `RESEND_API_KEY` is not set in production, the form falls back to [Netlify Forms](https://docs.netlify.com/forms/setup/) (detected via `public/forms.html`). Enable form notifications in the Netlify dashboard under **Forms → Form notifications**.

## Deploy to Netlify

1. Connect this repo to Netlify.
2. Build settings are in `netlify.toml` (`npm run build` + `@netlify/plugin-nextjs`).
3. Add environment variables in **Site settings → Environment variables**:
   - `RESEND_API_KEY`
   - `CONTACT_TO_EMAIL`
   - `CONTACT_FROM_EMAIL` (optional)
4. Deploy.

## Assets

Static assets live in `public/`:

- `logotypes/` — CS Mobility and partner logos
- `backgrounds/` — hero city images
