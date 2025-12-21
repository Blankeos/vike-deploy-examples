This repo demonstrates the deployability of Vike template across different hosting providers.

Treat this as a learn-by-example repo of the [solid-hop](https://github.com/blankeos/solid-hop).

It specifically uses [solid-hop](https://github.com/blankeos/solid-hop). In order to make this guide useful, you generally ALWAYS want to check these in each example:

- [x] README.md - contains a **miniguide** of:
  - 1. Code changes since a fresh template - What's different and what you should know.
  - 2. Notes when deploying on the platform

### The examples

**Static**

- [ ] GitHub Pages
- [ ] Cloudflare Pages
- [ ] Netlify

**Serverless**

- [x] Vercel - docs
- [ ] Cloudflare Workers - docs
- [ ] ~AWS Lambda~ (Unplanned)
- [ ] Netlify Functions

**Traditional**

- [ ] Docker (Dokploy or Coolify)

### Maintenance

Carlo maintains this religiously, but feel free to make PRs to keep it up-to-date.

When the solid-hop template changes, I would generally redo the `bunx degit` but keep the README.md miniguide.

The flavor of Vike in these examples use:

- Frontend: Solid.js
- With server: Hono
- Runtimes: Node and Bun
- Package manager: Bun (No node sorry... But the project has nothing Bun-specific in the code except `bunx --bun`)
