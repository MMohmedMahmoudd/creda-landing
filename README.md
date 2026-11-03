# Creda landing

Marketing site for Creda (B2B food trading with supplier credit). Next.js (App Router) + Tailwind CSS v4.

## Pages and language

| URL | Content |
| --- | --- |
| `/` | Buyers landing page |
| `/suppliers` | Suppliers landing page |
| `/contact` | Contact form |

The language is **not in the URL**. Arabic (RTL) is the default; the header toggle sets a `NEXT_LOCALE` cookie and reloads. `src/proxy.ts` reads the cookie and rewrites each request to the internal `app/[lang]/...` route, so both languages stay statically rendered. Requests to `/ar/...` or `/en/...` are redirected to the clean path (and set the cookie).

Because one URL serves two languages, a CDN in front of this must vary its cache on the `NEXT_LOCALE` cookie (the proxy sends `Vary: Cookie`).

## Develop

```bash
npm install
npm run dev
```

## Configuration

Public URLs live in `.env` (committed, since they are not secrets). Override them locally in `.env.local`, or per environment in your host's settings. They are read in `src/shared/config/links.ts`; the build fails if one is missing.

- `NEXT_PUBLIC_BUYER_URL` — buyer app. Used by every "Start buying" button and by "Log in".
- `NEXT_PUBLIC_SUPPLIER_REGISTER_URL` — supplier registration. Used by every "Register as a supplier" button.

## Structure (feature-based)

```
src/
  app/[lang]/          routing only: thin pages that render a feature
  proxy.ts             cookie → locale rewrite
  features/
    home/              HomePage, components/, content/{ar,en}.ts
    suppliers/         SuppliersPage, components/, content/{ar,en}.ts
    contact/           ContactPage, components/ContactForm, content/{ar,en}.ts
    site-layout/       Header, Footer, LanguageSwitcher, content/{ar,en}.ts
  shared/
    components/        Section (standard 1200px / 96px 24px / 48px-gap container), ui, blocks, Faq, SignupCta, sections
    content/           copy used by several features
    i18n/              locales, cookie name, direction, numerals
    config/links.ts    auth URLs
```

Each feature owns its copy. `en.ts` is typed against `ar.ts`, so a missing key fails the build. Content sections (why, features, how, credit) use `Section` / `SectionContainer`, which applies `max-width: 1200px; margin: 0 auto; padding: 96px 24px; display: flex; flex-direction: column; gap: 48px` (how and credit keep the reference gaps of 52px / 56px). The hero, strips, supplier band, sign-up, footer and contact sections keep the reference's own paddings via `Container`.

The contact form validates client-side only; `submit` in `src/features/contact/components/ContactForm.tsx` is where to call your endpoint.
