import { useLang } from '../i18n/LanguageProvider'
import Corners from './Corners'

const icons = [
  // shield
  <path key="shield" d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />,
  // bell
  <path key="bell" d="M15 17h5l-1.4-1.4a2 2 0 01-.6-1.4V11a6 6 0 00-4-5.7V5a2 2 0 10-4 0v.3C7.7 6.2 6 8.4 6 11v3.2c0 .5-.2 1-.6 1.4L4 17h5m6 0v1a3 3 0 11-6 0v-1" />,
  // tablet
  <path key="tablet" d="M5 2h14a1 1 0 011 1v18a1 1 0 01-1 1H5a1 1 0 01-1-1V3a1 1 0 011-1zM12 18h.01" />,
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
