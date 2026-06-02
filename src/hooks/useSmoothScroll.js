import { useEffect } from 'react'

/**
 * Smooth scroll via CSS only — no wheel interception.
 * Just sets scroll-behavior: smooth on the html element and lets the
 * browser handle everything natively. Avoids blocking scroll events.
 */
export default function useSmoothScroll() {
  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth'
    return () => {
      document.documentElement.style.scrollBehavior = ''
    }
  }, [])
}
