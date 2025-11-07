# Zeno – TODO

## Authentication

- [  ] Integrate Better Auth
- [ ] Configure OAuth providers (Google, GitHub, etc.)
- [ ] Set up protected routes + session handling
- [ ] Redirect flow: guest → login → dashboard
- [ ] Secure session handling (httpOnly cookies, CSRF, sameSite, etc.)

## Database Setup

- [ ] Define initial DB schema (Drizzle + PostgreSQL)
- [ ] Implement core entities:
  - [ ] Glimpses
  - [ ] Initiatives
  - [ ] Notes / Questions / Tasks (organized outputs of glimpses)
  - [ ] Articles (finalized initiative output)
  - [ ] Users & OAuth accounts
- [ ] Add tenant or team support structure (if applicable later)

## Core App Flow

- [ ] Always-visible “Capture Glimpse” input
- [ ] Create dedicated **Zen Session** page for organizing glimpses
