import { useEffect, useState } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { useLang, LanguageSwitcher } from '../i18n/LanguageProvider'
import logoSrc from '../assets/logoMenu.png'

function scrollTo(id: string, navigate: ReturnType<typeof useNavigate>, pathname: string) {
  if (pathname !== '/') {
    navigate('/')
    setTimeout(() => {
      const el = document.getElementById(id)
      if (el) el.scrollIntoView({ behavior: 'smooth' })
    }, 150)
    return
  }
  const el = document.getElementById(id)
  if (el) el.scrollIntoView({ behavior: 'smooth' })
}

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const navigate = useNavigate()
  const { pathname } = useLocation()
  const { t } = useLang()

  useEffect(() => {
    function handler() {
      setScrolled(window.scrollY > 30)
    }
    handler()
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [])

  const navLinks = [
    { label: t.nav.inicio, section: 'hero' },
    { label: t.nav.comoFunciona, section: 'steps' },
    { label: t.nav.caracteristicas, section: 'features' },
  ]

  return (
    <nav className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${scrolled ? 'bg-white/70 backdrop-blur-xl border-b border-[#E8E8ED]/50' : 'bg-transparent'}`}>
      <div className="max-w-6xl mx-auto px-6 sm:px-10 lg:px-12">
        <div className="flex items-center justify-between h-16">
          <button onClick={() => scrollTo('hero', navigate, pathname)} className="flex items-center shrink-0">
            <img src={logoSrc} alt="Metrolog" className="h-5 w-auto" />
          </button>

          <div className="hidden md:flex items-center justify-center flex-1 gap-8">
            {navLinks.map(link => (
              <button
                key={link.section}
                onClick={() => { scrollTo(link.section, navigate, pathname); setOpen(false) }}
                className="text-sm font-medium text-gray-400 hover:text-gray-900 transition-colors"
              >
                {link.label}
              </button>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-4">
            <LanguageSwitcher />
          </div>

          <div className="flex items-center gap-2 md:hidden">
            <LanguageSwitcher />
            <button className="p-2 text-gray-400 hover:text-gray-900" onClick={() => setOpen(!open)} aria-label={t.nav.inicio + ' menu'}>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {open ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {open && (
          <div className="md:hidden pb-4 space-y-1">
            {navLinks.map(link => (
              <button
                key={link.section}
                onClick={() => { scrollTo(link.section, navigate, pathname); setOpen(false) }}
                className="block w-full text-left px-3 py-2 text-sm text-gray-400 hover:text-gray-900 hover:bg-gray-50 rounded-lg"
              >
                {link.label}
              </button>
            ))}
          </div>
        )}
      </div>
    </nav>
  )
}
