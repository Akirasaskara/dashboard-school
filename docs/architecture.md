# Architecture — NusaLearn Frontend

## Repository Boundary
This repository is an independently deployable Next.js frontend. The sibling Laravel API owns authentication, authorization, business rules, persistence, private storage, queues, notifications, and reports. The frontend must never import Eloquent models or Laravel application code.

## Source Responsibilities
- `src/app`: App Router pages and layouts.
- `src/components/ui`: reusable accessible primitives.
- `src/components/shared`: application shell, navigation, page headers, and cross-feature presentation.
- `src/features`: feature-owned components, schemas, hooks, API functions, and types.
- `src/providers`: TanStack Query and global browser providers.
- `src/lib`: framework-independent frontend helpers and the future generated-client adapter.
- `tests/e2e`: Playwright user flows.

## Data Flow
During design slicing, typed fixture data lives near feature presentation. During integration:

1. User action enters a React Hook Form or controlled interaction.
2. Zod validates immediate client constraints.
3. TanStack Query calls the generated OpenAPI client with credentials.
4. Laravel validates, authorizes, executes business logic, and returns API Resources.
5. Structured 422 errors map back to fields; 401/419 responses trigger session recovery or sign-in.
6. Successful mutations invalidate focused query keys.

## Authentication
The planned model is Laravel Sanctum stateful SPA authentication. The frontend first requests `/sanctum/csrf-cookie`, then submits credentialed requests with the XSRF header. Cookies are handled by the browser; no JWT or refresh token is persisted in localStorage.

## Authorization
Navigation and actions may adapt to returned capabilities, but hidden controls are not security. Laravel Policies and Gates remain authoritative.

## Design Decisions
- Preserve the useful App Router route group and replace the old fixed-width shell with a responsive drawer/sidebar.
- Keep UI primitives local and composable rather than importing backend types.
- Generate API types from OpenAPI once the Laravel contract is available.
- Use URL state for integrated list filters and pagination.
- Keep school-time display separate from server-authoritative UTC values.
