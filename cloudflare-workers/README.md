# cloudflare-workers miniguide

Reference: https://vike.dev/cloudflare-pages

## 1. Changes since template

- Install

```sh
bun add wrangler @photonjs/cloudflare
```

- Script changes

```diff
// package.json
- "dev": "bunx --bun vike dev",
- "build": "bunx --bun vike build",
+ "dev": "vike dev",
+ "build": "vike build",
```

- Added `wrangler.jsonc` [(see)](/wrangler.jsonc)
- Gitignored `.wrangler/`
- Good-to-know: `bun run build` creates `dist/server/wrangler.json` and `.wrangler`
- That's it. 🎉

## 2. Platform Notes

- 'Create application (worker by default)'
- Build configurations

```sh
# 💡 Remember that these commands are shell-level, not package manager level (meaning `bun run` is needed for package.json scripts)
# Build command:
bun run vike build
# Deploy command:
npx wrangler deploy # this is default
```
