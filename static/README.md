# static miniguide

Reference: https://vike.dev/cloudflare-pages | https://vike.dev/netlify | https://vike.dev/github-pages

## 1. Changes since template

- Enable pre-rendering

```diff
// src/pages/+config.ts
export default {
  extends: [config, vikePhoton],
  photon: {
    server: "src/server/server.ts",
  },
+ prerender: true
} satisfies Config
```

- Script changes (Just regular node)

```diff
// package.json
- "dev": "bunx --bun vike dev",
- "build": "bunx --bun vike build",
+ "dev": "vike dev",
+ "build": "vike build",
```

- Good-to-know: `bun run build` creates `dist/client/**/*.html` and `dist/client/**/*.pageContext.json`
- Good-to-know: `dist/client` becomes the servable root. You can `cd dist/client && npx serve` to serve it for example.
- That's it 🎉

## 2. Platform Notes

### 🟠 Cloudflare

- 'Create Application' (Find "Looking to deploy Pages? Get started")
- Build settings

```sh
# Framework preset:
None

# Build command:
bun run build

# Build output directory:
dist/client

# Advanced > Root (If monorepo)
subfolder/path # replace with actual relative path
```

### 🟢 Netlify

- Add new Project
- Build settings

```sh
# Base directory (If mono repo)
subfolder/path # replace with actual relative pathh

# Build command
bun run build

# Publish directory
dist/client
```

### 🤖 GitHub Pages

- Create a `.github/workflows/deployment.yml`
- Just use `actions/configure-pages@v4`, and upload `dist/client` (`actions/upload-pages-artifact@v3`), and deploy (`actions/deploy-pages@v4`).
