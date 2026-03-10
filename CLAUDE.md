# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

MPC (Multi Projects Company) corporate website — a static, single-page site for an Iraqi investment/construction firm. No build tools, no frameworks, no package manager.

## Development

Open `index.html` directly in a browser or use any static file server (e.g., `npx serve .` or VS Code Live Server). There is no build step, linter, or test suite.

## Architecture

- **`index.html`** — Single-page layout with all sections: header, hero (with background video), about, values, mission/vision, board, group logos, projects (tabbed), contact form, footer.
- **`assets/css/styles.css`** — All styles in one file. Dark theme using CSS custom properties (`:root` vars prefixed `--bg`, `--gold`, `--text`, `--muted`, `--border`). Responsive breakpoints at 992px and 768px. Font: Montserrat (Google Fonts CDN).
- **`assets/js/main.js`** — Vanilla JS: mobile nav toggle, scroll-reveal via IntersectionObserver (`.reveal` → `.visible`), animated stat counters (`data-target` attribute), tab switching for projects section, and a client-side-only contact form handler (no backend).
- **`assets/img/`** — Images (logos, board photos, project photos, hero cards).
- **`assets/video/`** — Hero background video (`city-construction.mp4`).
- **`assets/mpc-company-profile.pdf`** — Downloadable company profile (linked from header).

## Key Conventions

- Color accent is gold (`--gold: #f6b048`, `--gold-soft: #f3c678`); background is near-black.
- Scroll-reveal pattern: add class `reveal` to any element to get fade-up-on-scroll animation.
- Section numbering uses `.eyebrow` spans (e.g., "01", "02").
- All navigation is anchor-based (`#about`, `#values`, etc.); smooth scroll via CSS `scroll-behavior: smooth`.
- The contact form is frontend-only — `submit` is intercepted with `preventDefault()` and shows a static thank-you message.
- `.gitignore` excludes `assets/mpc-company-profile.pdf`.
