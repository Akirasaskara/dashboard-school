# Product Requirements — NusaLearn Frontend

## Roles
- ADMIN: users, academic structure, course assignments/enrollments, school reports, and audit views.
- TEACHER: assigned-course content, assignments, quizzes, attendance, grading, and course reports.
- STUDENT: enrolled courses, materials, submissions, quiz attempts, attendance, grades, and notifications.

## Required Screens
- Public landing, login, forgot/reset password.
- Role-specific dashboard and navigation.
- Admin people and academic structure management.
- Course catalog/detail, ordered materials, announcements, and progress.
- Assignment authoring, student submission/history, teacher grading, and released results.
- Quiz builder, timed autosaved attempt, and policy-aware results.
- Attendance entry/correction and student history.
- Gradebook, personal/course/school reports, and safe CSV download.
- Notification history and read controls.
- Profile, password, and workspace settings.

## Interaction Requirements
- Loading, empty, error, success, and permission-denied states.
- React Hook Form and Zod for forms.
- Structured backend field-error mapping.
- Accessible labels, focus indicators, dialogs, and keyboard interaction.
- Confirmation for destructive actions.
- Debounced search and URL-persisted list state after API integration.
- Responsive tables or mobile alternatives.
- Upload progress, preview, and rejection states.
- Unsaved-change warnings for long editors.
- Focused TanStack Query invalidation after mutations.

## Security Requirements
Frontend controls never authorize actions. The browser stores no authentication tokens in localStorage. Private files are downloaded only through backend-authorized routes. Correct quiz answers must not appear before the API release policy allows them.

## Acceptance
A sliced screen is visually and interactively complete but remains explicitly non-production until backed by Laravel API queries. A fully integrated feature requires backend authorization tests and Playwright coverage.
