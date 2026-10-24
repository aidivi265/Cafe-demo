# Richie Rich Gaming & Cafe — Client Handover

## Project

- Location: `C:\Users\divya\Downloads\richierish demo`
- Framework: Next.js 16.4.3 with React 19.3.1, TypeScript, and Tailwind CSS
- Website type: Five-page informational website
- Deployment status: Not deployed
- Git status: This folder is not a Git repository

## Routes

- `/` — Home
- `/gaming` — PlayStation gaming
- `/pool` — 8-ball pool
- `/cafe` — Rooftop cafe
- `/visit` — Address, phone, and directions
- `/robots.txt` — Crawler rules

## Shared implementation

- Shared responsive header and mobile navigation
- Shared footer
- Reusable buttons and CTA panels
- Shared page intro and section heading components
- Replaceable visual placeholders for gaming, pool, and cafe areas
- Centralized business information in `lib/site-data.ts`
- Phone CTA: `tel:+917982539359`
- Google Maps CTA uses the supplied Richie Rich location URL

## Local commands

```bash
npm install
npm run dev
npm run build
npm start
npm run lint
npx tsc --noEmit
npm audit --omit=dev
```

## Deployment prerequisites

1. Confirm the production domain.
2. Connect the folder to the chosen hosting provider or Git repository.
3. Use the existing Next.js build command: `npm run build`.
4. Use `npm start` for a self-hosted Node deployment, or the hosting provider's standard Next.js runtime.
5. Add canonical and sitemap metadata only after the production domain is confirmed.
6. Complete browser and real-device smoke testing before public launch.

No environment variables are currently required. No API keys, secrets, database, CMS, payment gateway, or backend service is used.

## Client materials still needed

- Genuine gaming-zone photos
- Genuine 8-ball pool photos
- Genuine rooftop cafe photos
- Verified current opening hours
- Confirmed production domain
- Final browser/device approval at mobile, tablet, and desktop sizes

The current visual areas use temporary Unsplash demo imagery with replaceable visual labels. These images are not presented as photographs of the Richie Rich premises and should be replaced with client-approved photos before launch.

## Validation completed

- `npm run build` — passed
- `npx tsc --noEmit` — passed
- `npm run lint` — passed with ESLint 10 and `eslint-config-next` 16.4.3
- `npm audit --omit=dev` — passed with 0 production vulnerabilities
- Local browser smoke test — passed for `/`, `/gaming`, `/pool`, `/cafe`, `/visit`, and `/robots.txt`
- Mobile menu interaction — passed
- Mobile and desktop overflow check — passed
- No console errors or failed asset requests during browser smoke testing
- Light/dark theme toggle — passed in browser smoke testing

## Launch limitations

- No live URL is available because deployment has not been authorized or configured.
- DNS and domain settings have not been changed.
- This project folder is not connected to Git.
- Opening hours remain unverified; the website retains a call-ahead disclaimer.
