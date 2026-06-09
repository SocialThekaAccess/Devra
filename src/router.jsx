/* eslint-disable react-refresh/only-export-components */
import { useEffect, useState } from 'react'

function scrollToHash(hash) {
  if (!hash) {
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' })
    return
  }

  const target = document.getElementById(hash.slice(1))
  if (target) {
    target.scrollIntoView({ block: 'start', behavior: 'smooth' })
  } else {
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' })
  }
}

function syncScrollToLocation() {
  const { hash } = window.location

  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      scrollToHash(hash)
    })
  })
}

export function useRoute() {
  const [path, setPath] = useState(decodeURIComponent(window.location.pathname))

  useEffect(() => {
    const onPop = () => {
      setPath(decodeURIComponent(window.location.pathname))
      syncScrollToLocation()
    }

    window.addEventListener('popstate', onPop)
    return () => window.removeEventListener('popstate', onPop)
  }, [])

  return path
}

export function navigate(to) {
  const url = new URL(to, window.location.origin)

  window.history.pushState({}, '', `${url.pathname}${url.search}${url.hash}`)
  window.dispatchEvent(new PopStateEvent('popstate'))
}

export function Link({ to, children, className, style }) {
  const handleClick = (event) => {
    if (to.startsWith('http') || to.startsWith('mailto:') || to.startsWith('tel:')) return

    event.preventDefault()
    navigate(to)
  }

  return (
    <a href={to} className={className} style={style} onClick={handleClick}>
      {children}
    </a>
  )
}
