# Zeno – TODO

## Authentication

- [x] Integrate Better Auth
- [x] Configure OAuth providers (Google, GitHub, etc.)
- [x] Set up protected routes + session handling
- [x] Redirect flow: guest → login → dashboard
- [x] Secure session handling (httpOnly cookies, CSRF, sameSite, etc.)

## Database Setup

- [ ] Define initial DB schema (Drizzle + PostgreSQL)
- [ ] Implement core entities:
- [ ] Glimpses
- [ ] Initiatives
- [ ] Notes / Questions / Tasks (organized outputs of glimpses)
- [ ] Articles (finalized initiative output)
- [x] Users & OAuth accounts
- [x] Add tenant or team support structure

## Core App Flow

- [ ] Always-visible “Capture Glimpse” input
- [ ] Create dedicated **Zen Session** page for organizing glimpses

## App State

- [ ] Create a global app state (using Zustand or similar).
- [ ] Store user information in the state.
- [ ] Store the active initiative in the state.