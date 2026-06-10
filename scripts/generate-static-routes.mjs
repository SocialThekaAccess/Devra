import { mkdir, readFile, writeFile } from 'node:fs/promises'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { routePaths } from '../src/routes.js'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const projectRoot = path.resolve(__dirname, '..')
const distDir = path.join(projectRoot, 'dist')
const indexPath = path.join(distDir, 'index.html')
const fallbackPath = path.join(distDir, '404.html')

const indexHtml = await readFile(indexPath, 'utf8')

await writeFile(fallbackPath, indexHtml)

for (const routePath of routePaths) {
  const routeDir = path.join(distDir, routePath.slice(1))
  const routeIndexPath = path.join(routeDir, 'index.html')

  await mkdir(routeDir, { recursive: true })
  await writeFile(routeIndexPath, indexHtml)
}
