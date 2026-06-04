import { useState, useEffect } from 'react'

/**
 * Minimal client-side router — no dependencies.
 * Reads window.location.pathname and re-renders on popstate.
 */
export function useRoute() {
  const [path, setPath] = useState(decodeURIComponent(window.location.pathname))

  useEffect(() => {
    const onPop = () => setPath(decodeURIComponent(window.location.pathname))
    window.addEventListener('popstate', onPop)
    return () => window.removeEventListener('popstate', onPop)
  }, [])

  return path
}

export function navigate(to) {
  window.history.pushState({}, '', to)
  window.dispatchEvent(new PopStateEvent('popstate'))
  window.scrollTo(0, 0)
}

/** Drop-in <Link> replacement */
export function Link({ to, children, className, style }) {
  const handleClick = (e) => {
    // Let normal browser behaviour handle external links or hash links
    if (to.startsWith('http') || to.startsWith('#')) return
    e.preventDefault()
    navigate(to)
  }
  return (
    <a href={to} className={className} style={style} onClick={handleClick}>
      {children}
    </a>
  )
}
