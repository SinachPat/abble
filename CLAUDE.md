# CLAUDE.md — Abble Codebase Guide

This file provides context for AI assistants working in this repository.

## Project Overview

**Abble** is a Vue 3 single-page application (SPA) for project/workspace management and collaboration. It includes workspace switching, project tracking, connector integrations (GitHub, Linear, etc.), a timeline/feed, and a built-in chat interface. The application is frontend-only with a backend API integration planned but not yet implemented.

## Tech Stack

| Category | Technology |
|---|---|
| Framework | Vue 3 (`<script setup>` Composition API) |
| Build Tool | Vite (dev server on port **5050**) |
| Routing | Vue Router 4 |
| Styling | Tailwind CSS 3 + PostCSS + Autoprefixer |
| Icons | PrimeIcons (`pi-*` CSS classes) |
| Deployment | Vercel (SPA rewrite configured) |
| Node.js | ^20.19.0 or >=22.12.0 |

## Repository Structure

```
abble/                        # Root of the project (the Vue app lives here)
├── public/                   # Static assets served as-is
│   ├── abble-icon.png
│   ├── abble-icon-main.png
│   └── favicon.ico
├── src/
│   ├── main.js               # App entry point — mounts Vue + router
│   ├── App.vue               # Root component with <RouterView />
│   ├── assets/
│   │   ├── main.css          # Tailwind base/components/utilities imports
│   │   └── logo/             # Brand logo assets (8 images)
│   ├── components/           # Reusable feature components
│   │   ├── signin.vue        # Sign-in UI (Google/GitHub OAuth buttons)
│   │   ├── createWorkspace.vue  # Workspace creation form
│   │   ├── timeline.vue      # Main layout: sidebar, feed, chat panel
│   │   └── timeline-card.vue # Individual story/update card
│   ├── views/                # Page-level route components
│   │   ├── SignInView.vue
│   │   ├── CreateWorkspaceView.vue
│   │   └── TimelineView.vue
│   └── router/
│       └── index.js          # Route definitions
├── index.html                # HTML shell — mounts #app
├── vite.config.js            # Vite config (port, alias, proxy placeholder)
├── tailwind.config.js        # Custom font (Inter), custom grid columns
├── jsconfig.json             # Path alias: @ → ./src
├── postcss.config.js         # Tailwind + Autoprefixer
└── vercel.json               # Catch-all SPA rewrite
```

## Development Commands

Run these from the `abble/` directory:

```bash
npm install        # Install dependencies
npm run dev        # Start dev server at http://localhost:5050
npm run build      # Production build → dist/
npm run preview    # Preview production build locally
```

## Architecture & Conventions

### Component Structure

- **`src/views/`** — Route-level page components; one per route. Named in PascalCase (e.g., `TimelineView.vue`).
- **`src/components/`** — Reusable sub-page components. Named in kebab-case (e.g., `timeline-card.vue`).
- All components use the modern `<script setup>` syntax.

### Composition API Patterns

```js
// Always use <script setup>
<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'
import { defineProps } from 'vue'

// State
const isOpen = ref(false)

// Props
const props = defineProps({ title: String, subtitle: String })

// Lifecycle
onMounted(() => { /* setup */ })
onBeforeUnmount(() => { /* cleanup */ })
</script>
```

### Import Paths

Use the `@` alias for all imports from `src/`:

```js
import MyComponent from '@/components/my-component.vue'
import logoImage from '@/assets/logo/logo.png'
```

Never use relative paths like `../../components/...`.

### Styling

- Use **Tailwind utility classes** for all styling. Avoid writing custom CSS unless necessary.
- Use `<style scoped>` when custom CSS is needed.
- **Color palette:**
  - Primary action: `sky-500` / `sky-600` (hover)
  - Success/active: `green-500`
  - Neutral backgrounds: `gray-50` → `gray-950`
  - Text: `gray-700` (body), `gray-900` (headings), `gray-400` (muted)
- **Custom Tailwind config:**
  - Font family: `Inter` (defined as default sans)
  - Custom grid: `grid-cols-custom` = `10% 60% 30%`

### Naming Conventions

| Item | Convention | Example |
|---|---|---|
| View files | PascalCase | `SignInView.vue` |
| Component files | kebab-case | `timeline-card.vue` |
| JS variables/functions | camelCase | `workspaceOptions`, `profileOpen` |
| CSS classes (custom) | kebab-case | `nav-item` |
| Props | camelCase | `workspaceName` |

### State Management

- All state is **local to each component** using `ref()`.
- There is **no global state manager** (no Pinia, no Vuex).
- Pass data down via `props`; use emits for child-to-parent communication.
- If global state becomes necessary, add **Pinia** (preferred for Vue 3).

### Routing

Defined in `src/router/index.js`. Current routes:

| Path | View |
|---|---|
| `/` or `/signin` | `SignInView.vue` |
| `/create-workspace` | `CreateWorkspaceView.vue` |
| `/timeline` | `TimelineView.vue` |

When adding new routes, add them in `router/index.js` and create the corresponding view in `src/views/`.

### Icons

Use **PrimeIcons** class names:

```html
<i class="pi pi-home text-gray-500"></i>
```

Browse available icons at: https://primeng.org/icons

### Dropdown / Click-Outside Pattern

The codebase uses a manual click-outside detection pattern for dropdowns:

```js
const isOpen = ref(false)

const handleClickOutside = (event) => {
  if (!event.target.closest('.dropdown-wrapper')) {
    isOpen.value = false
  }
}

onMounted(() => document.addEventListener('click', handleClickOutside))
onBeforeUnmount(() => document.removeEventListener('click', handleClickOutside))
```

Always clean up event listeners in `onBeforeUnmount`.

## Planned / Future Work

- **Backend API**: A proxy to `http://localhost:8000` is commented out in `vite.config.js`. When adding backend calls, uncomment and configure the proxy, then use relative `/api/` paths in fetch calls.
- **Testing**: Cypress and Vitest are referenced in `.gitignore` but not set up. If adding tests, prefer **Vitest** for unit tests and **Cypress** for E2E.
- **Environment Variables**: No `.env` files exist yet. Use Vite's `import.meta.env.VITE_*` convention when adding them. Never commit secrets.
- **Accessibility**: Add ARIA attributes and alt text to images where missing.

## Deployment

The app deploys to **Vercel**. `vercel.json` rewrites all routes to `index.html` to support client-side routing. The build output is the `dist/` directory generated by `npm run build`.

## Working on This Repo

- The working directory for all commands is `abble/` (not the repo root).
- There are no linters or formatters configured yet. Follow existing code style.
- Keep components focused and small — split large components into smaller ones in `src/components/`.
- Do not add new dependencies without a clear need; the stack is intentionally minimal.
