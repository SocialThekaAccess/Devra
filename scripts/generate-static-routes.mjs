/**
 * generate-static-routes.mjs
 *
 * After `vite build`, this script:
 *  1. Copies dist/index.html to dist/404.html (SPA fallback)
 *  2. Creates a dist/<route>/index.html for every known route so the site
 *     works on static hosts (Netlify, Vercel, S3, etc.) without server redirects
 *  3. Injects per-page SEO meta (title, description, canonical, Open Graph,
 *     Twitter Card, JSON-LD schema) into each static HTML file so crawlers and
 *     social-share scrapers see the correct metadata before JS hydrates
 */

import { mkdir, readFile, writeFile } from 'node:fs/promises'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { routePaths } from '../src/routes.js'
import { seoConfig, defaultSeo } from '../src/seoConfig.js'

const __dirname  = path.dirname(fileURLToPath(import.meta.url))
const projectRoot = path.resolve(__dirname, '..')
const distDir    = path.join(projectRoot, 'dist')
const indexPath  = path.join(distDir, 'index.html')

// ── Helpers ───────────────────────────────────────────────────────────────────

function esc(str) {
  return String(str ?? '')
    .replace(/&/g, '&amp;')
    .replace(/"/g, '&quot;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
}

/**
 * Build the full <head> meta block for a given route path.
 * Falls back to defaultSeo for any field not present.
 */
function buildHeadMeta(routePath) {
  // Canonical paths: legacy /services/* aliases resolve to the SEO slug
  const seoKey =
    seoConfig[routePath]
      ? routePath
      : Object.keys(seoConfig).find((k) => seoConfig[k] && routePath.startsWith(k)) ?? '/'

  const seo   = { ...defaultSeo, ...(seoConfig[seoKey] ?? {}) }
  const title = esc(seo.title)
  const desc  = esc(seo.description)
  const canon = esc(seo.canonical ?? `https://www.devra.in${routePath}`)
  const image = esc(seo.ogImage ?? defaultSeo.ogImage)
  const jsonld = JSON.stringify(seo.schema ?? defaultSeo.schema)

  return `
    <!-- Primary -->
    <title>${title}</title>
    <meta name="description" content="${desc}" />
    <meta name="robots" content="index, follow" />

    <!-- Canonical -->
    <link rel="canonical" href="${canon}" />

    <!-- Open Graph -->
    <meta property="og:type" content="website" />
    <meta property="og:site_name" content="Devra Architects" />
    <meta property="og:title" content="${title}" />
    <meta property="og:description" content="${desc}" />
    <meta property="og:url" content="${canon}" />
    <meta property="og:image" content="${image}" />
    <meta property="og:image:width" content="1200" />
    <meta property="og:image:height" content="630" />
    <meta property="og:locale" content="en_IN" />

    <!-- Twitter Card -->
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:site" content="@devra_architects" />
    <meta name="twitter:title" content="${title}" />
    <meta name="twitter:description" content="${desc}" />
    <meta name="twitter:image" content="${image}" />

    <!-- JSON-LD Schema -->
    <script type="application/ld+json" data-rjld="1">${jsonld}</script>`
}

/**
 * Replace the existing SEO block in the base index.html with per-page meta.
 * We target the comment markers we placed in index.html, or fall back to
 * inserting just before </head>.
 */
function injectMeta(baseHtml, routePath) {
  const block = buildHeadMeta(routePath)

  // Remove the entire static SEO block from index.html (title + all meta we
  // baked in) and replace with the per-route block.
  // Strategy: strip everything between <!-- Primary --> and the closing </script>
  // of the JSON-LD block, then re-insert our generated block.
  const stripped = baseHtml
    // Remove existing <title>
    .replace(/<title>[^<]*<\/title>\s*/gi, '')
    // Remove existing <meta name="description" ...>
    .replace(/<meta\s+name="description"[^>]*>\s*/gi, '')
    // Remove existing <meta name="robots" ...>
    .replace(/<meta\s+name="robots"[^>]*>\s*/gi, '')
    // Remove existing <link rel="canonical" ...>
    .replace(/<link\s+rel="canonical"[^>]*>\s*/gi, '')
    // Remove all existing og: meta tags
    .replace(/<meta\s+property="og:[^"]*"[^>]*>\s*/gi, '')
    // Remove all existing twitter: meta tags
    .replace(/<meta\s+name="twitter:[^"]*"[^>]*>\s*/gi, '')
    // Remove existing JSON-LD script blocks
    .replace(/<script\s+type="application\/ld\+json"[^>]*>[\s\S]*?<\/script>\s*/gi, '')
    // Remove leftover HTML comments used as markers
    .replace(/<!--\s*(Primary|Canonical|Open Graph|Twitter Card|JSON-LD[^-]*)-->\s*/gi, '')

  // Insert our fresh block just before </head>
  return stripped.replace('</head>', `${block}\n  </head>`)
}

// ── Main ──────────────────────────────────────────────────────────────────────

const baseHtml = await readFile(indexPath, 'utf8')

// 404 fallback uses homepage SEO (best default for unknown paths)
const fallbackHtml = injectMeta(baseHtml, '/')
await writeFile(path.join(distDir, '404.html'), fallbackHtml)
console.log('✓ 404.html written')

// Generate one index.html per route
let count = 0
for (const routePath of routePaths) {
  const routeDir       = path.join(distDir, routePath.slice(1))
  const routeIndexPath = path.join(routeDir, 'index.html')

  await mkdir(routeDir, { recursive: true })
  await writeFile(routeIndexPath, injectMeta(baseHtml, routePath))
  count++
}

console.log(`✓ ${count} static route files written with per-page SEO meta`)
