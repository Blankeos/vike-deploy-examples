# vercel miniguide

Reference: https://vike.dev/vercel

## 1. Changes since template

- Install

```sh
bun add @photonjs/vercel
bun add h3 # This was necessary, but (unfortunately) not documented
```

- Good-to-know: `bun run build` creates `.vercel/output`
- Gitignored `.vercel/`
- No code changes. Works automatically. That's it 🎉

## 2. Platform Notes

- Framework Preset: Vite (auto-detected)
- Other than that, no need to change anything. Just deploy
