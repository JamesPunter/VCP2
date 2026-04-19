/**
 * GitHub Pages serves 404.html for unknown paths. Copying index.html lets
 * client-side routes (e.g. /locatie) load the SPA on refresh or deep links.
 */
import { copyFileSync, existsSync } from 'node:fs'
import { join, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'

const root = join(dirname(fileURLToPath(import.meta.url)), '..')
const index = join(root, 'dist', 'index.html')
const notFound = join(root, 'dist', '404.html')

if (existsSync(index)) {
  copyFileSync(index, notFound)
  console.log('[gh-pages] dist/404.html written (SPA fallback)')
}
