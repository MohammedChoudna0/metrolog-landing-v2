import { useLang } from '../i18n/LanguageProvider'
import Corners from './Corners'

const icons = [
  // shield
  <path key="shield" d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />,
  // bell
  <path key="bell" d="M15 17h5l-1.4-1.4a2 2 0 01-.6-1.4V11a6 6 0 00-4-5.7V5a2 2 0 10-4 0v.3C7.7 6.2 6 8.4 6 11v3.2c0 .5-.2 1-.6 1.4L4 17h5m6 0v1a3 3 0 11-6 0v-1" />,
  // tablet
  <path key="tablet" d="M5 2h14a1 1 0 011 1v18a1 1 0 01-1 1H5a1 1 0 01-1-1V3a1 1 0 011-1zM12 18h.01" />,
  // qr code
  <g key="qr">
    <rect x="3" y="3" width="7" height="7" />
    <rect x="14" y="3" width="7" height="7" />
    <rect x="3" y="14" width="7" height="7" />
    <path d="M14 14h3v3h-3zM20 14v3M14 20h3M20 20v.01" />
  </g>,
  // roles (users)
  <path key="users" d="M16 21v-2a4 4 0 00-4-4H6a4 4 0 00-4 4v2M9 11a4 4 0 100-8 4 4 0 000 8zM22 21v-2a4 4 0 00-3-3.87M15 3.13a4 4 0 010 7.75" />,
  // certificate
  <g key="certificate">
    <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />
    <path d="M14 2v6h6M9 15l2 2 4-4" />
  </g>,
]

export default function Features() {
  const { t } = useLang()

  return (
    <section id="pilares" className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-10 py-20 sm:py-24">
      <span className="block text-sm font-semibold tracking-wide uppercase text-mblue mb-2">{t.pilares.kicker}</span>
      <h2 className="text-[26px] sm:text-4xl mb-10 max-w-2xl">{t.pilares.title}</h2>

      <div className="grid md:grid-cols-3 gap-6">
        {t.pilares.items.map((item, i) => (
          <div key={item.title} className="card blueprint">
            <Corners />
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="var(--color-accent-700)" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="mb-3">
              {icons[i]}
            </svg>
            <div className="card-title">{item.title}</div>
            <p className="card-body">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
