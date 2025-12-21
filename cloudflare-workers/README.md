# cloudflare-workers miniguide

Reference: https://vike.dev/cloudflare-pages

## 1. Changes since template

- Install

```sh
bun add wrangler @photonjs/cloudflare
```

- Install rollup linux bindings (If you're on Mac or Windows)

```sh
# Undocumented... Since cloudflare builds your app inside a linux machine technically, it needs linux bindings.
# But your lockfile won't have the linux bindings because you're on mac. This adds it to "optionalDependencies".
bun add @rollup/rollup-linux-x64-gnu @rolldown/binding-linux-x64-gnu --optional

# If you don't do this, you might get a Error: Cannot find module @rollup/rollup-linux-x64-gnu. /node_modules/rollup/dist/native.js:64
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
