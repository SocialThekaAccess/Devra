import { Suspense } from 'react'
import { useRoute } from './router'
import HomePage from './pages/HomePage'
import { routes } from './routes'
import './App.css'

function App() {
  const path = useRoute()
  const Page = routes[path] ?? HomePage

  return (
    <Suspense fallback={<div className="app-loading">Loading page...</div>}>
      <Page />
    </Suspense>
  )
}

export default App
