# create-bawo-frontend website

This project is the landing page and documentation website for `create-bawo-frontend`.

It is built to help users understand what the CLI does, how to install it, and how to use its supported features. The site combines product marketing, technical documentation, and a simple assistant experience in one frontend application.

## What the website covers

- what `create-bawo-frontend` is
- installation and usage guides
- supported frameworks such as React, Next.js, Vue, and Svelte
- Tailwind CSS setup
- backend integrations
- state management options
- animation support
- fonts and project tooling

## Features in the website

- landing page for the CLI
- documentation pages
- light and dark theme support
- floating FAQ/chat assistant
- GSAP route transitions

## Tech stack

- React
- Vite
- React Router
- Tailwind CSS v4
- GSAP

## Project structure

```text
src/
  animations/   GSAP transition logic
  components/   shared UI components
  data/         FAQ and static content data
  pages/        route-level pages
  styles/       global stylesheet entry
  theme/        theme provider and theme tokens
```

## Run locally

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```
