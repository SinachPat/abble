# Changelog — Abble

All notable changes to this project, organized by feature area.

---

## [Unreleased]

### Documentation
- **Add CLAUDE.md** — Comprehensive AI assistant guide covering project structure, tech stack, conventions, and development workflows. (`307ff57`)

---

## Timeline & Dashboard

The main timeline view was built incrementally across many commits, evolving from a basic layout into a full three-panel dashboard.

### Chat Panel (Right Sidebar)
- Added a built-in chat interface on the right side of the timeline view with message input and conversation area. (`590fd1a`)
- Built out the right sidebar structure with proper layout. (`c86f6df`)

### Timeline Cards
- Extracted timeline cards into a dedicated `timeline-card.vue` component for reusability. (`019e7a3`)
- Completed the card design with full content layout (title, description, metadata, actions). (`fdfc03d`)
- Iterative card styling and layout improvements across multiple commits. (`65e6747`, `6099700`, `917e732`)

### Main Feed & Navigation
- Added top navigation bar to the timeline view. (`d233ff1`)
- Built the story/feed section in the main content area. (`68d9b49`, `7eb6c75`)
- Added timeline detail elements and connector icons (Jira integration icon). (`6c6e8db`)
- Ongoing timeline layout refinements. (`23b2fd4`)

### Left Sidebar & Navigation
- Created the dashboard left panel with workspace switcher, project list, and connector integrations. (`6ceabc9`)
- Expanded the sidebar with user profile, navigation links, and project sections. (`c85fd30`)
- Refined the left sidebar with improved layout and interactivity. (`ca6719f`)

### Assets Added
- Sidebar expand icon, Jira logo, Linear logo, workspace logos (HNG Tech, Laasify, MeetWith), and user avatar. (`6ceabc9`, `c85fd30`, `68d9b49`, `6c6e8db`)

---

## Workspace Creation

- Added the workspace creation page (`/create-workspace`) with a form component accepting title/subtitle props. (`978d3d0`)
- Created `CreateWorkspaceView.vue` and `createWorkspace.vue` component.

---

## Authentication / Sign-In

- Built the initial sign-in page with Google and GitHub OAuth buttons. (`4b5e0cf`)
- Switched to PrimeIcons for cleaner icon rendering in the sign-in UI. (`67589fd`)
- Added dark theme logo variant and refined sign-in styling. (`c717cf1`, `59386a2`, `e365457`)
- Updated background color for the sign-in page. (`29a6ac2`, `ea03509`)

---

## Branding & Assets

- Added custom Abble favicon and app icons (`abble-icon.png`, `abble-icon-main.png`). (`2740a21`, `1174e9b`)
- Updated HTML title and favicon references. (`1174e9b`)
- Added multiple logo variants (dark, light, brand mark). (`c717cf1`, `6ceabc9`)

---

## Infrastructure & Deployment

- Configured Vercel deployment with SPA rewrite rules (`vercel.json`). (`44747e6`)
- Set up Vue Router with routes for sign-in, workspace creation, and timeline. (`6105c24`, `b99d26b`)
- Added root `README.md` with project setup instructions. (`3a111bc`, `c76a72d`)

---

## Initial Project Setup

- Scaffolded Vue 3 + Vite project with Tailwind CSS, PostCSS, Vue Router, and PrimeIcons. (`4b5e0cf`)
- Configured Vite dev server on port 5050 with `@` path alias.
- Set up Tailwind with Inter font family and custom grid template.
