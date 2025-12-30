# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is the Lebanon VASyR (Vulnerability Assessment of Syrian Refugees) Portal - a Vue.js 2 single-page application that presents multi-sectoral assessment data about Syrian refugee households in Lebanon. The portal is jointly maintained by UNHCR, UNICEF, and WFP.

## Development Commands

**Important**: All commands require the `NODE_OPTIONS=--openssl-legacy-provider` environment variable due to legacy OpenSSL requirements.

```bash
# Install dependencies
npm install

# Development server with hot-reload
npm run serve

# Production build
npm run build

# Lint and fix files
npm run lint
```

## Architecture

### Application Structure

This is a **single-page application** (SPA) with a single route (`/`) that renders multiple section components vertically. The router ([src/router.js](src/router.js)) only defines the home route - all navigation is handled via smooth scrolling between sections on the same page.

### Core Flow

1. **[src/main.js](src/main.js)** - Entry point that initializes Vue, registers global plugins (VModal, VueGtag, Bootstrap), and imports custom directives
2. **[src/App.vue](src/App.vue)** - Root component with:
   - Loading screen that waits for DOM ready + all images loaded (via `vue-images-loaded`)
   - Fixed navigation (`TopMenu` component)
   - Modal system for download notifications
   - Global CSS variables for theming (`--var-theme-*` custom properties)
3. **[src/views/Home.vue](src/views/Home.vue)** - Aggregates all section views vertically

### Section Components (Views)

The home page is composed of these section views in order:
- **Main** - Hero/intro section with VASyR overview text
- **RoadMap** - Project roadmap/timeline visualization
- **Chapters** - VASyR report chapters with downloadable content
- **Maps** - Links to PowerBI dashboards
- **Reports** - Annual VASyR reports and presentations
- **Tools** - Related tools and resources
- **Vault** - Additional resources and training materials

### Data Architecture

**[src/services/data.service.js](src/services/data.service.js)** - Centralized data provider that acts as a single source of truth for all static content. This service imports constants from `src/assets/constants/` and provides methods like `getTopMenuData()`, `getChaptersData()`, etc.

**Design pattern**: The DataService is designed as a future-proof abstraction layer. Currently serves static data from constants files, but structured to easily swap in API calls later with minimal changes to consuming components.

### Key Constants Files

Located in `src/assets/constants/`:
- **chapters.js** - Large dataset (~25KB) of chapter content and metadata
- **vault.js** - Massive dataset (~360KB) of vault resources
- **topmenuitems.js**, **roadmapitems.js**, **reports.js**, **tools.js** - Smaller configuration files

### Reusable Utilities

**[src/helpers/helpers.js](src/helpers/helpers.js)** - Common utilities used across components:
- `scrollTo(selector, duration)` - Smooth animated scrolling to sections with easing
- `easeInOutCubic()` / `easeOut()` - Easing functions for animations
- `isMobile` - Device detection utilities
- `paginate()` - Client-side pagination logic

### Custom Directives

**[src/directives/directives.js](src/directives/directives.js)** - Registers `v-tooltip` directive that wraps Bootstrap tooltips using jQuery

### Navigation Pattern

Navigation uses smooth scrolling between sections rather than route changes. The `TopMenu` component calculates section offsets and uses the `scrollTo` helper to animate scrolling. The fixed menu height is factored into scroll calculations.

### Static Assets

- **public/files/** - PDF reports, presentations, and downloadable resources
- **src/assets/fonts/** - Montserrat font family variants (Regular, Light, Medium, Bold, Black)
- File paths use `/vasyr` public path prefix (configured in [vue.config.js](vue.config.js))

## Technology Stack

- **Vue.js 2.6.10** - Core framework
- **Vue Router 3.x** - Routing (minimal usage - single route only)
- **Bootstrap 4.3.1** - UI framework with jQuery and Popper.js
- **vue-js-modal** - Modal dialogs
- **vue-gtag** - Google Analytics (GA4: G-6N8Q8GQ89F)
- **vue-images-loaded** - Image loading detection for loading screen

## Configuration Notes

- **[vue.config.js](vue.config.js)** - Webpack configuration that globally provides jQuery and Popper.js to all modules
- **Public path**: `/vasyr` - All builds deploy to a `/vasyr` subdirectory
- **Legacy OpenSSL**: Required for build compatibility with older dependencies
- **Git**: Main branch is `master`, current feature branch is `feature/vasyr-2024`
