# cloudflare-workers miniguide

Reference: https://vike.dev/cloudflare-pages

## 1. Changes since template

- Install

```sh
bun add wrangler @photonjs/cloudflare @cloudflare/vite-plugin
bun add -d esbuild@0.27.3
```

- Install rollup linux bindings (if you're on macOS or Windows)

```sh
bun add --optional @rollup/rollup-linux-x64-gnu @rolldown/binding-linux-x64-gnu
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
- Keep Runtime settings in dashboard matching `wrangler.jsonc` (`compatibility_date`, `compatibility_flags`)
- Keep `esbuild` pinned for stable CI installs:

```json
"overrides": {
  "esbuild": "0.27.3"
}
```

- Good-to-know: `bun run build` creates `dist/server/wrangler.json` and `.wrangler`
- That's it 🎉

## 2. Platform Notes

- Create application (Worker by default)
- Build settings

```sh
# Build command:
bun run vike build

# Deploy command:
npx wrangler deploy

# Root directory (if monorepo):
cloudflare-workers

# Build env var:
BUN_VERSION=1.3.9
```

### Known Troubleshooting

<details>
<summary> workerd mismatch: Expected "2025-12-17" but got "workerd 2026-02-19" </summary>

Fix:

```sh
bun add @cloudflare/vite-plugin@^1.25.2
bun install
```

Then commit `package.json` + `bun.lock`, clear Cloudflare dependency cache, and retry deploy.

</details>

<details>
<summary> esbuild mismatch: Expected "0.27.0" but got "0.27.3" </summary>

Fix:

```sh
bun add -d esbuild@0.27.3
bun install
```

Ensure `overrides.esbuild = "0.27.3"`, then commit `package.json` + `bun.lock`, clear dependency cache, and retry deploy.

</details>
