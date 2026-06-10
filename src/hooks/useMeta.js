import { useEffect } from 'react'

/**
 * Sets document <title> and <meta name="description"> for the current page.
 * Falls back to the default values baked into index.html if nothing is passed.
 */
export function useMeta({ title, description } = {}) {
  useEffect(() => {
    if (title) {
      document.title = title
    }

    if (description) {
      let tag = document.querySelector('meta[name="description"]')
      if (!tag) {
        tag = document.createElement('meta')
        tag.setAttribute('name', 'description')
        document.head.appendChild(tag)
      }
      tag.setAttribute('content', description)
    }

    // Cleanup: restore defaults when the component unmounts
    return () => {
      document.title =
        'Best Architects in Chandigarh | Luxury Architecture & Interior Design | Devra Architects'
      const tag = document.querySelector('meta[name="description"]')
      if (tag) {
        tag.setAttribute(
          'content',
          'Devra Architects creates luxury residential, commercial, hospitality & housing projects across Chandigarh, Mohali & Punjab. 475+ projects delivered with innovative architecture & timeless design.',
        )
      }
    }
  }, [title, description])
}
