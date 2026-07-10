import { Link } from 'react-router-dom'
import { useLang } from '../i18n/LanguageProvider'
import logoSrc from '../assets/logoMenu.png'

export default function Footer() {
  const { t } = useLang()

  return (
    <footer className="border-t border-[#E8E8ED]/50 bg-white">
      <div className="max-w-6xl mx-auto px-6 sm:px-10 lg:px-12 py-14">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          <Link to="/" className="flex items-center">
            <img src={logoSrc} alt="Metrolog" className="h-5 w-auto" />
          </Link>

          <nav className="flex flex-wrap items-center justify-center gap-6">
            {t.footer.links.map(link => (
              <Link key={link.label} to={link.to} className="text-xs text-gray-400 hover:text-gray-600 transition-colors">
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        <div className="mt-10 pt-6 border-t border-[#E8E8ED]/50 text-center">
          <p className="text-xs text-gray-400">&copy; {new Date().getFullYear()} Metrolog. {t.footer.rights}</p>
        </div>
      </div>
    </footer>
  )
}
