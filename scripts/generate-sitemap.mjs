/**
 * generate-sitemap.mjs
 *
 * Generates /dist/sitemap.xml at build time.
 * Run automatically via the "build" script in package.json after vite build.
 */

import { writeFile } from 'node:fs/promises'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const distDir = path.resolve(__dirname, '..', 'dist')

const SITE = 'https://www.devra.in'
const TODAY = new Date().toISOString().split('T')[0] // YYYY-MM-DD

/**
 * All URLs to include in the sitemap.
 *
 * Only the canonical slugs are listed (not the /services/* legacy aliases).
 * priority: 1.0 = homepage, 0.9 = service categories, 0.7 = project detail, 0.6 = static pages
 * changefreq: how often Google should re-crawl
 */
const urls = [
  // ── Core pages ───────────────────────────────────────────────────────────────
  { loc: '/',          changefreq: 'weekly',  priority: '1.0' },
  { loc: '/about-us',  changefreq: 'monthly', priority: '0.6' },
  { loc: '/contact',   changefreq: 'monthly', priority: '0.6' },

  // ── Service categories (canonical SEO slugs) ─────────────────────────────────
  { loc: '/residential-architects-chandigarh',  changefreq: 'weekly',  priority: '0.9' },
  { loc: '/housing-architects-chandigarh',      changefreq: 'weekly',  priority: '0.9' },
  { loc: '/commercial-architects-chandigarh',   changefreq: 'weekly',  priority: '0.9' },
  { loc: '/school-architects-chandigarh',       changefreq: 'weekly',  priority: '0.9' },
  { loc: '/hospitality-architects-chandigarh',  changefreq: 'weekly',  priority: '0.9' },
  { loc: '/farm-house-architects-chandigarh',   changefreq: 'weekly',  priority: '0.9' },

  // ── Residential projects ─────────────────────────────────────────────────────
  { loc: '/services/residential/121-122',       changefreq: 'monthly', priority: '0.7' },
  { loc: '/services/residential/villa-361',     changefreq: 'monthly', priority: '0.7' },
  { loc: '/services/residential/villa-58',      changefreq: 'monthly', priority: '0.7' },
  { loc: '/services/residential/villa-303',     changefreq: 'monthly', priority: '0.7' },
  { loc: '/services/residential/villa-201d',    changefreq: 'monthly', priority: '0.7' },
  { loc: '/services/residential/the-kangs',     changefreq: 'monthly', priority: '0.7' },
  { loc: '/services/residential/col-supreet',   changefreq: 'monthly', priority: '0.7' },
  { loc: '/services/residential/the-midhas',    changefreq: 'monthly', priority: '0.7' },
  { loc: '/services/residential/the-minzs',     changefreq: 'monthly', priority: '0.7' },

  // ── Housing projects ─────────────────────────────────────────────────────────
  { loc: '/services/housing/sansarg',           changefreq: 'monthly', priority: '0.7' },
  { loc: '/services/housing/panchkula-housing', changefreq: 'monthly', priority: '0.7' },

  // ── Commercial projects ──────────────────────────────────────────────────────
  { loc: '/services/commercial/devra-architects', changefreq: 'monthly', priority: '0.7' },
  { loc: '/services/commercial/fortofino',        changefreq: 'monthly', priority: '0.7' },
  { loc: '/services/commercial/milk-point',       changefreq: 'monthly', priority: '0.7' },

  // ── School projects ──────────────────────────────────────────────────────────
  { loc: '/services/schools/m-s-school',          changefreq: 'monthly', priority: '0.7' },
  { loc: '/services/schools/j-p-international',   changefreq: 'monthly', priority: '0.7' },

  // ── Hospitality projects ─────────────────────────────────────────────────────
  { loc: '/services/hospitality/castle-grey',     changefreq: 'monthly', priority: '0.7' },

  // ── Farm house projects ──────────────────────────────────────────────────────
  { loc: '/services/farm-houses/gill-s-farmhouse', changefreq: 'monthly', priority: '0.7' },
  { loc: '/services/farm-houses/nagra-farmhouse',  changefreq: 'monthly', priority: '0.7' },
]

const urlEntries = urls
  .map(
    ({ loc, changefreq, priority }) => `
  <url>
    <loc>${SITE}${loc}</loc>
    <lastmod>${TODAY}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>`,
  )
  .join('')

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset
  xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
  xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
  xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9
    http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">
${urlEntries}
</urlset>
`

const outPath = path.join(distDir, 'sitemap.xml')
await writeFile(outPath, sitemap, 'utf8')
console.log(`✓ sitemap.xml written to ${outPath} (${urls.length} URLs)`)
