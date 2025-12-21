# 💎 Vike Deploy Examples

This repo demonstrates the deployability of Vike template across different hosting providers with what I consider 'essentials' in a Vike app (Same feature parities w/ NextJS, SolidStart, SvelteKit, etc.)

Treat this as a learn-by-example repo of the **vike.dev Deploy docs**

It specifically uses [solid-hop](https://github.com/blankeos/solid-hop). In order to make this guide useful, you generally ALWAYS want to check these in each example:

- [x] README.md - contains a **miniguide** of:
  - 1. **Changes since template** - What's different since a fresh template + useful things to know i.e. is `dev` and `build` and `preview` any different?
  - 2. **Platform Notes**Notes when deploying on the platform

### The examples

**Static**

- [x] Static (Cloudflare Pages, Netlify, GitHub Pages) - decided to combine this, they are the same, just read the miniguide. Note that this has no backend.
  - Cloudflare: https://vike-deploy-examples.pages.dev
  - Netlify: https://vike-deploy-examples.netlify.app
  - GitHub Pages: https://blankeos.github.io/vike-deploy-examples (WIP)

**Serverless**

- [x] Vercel - (-)
- [ ] Cloudflare Workers - (https://vike-deploy-examples.carloantonioct.workers.dev)
- [ ] ~AWS Lambda~ (Unplanned)
- [ ] Netlify Function

**Traditional**

- [x] Docker (Dokploy or Coolify or Railway)
- [ ] Buildpacks / Nixpacks (Railway, Heroku, etc)

### Maintenance

Carlo maintains this religiously, but feel free to make PRs to keep it up-to-date.

When the solid-hop template changes, I would generally redo the `bunx degit` but keep the README.md miniguide.

The flavor of Vike in these examples use:

- Frontend: Solid.js
- With server: Hono
- Runtimes: Node and Bun
- Package manager: Bun (No node sorry... But the project has nothing Bun-specific in the code except `bunx --bun`)
