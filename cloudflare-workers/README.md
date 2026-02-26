# cloudflare-workers miniguide

Reference: https://vike.dev/cloudflare-pages

## 1. Changes since template

- Install

```sh
bun add @photonjs/cloudflare # This is usually the only thing you need

# Optionally:

# I got a lot more stable installs by also pinning the version here
bun add wrangler @cloudflare/vite-plugin

# Install esbuild specifically to avoid version mismatches in CI/build environments
bun add -d esbuild@0.27.3

# Add as optional dependency... Install rollup linux bindings (if you're on macOS or Windows, since CF is technically on Linux at build)
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

- Write your `wrangler.jsonc` [(see)](/wrangler.jsonc)
- Make sure Runtime settings in dashboard matches `wrangler.jsonc` (`compatibility_date`, `compatibility_flags`)
- Important: use `target: "node"` in dev, `"auto"` in production (cold-start race workaround for `@photonjs/cloudflare`):
  ```diff
  export default {
    extends: [config, vikePhoton],
    photon: {
  +    target: process.env.NODE_ENV === "development" ? "node" : "auto",
      server: "src/server/server.ts",
    },
  } satisfies Config
  ```
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

# Root directory (if mono repo):
<subfolder/path>
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
