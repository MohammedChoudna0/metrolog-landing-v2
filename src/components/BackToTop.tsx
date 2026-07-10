import { useEffect, useState } from 'react'
import { useLang } from '../i18n/LanguageProvider'

export default function BackToTop() {
  const { t } = useLang()
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    function handler() {
      setVisible(window.scrollY > 500)
    }
    handler()
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [])

  if (!visible) return null

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      aria-label={t.backToTop}
      className="fixed bottom-6 right-6 z-40 w-10 h-10 rounded-full bg-white border border-gray-200 text-gray-400 hover:text-mblue hover:border-mblue/30 transition-all shadow-sm flex items-center justify-center"
    >
      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
      </svg>
    </button>
  )
}
