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

## Containers

Build a development image:

```bash
docker build --target development -t nusalearn-frontend:dev .
docker run --rm -p 3000:3000 nusalearn-frontend:dev
```

Build the standalone production image with environment-specific public configuration:

```bash
docker build --target production \
  --build-arg NEXT_PUBLIC_API_URL=https://api.example.com \
  --build-arg NEXT_PUBLIC_SCHOOL_TIMEZONE=Asia/Jakarta \
  -t nusalearn-frontend:prod .

docker run --rm -p 3000:3000 nusalearn-frontend:prod
```

Container liveness: `GET /healthz`.

Full-stack development, testing, and production reference Compose files live in the sibling `dashboard-school-infrastructure` repository.

## Environment
See `.env.example`. `NEXT_PUBLIC_*` values are embedded during `next build`; production images are therefore built for a specific public API origin. Authentication will use Laravel Sanctum stateful cookies and CSRF protection. Do not add browser token persistence.
