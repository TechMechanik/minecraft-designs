# TechMechanik Minecraft

Static docs site built with Docusaurus, deployed to GitHub Pages.

## Local dev

```bash
npm ci
npm start
```

## Build

```bash
npm run build
npm run serve
```

## Deploy (GitHub Pages)

This repo includes a GitHub Action that deploys on every push to `main`.
Make sure GitHub Pages is set to deploy from the `gh-pages` branch.

Repo settings:
- Settings → Pages → Source: **Deploy from a branch**
- Branch: **gh-pages** / **/(root)**

