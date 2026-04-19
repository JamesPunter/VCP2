import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  type ReactNode,
} from 'react'
import { STRINGS } from '@/i18n/strings'

type LanguageContextValue = {
  t: typeof STRINGS
}

const LanguageContext = createContext<LanguageContextValue | null>(null)

export function LanguageProvider({ children }: { children: ReactNode }) {
  useEffect(() => {
    document.documentElement.lang = 'nl'
  }, [])

  const value = useMemo<LanguageContextValue>(
    () => ({
      t: STRINGS,
    }),
    []
  )

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
}

export function useLanguage() {
  const ctx = useContext(LanguageContext)
  if (!ctx) throw new Error('useLanguage must be used within LanguageProvider')
  return ctx
}
