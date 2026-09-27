# LZ4 Compression Playground

An interactive, fully client-side web playground for the **LZ4 compression algorithm**. Drop files into your browser, compress and decompress them with LZ4, and explore performance benchmarks plus data visualizations — all without your data ever leaving your machine.

## What it does

- **Compress & decompress** files in the browser using LZ4 (via a WebAssembly module)
- **Performance benchmarks** — measure compression/decompression speed on your own data
- **Data visualizations** — charts showing compression ratios and throughput (powered by Recharts)
- **Privacy by design** — everything runs client-side; the WASM module is loaded from a CDN and no data is sent to any server
- Includes a **privacy policy** page describing the client-side-only data handling

## Features

- Drag-and-drop file upload and compression playground UI
- Real-time compression ratio stats
- Benchmark suite comparing LZ4 throughput across payloads
- Interactive charts (ratio vs. time, throughput distributions)
- Dark/light themed UI built on shadcn/ui + Radix primitives
- Tailwind CSS styling

## Tech stack

- **Next.js** 15 (App Router) — statically exported
- **React** 19
- **TypeScript**
- **LZ4** via `@nick/lz4` WebAssembly (loaded at runtime from CDN)
- **Recharts** for visualizations
- **shadcn/ui** (Radix UI primitives), **Tailwind CSS**
- **lucide-react** icons

## Quick start

Prerequisites: Node.js 18+ and npm.

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build (static export)

```bash
npm run build
```

This produces a static site in the `out/` directory (via `output: 'export'` in `next.config.mjs`).

## Project structure

```
├── app/                  # Next.js App Router pages
│   ├── page.tsx          # Main playground page
│   ├── privacy/          # Privacy policy page
│   ├── layout.tsx        # Root layout + metadata
│   └── globals.css       # Global styles
├── components/
│   ├── playground/       # Compression playground UI components
│   └── ui/               # shadcn/ui primitives
├── lib/
│   └── lz4.ts            # LZ4 WASM loader (runtime CDN import)
├── hooks/                # React hooks
├── public/               # Static assets
└── styles/               # Extra styles
```

## Environment variables

None required. The LZ4 WASM module is fetched at runtime from a public CDN (`https://nick.deno.dev`), so an internet connection is needed at runtime, but no keys or secrets.

## Deployment notes

- The site is fully static — deploy the `out/` directory to any static host (GitHub Pages, Cloudflare Pages, Netlify, Vercel).
- `next.config.mjs` includes `output: 'export'` and `basePath: '/lz-4-playground-demo'` for the GitHub Pages subpath deployment. Remove `basePath` if deploying to a domain root (e.g. Vercel).
- Lint and type errors are ignored during builds (`ignoreDuringBuilds` / `ignoreBuildErrors`), matching the original v0-generated config.

## Live demo

**https://girishlade111.github.io/lz-4-playground-demo/**

---

Built by Girish Lade — https://ladestack.in
