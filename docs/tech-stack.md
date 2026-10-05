# Tech Stack — NusaLearn Frontend

## Runtime
- Next.js 16.3.8 App Router
- React and React DOM 19.2.4
- TypeScript 5.9.3 with strict mode
- Node.js >=20.9 and npm >=10

## UI
- Tailwind CSS 3.4.19
- shadcn/ui-style local components built on Radix primitives
- Lucide React icons
- class-variance-authority, clsx, and tailwind-merge
- Semantic CSS variables for color, focus, borders, radii, and surfaces

## State and Forms
- TanStack Query 5.104.1 for server state
- React Hook Form 7.89.0
- Zod 4.3.3
- `@hookform/resolvers` 5.2.2

## Visualization
- Recharts 3.6.x
- react-calendar 6.x
- react-big-calendar 1.20.0 with date-fns localizer

## Testing and Quality
- ESLint 9 flat configuration with Next.js rules
- Playwright 1.58.2
- TypeScript type checking
- Next.js production build

## Environment Variables
- `NEXT_PUBLIC_API_URL`: Laravel API base URL without a trailing slash.
- `NEXT_PUBLIC_SCHOOL_TIMEZONE`: IANA timezone used for display; defaults operationally to `Asia/Jakarta`.

No authentication token is stored in localStorage. Laravel Sanctum will use credentialed cookies and CSRF protection after integration.
