# Project Brief — NusaLearn Frontend

## Purpose
NusaLearn is the browser application for a single-school Learning Management System. This repository owns the Next.js user experience and will consume a separate Laravel 13 API.

## Users
- Administrators manage accounts, academic structure, courses, reports, and audit views.
- Teachers manage assigned-course content, assessment, attendance, grades, and reports.
- Students access enrolled courses, complete work, and review personal results.

## Problem
The original project was a static school dashboard with disconnected mock tables. The LMS needs one coherent, accessible workspace that traces real academic workflows and is ready for contract-driven API integration.

## Goals
- Complete responsive design slicing before backend integration.
- Provide clear loading, empty, validation, success, and permission states.
- Keep authorization authoritative in the Laravel API; frontend role visibility is presentation only.
- Avoid browser token storage by using Laravel Sanctum stateful SPA authentication.

## Scope
Authentication, role dashboards, users, academic structure, courses, materials, assignments, quizzes, attendance, grades, reports, notifications, profile, uploads, and responsive navigation.

## Assumptions
- Single school and three roles: ADMIN, TEACHER, STUDENT.
- Backend lives in a sibling repository named `dashboard-school-api`.
- School display timezone is `Asia/Jakarta`; server data and deadlines remain authoritative.
- Current workflow data is typed design-slice fixture data and is not production persistence.

## Success Criteria
The frontend type-checks, lints, builds, and passes representative desktop/mobile Playwright flows. After backend delivery, fixtures are removed feature by feature in favor of generated OpenAPI client calls.
