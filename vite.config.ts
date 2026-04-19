import { readFileSync } from 'node:fs'
import path from 'path'
import tailwindcss from '@tailwindcss/vite'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

/**
 * GitHub Pages project sites live at https://<user>.github.io/<repo>/ — Vite
 * must use that path as `base` so assets and import.meta.env.BASE_URL match.
 *
 * Override: VITE_BASE_PATH=/my-repo/ (trailing slash recommended)
 * Or set package.json "homepage" to that full URL; the path segment is used
 * when VITE_BASE_PATH is unset. User/org root site: homepage with path "/" → base "/".
 */
function getBase(): string {
  const explicit = process.env.VITE_BASE_PATH?.trim()
  if (explicit) {
    return explicit.endsWith('/') ? explicit : `${explicit}/`
  }
  try {
    const pkg = JSON.parse(
      readFileSync(path.resolve(__dirname, 'package.json'), 'utf-8'),
    ) as { homepage?: string }
    if (pkg.homepage) {
      const { pathname } = new URL(pkg.homepage)
      if (pathname && pathname !== '/') {
        return pathname.endsWith('/') ? pathname : `${pathname}/`
      }
    }
  } catch {
    /* use default */
  }
  return '/'
}

// https://vite.dev/config/
export default defineConfig({
  base: getBase(),
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
})
