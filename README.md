# NusaLearn Frontend

Next.js frontend for a single-school LMS. The Laravel 13 API is maintained in the sibling `dashboard-school-api` repository.

## Prerequisites
- Node.js 20.9 or newer
- npm 10 or newer

## Setup
```bash
npm ci
copy .env.example .env.local
npm run dev
```

Open `http://localhost:3000`. The current design-slicing login accepts any syntactically valid email and password of at least eight characters, then opens the admin preview. It is not production authentication.

## Verification
```bash
npm run typecheck
npm run lint
npm run build
npm run test:e2e:install
npm run test:e2e
npm audit --omit=dev
```

## Architecture
- `src/app`: routes and layouts
- `src/components/ui`: accessible UI primitives
- `src/components/shared`: shell and cross-feature components
- `src/features`: feature-owned slices
- `src/providers`: global client providers
- `tests/e2e`: Playwright tests
- `docs`: frontend requirements, architecture, plan, stack, and progress

## Environment
See `.env.example`. Authentication will use Laravel Sanctum stateful cookies and CSRF protection. Do not add browser token persistence.
