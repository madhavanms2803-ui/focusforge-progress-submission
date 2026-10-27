# FocusForge — Task Progress Tracker

This repository contains the FocusForge Challenge #1 solution. The existing Motivation Mode quote widget has been replaced by a task progress tracker.

## What changed
- Shows completed, total, and remaining task counts.
- Displays an accessible progress bar that updates with dashboard task state.
- Handles empty task lists and all-complete states.
- Removes the quote refresh loop from the dashboard widget so it no longer makes periodic quote requests.

## Project structure
- `client/` — React and Vite frontend.
- `server/` — Express API using Prisma and PostgreSQL.
- `Changes.md` — rationale and summary of the change.

## Run locally
Requirements: Node.js 16+ and PostgreSQL.

1. Configure `server/.env` using the example format from your environment (do not commit secrets).
2. In `server/`, run `npm install`, then `npx prisma migrate dev --name init`, then `npm run dev`.
3. In `client/`, run `npm install` and `npm run dev`.

The frontend API currently expects the backend at `http://localhost:5000/api/tasks`.

## Validation
This repository copy was created through GitHub's online file tools. Runtime testing has not yet been performed; start the app locally and verify adding tasks and toggling completion updates the progress widget.
