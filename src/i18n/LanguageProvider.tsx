import { createContext, useContext, type ReactNode } from 'react'
import { type Language, translations } from './translations'

interface LanguageContextType {
  lang: Language
  t: (typeof translations)['es']
}

const LanguageContext = createContext<LanguageContextType | null>(null)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const value: LanguageContextType = {
    lang: 'es',
    t: translations.es,
  }

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLang() {
  const ctx = useContext(LanguageContext)
  if (!ctx) throw new Error('useLang must be used within LanguageProvider')
  return ctx
}
