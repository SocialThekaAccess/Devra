/**
 * Central SEO configuration for every page.
 *
 * Each entry:
 *  title        — <title>, og:title, twitter:title
 *  description  — <meta description>, og:description, twitter:description
 *  canonical    — canonical <link> + og:url (full absolute URL)
 *  ogImage      — og:image + twitter:image (full absolute URL, served from /public/og/)
 *  schema       — JSON-LD object serialised into <script type="application/ld+json">
 */

const SITE = 'https://www.devra.in'

// ── OG image map ─────────────────────────────────────────────────────────────
// All files live in /public/og/ and are served at /og/<file> on the domain.
const OG = {
  home:        `${SITE}/og/home.avif`,
  brand:       `${SITE}/og/brand.png`,
  residential: `${SITE}/og/residential.avif`,
  housing:     `${SITE}/og/housing.avif`,
  commercial:  `${SITE}/og/commercial.jpg`,
  schools:     `${SITE}/og/schools.avif`,
  hospitality: `${SITE}/og/hospitality.avif`,
  farmHouse:   `${SITE}/og/farm-house.avif`,
}

// ── Shared firm identity used inside JSON-LD ─────────────────────────────────
const FIRM = {
  '@type': 'ArchitectureFirm',
  name: 'Devra Architects',
  url: SITE,
  logo: `${SITE}/DevraFavicon.svg`,
  telephone: '+919779662286',
  email: 'info@devra.in',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'New Chandigarh',
    addressRegion: 'Punjab',
    addressCountry: 'IN',
  },
  sameAs: [
    'https://instagram.com/devra.architects',
    'https://x.com/devra_architects',
  ],
}

// ── Service helper ────────────────────────────────────────────────────────────
function serviceSchema(name, slug, description) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name,
    url: `${SITE}${slug}`,
    description,
    provider: FIRM,
    areaServed: [
      { '@type': 'City', name: 'Chandigarh' },
      { '@type': 'City', name: 'Mohali' },
      { '@type': 'State', name: 'Punjab' },
    ],
  }
}

// ── Config map ────────────────────────────────────────────────────────────────
export const seoConfig = {

  // ─── Homepage ───────────────────────────────────────────────────────────────
  '/': {
    title: 'Best Architects in Chandigarh | Luxury Architecture & Interior Design | Devra Architects',
    description:
      'Devra Architects creates luxury residential, commercial, hospitality & housing projects across Chandigarh, Mohali & Punjab. 475+ projects delivered with innovative architecture & timeless design.',
    canonical: `${SITE}/`,
    ogImage: OG.home,
    schema: {
      '@context': 'https://schema.org',
      '@type': 'ArchitectureFirm',
      ...FIRM,
      image: OG.home,
      description:
        'Devra Architects is a luxury architecture and interior design firm based in New Chandigarh, delivering 475+ projects across residential, commercial, hospitality and housing sectors.',
      areaServed: [
        { '@type': 'City', name: 'Chandigarh' },
        { '@type': 'City', name: 'Mohali' },
        { '@type': 'State', name: 'Punjab' },
      ],
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'Architectural Services',
        itemListElement: [
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Residential Architecture' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Housing Architecture' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Commercial Architecture' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'School Architecture' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Hospitality Architecture' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Farm House Design' } },
        ],
      },
    },
  },

  // ─── About ──────────────────────────────────────────────────────────────────
  '/about-us': {
    title: 'About Devra Architects | Top Architecture Studio in Chandigarh',
    description:
      'Learn about Devra Architects — a New Chandigarh-based studio led by graduates of SPA, IIT & NIT, delivering 475+ projects with precision, integrity, and timeless design.',
    canonical: `${SITE}/about-us`,
    ogImage: OG.brand,
    schema: {
      '@context': 'https://schema.org',
      '@type': 'AboutPage',
      name: 'About Devra Architects',
      url: `${SITE}/about-us`,
      description:
        "Devra Architects is led by architects from India's top institutes, delivering architecture defined by clarity, craft, and trust.",
      publisher: FIRM,
    },
  },

  // ─── Contact ────────────────────────────────────────────────────────────────
  '/contact': {
    title: 'Contact Devra Architects | Get in Touch for Your Project',
    description:
      'Reach out to Devra Architects for residential, commercial, hospitality or farm house design in Chandigarh, Mohali & Punjab. Call +91 9779662286 or email info@devra.in.',
    canonical: `${SITE}/contact`,
    ogImage: OG.brand,
    schema: {
      '@context': 'https://schema.org',
      '@type': 'ContactPage',
      name: 'Contact Devra Architects',
      url: `${SITE}/contact`,
      publisher: FIRM,
    },
  },

  // ─── Residential ────────────────────────────────────────────────────────────
  '/residential-architects-chandigarh': {
    title: 'Residential Architects in Chandigarh | Luxury Home & Villa Design | Devra',
    description:
      'Devra Architects creates custom residential spaces, luxury homes, and villas in Chandigarh, Mohali, and Punjab, combining practical layouts, timeless design, and lasting value.',
    canonical: `${SITE}/residential-architects-chandigarh`,
    ogImage: OG.residential,
    schema: serviceSchema(
      'Residential Architecture',
      '/residential-architects-chandigarh',
      'Custom residential spaces, luxury homes, and villas designed across Chandigarh, Mohali, and Punjab.',
    ),
  },

  // ─── Housing ────────────────────────────────────────────────────────────────
  '/housing-architects-chandigarh': {
    title: 'Housing Architects in Chandigarh | Township & Housing Design | Devra',
    description:
      'Devra Architects specializes in housing projects, residential townships, and community developments across Chandigarh, Mohali, and Punjab, creating well-planned spaces that support modern living and long-term value.',
    canonical: `${SITE}/housing-architects-chandigarh`,
    ogImage: OG.housing,
    schema: serviceSchema(
      'Housing Architecture',
      '/housing-architects-chandigarh',
      'Residential townships and community housing developments across Chandigarh, Mohali, and Punjab.',
    ),
  },

  // ─── Commercial ─────────────────────────────────────────────────────────────
  '/commercial-architects-chandigarh': {
    title: 'Commercial Architects in Chandigarh | Office & Retail Design | Devra',
    description:
      'Devra Architects designs commercial spaces, offices, retail outlets, and business environments across Chandigarh, Mohali, and Punjab with smart planning, strong brand identity, and functional design.',
    canonical: `${SITE}/commercial-architects-chandigarh`,
    ogImage: OG.commercial,
    schema: serviceSchema(
      'Commercial Architecture',
      '/commercial-architects-chandigarh',
      'Commercial spaces, offices, and retail environments across Chandigarh, Mohali, and Punjab.',
    ),
  },

  // ─── Schools ────────────────────────────────────────────────────────────────
  '/school-architects-chandigarh': {
    title: 'School Architects in Chandigarh | Educational Building Design | Devra',
    description:
      'Devra Architects designs schools & educational campuses across Chandigarh, Mohali & Punjab, creating inspiring learning environments with smart planning, functional spaces & modern architecture.',
    canonical: `${SITE}/school-architects-chandigarh`,
    ogImage: OG.schools,
    schema: serviceSchema(
      'School Architecture',
      '/school-architects-chandigarh',
      'Schools and educational campus design across Chandigarh, Mohali, and Punjab.',
    ),
  },

  // ─── Hospitality ────────────────────────────────────────────────────────────
  '/hospitality-architects-chandigarh': {
    title: 'Hospitality Architects in Chandigarh | Hotel & Resort Design | Devra',
    description:
      'Devra Architects specializes in hospitality architecture, designing hotels, resorts, restaurants, and guest-focused spaces across Chandigarh, Mohali, and Punjab with thoughtful planning and modern design.',
    canonical: `${SITE}/hospitality-architects-chandigarh`,
    ogImage: OG.hospitality,
    schema: serviceSchema(
      'Hospitality Architecture',
      '/hospitality-architects-chandigarh',
      'Hotels, resorts, and restaurant design across Chandigarh, Mohali, and Punjab.',
    ),
  },

  // ─── Farm Houses ────────────────────────────────────────────────────────────
  '/farm-house-architects-chandigarh': {
    title: 'Farm House Architects in Chandigarh | Luxury Farm House Design | Devra',
    description:
      'Devra Architects specializes in luxury farm house design across Chandigarh, Mohali & Punjab, creating spacious, well-planned homes that blend modern architecture, comfort & natural surroundings.',
    canonical: `${SITE}/farm-house-architects-chandigarh`,
    ogImage: OG.farmHouse,
    schema: serviceSchema(
      'Farm House Design',
      '/farm-house-architects-chandigarh',
      'Luxury farm house design across Chandigarh, Mohali, and Punjab.',
    ),
  },
}

/** Default / fallback — homepage config. */
export const defaultSeo = seoConfig['/']
