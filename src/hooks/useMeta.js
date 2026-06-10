import { useEffect } from 'react'
import { defaultSeo } from '../seoConfig'

// ─── Helpers ─────────────────────────────────────────────────────────────────

function setMeta(name, content) {
  if (!content) return
  let el = document.querySelector(`meta[name="${name}"]`)
  if (!el) {
    el = document.createElement('meta')
    el.setAttribute('name', name)
    document.head.appendChild(el)
  }
  el.setAttribute('content', content)
}

function setProperty(property, content) {
  if (!content) return
  let el = document.querySelector(`meta[property="${property}"]`)
  if (!el) {
    el = document.createElement('meta')
    el.setAttribute('property', property)
    document.head.appendChild(el)
  }
  el.setAttribute('content', content)
}

function setCanonical(href) {
  if (!href) return
  let el = document.querySelector('link[rel="canonical"]')
  if (!el) {
    el = document.createElement('link')
    el.setAttribute('rel', 'canonical')
    document.head.appendChild(el)
  }
  el.setAttribute('href', href)
}

function setJsonLd(schema) {
  if (!schema) return
  // Remove existing JSON-LD injected by this hook (marked with data-rjld)
  document.querySelectorAll('script[type="application/ld+json"][data-rjld]').forEach((s) => s.remove())

  const script = document.createElement('script')
  script.type = 'application/ld+json'
  script.setAttribute('data-rjld', '1')
  script.textContent = JSON.stringify(schema)
  document.head.appendChild(script)
}

function applyMeta(seo) {
  const { title, description, canonical, ogImage, schema } = seo

  // Basic
  if (title) document.title = title
  setMeta('description', description)
  setMeta('robots', 'index, follow')

  // Canonical
  setCanonical(canonical)

  // Open Graph
  setProperty('og:type', 'website')
  setProperty('og:site_name', 'Devra Architects')
  setProperty('og:title', title)
  setProperty('og:description', description)
  setProperty('og:url', canonical)
  setProperty('og:image', ogImage)
  setProperty('og:image:width', '1200')
  setProperty('og:image:height', '630')
  setProperty('og:locale', 'en_IN')

  // Twitter Card
  setMeta('twitter:card', 'summary_large_image')
  setMeta('twitter:site', '@devra_architects')
  setMeta('twitter:title', title)
  setMeta('twitter:description', description)
  setMeta('twitter:image', ogImage)

  // JSON-LD Schema
  setJsonLd(schema)
}

function restoreDefaults() {
  applyMeta(defaultSeo)
}

// ─── Hook ─────────────────────────────────────────────────────────────────────

/**
 * Sets all SEO head tags for the current page.
 *
 * Pass a full SEO config object (from seoConfig.js) or individual overrides.
 * Falls back to the homepage defaults on unmount.
 *
 * @param {object} seo
 * @param {string} seo.title
 * @param {string} seo.description
 * @param {string} seo.canonical
 * @param {string} [seo.ogImage]
 * @param {object} [seo.schema]
 */
export function useMeta(seo = {}) {
  const merged = { ...defaultSeo, ...seo }

  useEffect(() => {
    applyMeta(merged)

    return () => {
      restoreDefaults()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [merged.title, merged.description, merged.canonical, merged.ogImage])
}
