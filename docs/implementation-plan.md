# Implementation Plan — NusaLearn Frontend

## Milestone 1 — Frontend Design Slicing
- Upgrade the vulnerable framework baseline.
- Introduce semantic design tokens, UI primitives, query provider, and responsive application shell.
- Slice landing, login, password reset, admin dashboard, people, academics, courses, assignments, quizzes, attendance, gradebook, reports, notifications, profile, and settings.
- Preserve typed fixture data only until API integration.

Verification: typecheck, lint, production build, and representative desktop/mobile Playwright flows.

## Milestone 2 — Laravel API Foundation
Delivered in the sibling `dashboard-school-api` repository: Laravel 13, Sanctum, MySQL, Mailpit, migrations, policies, Form Requests, API Resources, OpenAPI, tests, health checks, queue, scheduler, and private storage.

## Milestone 3 — Contract Integration
For each feature: export backend OpenAPI, regenerate frontend client, replace fixtures with TanStack Query hooks, map validation errors, invalidate affected queries, and extend Playwright coverage.

Order: authentication, users, academics, courses, content/uploads, assignments, quizzes, attendance/grades, reports/notifications, dashboards.

## Milestone 4 — Release Readiness
Run clean installs, frontend/backend static checks, migrations and seeds on isolated MySQL, backend feature tests, frontend E2E, dependency audits, production builds, queue/scheduler smoke tests, and deployment documentation review.
