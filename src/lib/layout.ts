/** Routes whose first viewport uses the dark hero — navbar shows light-on-dark until scroll. */
export const DARK_HERO_PATHS = new Set([
  '/',
  '/prijzen',
  '/reserveren',
  '/locatie',
  '/contact',
  '/faq',
])

export function pathHasDarkHero(pathname: string): boolean {
  return DARK_HERO_PATHS.has(pathname)
}
