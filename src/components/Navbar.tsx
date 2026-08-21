import { useState } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { useLang } from '../i18n/LanguageProvider'
import Corners from './Corners'
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
  const navigate = useNavigate()
  const { pathname } = useLocation()
  const { t } = useLang()

  const navLinks = [
    { label: t.nav.inicio, section: 'hero' },
    { label: t.nav.comoFunciona, section: 'steps' },
    { label: t.nav.producto, section: 'pilares' },
    { label: t.nav.contacto, section: 'contacto' },
  ]

  return (
    <nav className="border-b border-divider bg-bg">
      <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-10">
        <div className="flex items-center justify-between h-16 gap-6">
          <button onClick={() => scrollTo('hero', navigate, pathname)} className="flex items-center shrink-0">
            <img src={logoSrc} alt="Metrolog" className="h-6 w-auto" />
          </button>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map(link => (
              <button
                key={link.section}
                onClick={() => { scrollTo(link.section, navigate, pathname); setOpen(false) }}
                className="text-sm text-text/70 hover:text-mblue transition-colors"
              >
                {link.label}
              </button>
            ))}
          </div>

          <div className="hidden md:flex items-center">
            <button
              type="button"
              className="btn btn-primary blueprint"
              onClick={() => scrollTo('contacto', navigate, pathname)}
            >
              <Corners />
              {t.nav.cta}
            </button>
          </div>

          <div className="flex items-center md:hidden">
            <button className="p-2 text-text/70 hover:text-mblue" onClick={() => setOpen(!open)} aria-label={t.nav.inicio}>
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
          <div className="md:hidden pb-4 space-y-1 border-t border-divider pt-3">
            {navLinks.map(link => (
              <button
                key={link.section}
                onClick={() => { scrollTo(link.section, navigate, pathname); setOpen(false) }}
                className="block w-full text-left px-1 py-2 text-sm text-text/70 hover:text-mblue"
              >
                {link.label}
              </button>
            ))}
            <button
              type="button"
              className="btn btn-primary btn-block blueprint mt-2"
              onClick={() => { scrollTo('contacto', navigate, pathname); setOpen(false) }}
            >
              <Corners />
              {t.nav.cta}
            </button>
          </div>
        )}
      </div>
    </nav>
  )
}
