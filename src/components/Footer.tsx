import { Link } from 'react-router-dom'
import { useLang } from '../i18n/LanguageProvider'
import logoSrc from '../assets/logoMenu.png'

export default function Footer() {
  const { t } = useLang()

  return (
    <footer className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-10 py-10 border-t border-divider flex flex-wrap items-center justify-between gap-4">
      <Link to="/" className="flex items-center">
        <img src={logoSrc} alt="Metrolog" className="h-6 w-auto" />
      </Link>

      <nav className="flex flex-wrap gap-6">
        {t.footer.links.map(link => (
          <Link key={link.label} to={link.to} className="text-sm text-text/60 hover:text-mblue transition-colors">
            {link.label}
          </Link>
        ))}
      </nav>

      <span className="text-sm text-text/55">{t.footer.contactEmail} · &copy; {new Date().getFullYear()} Metrolog</span>
    </footer>
  )
}
