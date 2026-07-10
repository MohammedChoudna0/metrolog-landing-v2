import { createContext, useContext, useState, type ReactNode } from 'react'
import { type Language, translations } from './translations'

const LANGUAGE_KEY = 'metrolog-lang'

function getInitialLanguage(): Language {
  if (typeof window !== 'undefined') {
    const stored = localStorage.getItem(LANGUAGE_KEY) as Language | null
    if (stored && stored in translations) return stored
    const browser = navigator.language.slice(0, 2) as Language
    if (browser in translations) return browser
  }
  return 'es'
}

interface LanguageContextType {
  lang: Language
  t: (typeof translations)['es']
  setLang: (lang: Language) => void
}

const LanguageContext = createContext<LanguageContextType | null>(null)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Language>(getInitialLanguage)

  function setLang(l: Language) {
    setLangState(l)
    if (typeof window !== 'undefined') {
      localStorage.setItem(LANGUAGE_KEY, l)
    }
  }

  const value: LanguageContextType = {
    lang,
    t: translations[lang],
    setLang,
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

const flags: Record<Language, string> = {
  es: 'ES',
  en: 'EN',
  fr: 'FR',
  de: 'DE',
}

export function LanguageSwitcher() {
  const { lang, setLang } = useLang()
  const [open, setOpen] = useState(false)
  const languages = Object.keys(translations) as Language[]

  return (
    <div className="relative">
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-1 px-2 py-1 text-xs text-gray-400 hover:text-white transition-colors"
      >
        <span className="font-medium">{flags[lang]}</span>
        <svg className={`w-3 h-3 transition-transform ${open ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      {open && (
        <div className="absolute right-0 mt-1 bg-slate-900 border border-white/10 rounded-md shadow-2xl z-50 min-w-[120px] backdrop-blur-xl">
          {languages.map(l => (
            <button
              key={l}
              onClick={() => { setLang(l); setOpen(false) }}
              className={`block w-full text-left px-3 py-1.5 text-xs hover:bg-white/5 transition-colors ${lang === l ? 'text-indigo-400 font-medium' : 'text-gray-400'}`}
            >
              {l === 'es' ? 'Español' : l === 'en' ? 'English' : l === 'fr' ? 'Français' : 'Deutsch'}
            </button>
          ))}
        </div>
      )}
    </div>
  )
}
