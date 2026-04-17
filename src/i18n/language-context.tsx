import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from 'react'
import { STRINGS, type Lang } from '@/i18n/strings'

type LanguageContextValue = {
  lang: Lang
  setLang: (lang: Lang) => void
  t: (typeof STRINGS)[Lang]
}

const LanguageContext = createContext<LanguageContextValue | null>(null)

const STORAGE_KEY = 'vcp2-lang'

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>(() => {
    try {
      const s = localStorage.getItem(STORAGE_KEY) as Lang | null
      return s === 'en' || s === 'nl' ? s : 'nl'
    } catch {
      return 'nl'
    }
  })

  const setLang = useCallback((next: Lang) => {
    setLangState(next)
    try {
      localStorage.setItem(STORAGE_KEY, next)
    } catch {
      /* ignore */
    }
  }, [])

  useEffect(() => {
    document.documentElement.lang = lang === 'en' ? 'en' : 'nl'
  }, [lang])

  const value = useMemo<LanguageContextValue>(
    () => ({
      lang,
      setLang,
      t: STRINGS[lang],
    }),
    [lang, setLang]
  )

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
}

export function useLanguage() {
  const ctx = useContext(LanguageContext)
  if (!ctx) throw new Error('useLanguage must be used within LanguageProvider')
  return ctx
}
