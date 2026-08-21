import { useLang } from '../i18n/LanguageProvider'
import Corners from './Corners'

export default function Steps() {
  const { t } = useLang()

  return (
    <section id="steps" className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-10 py-20 sm:py-24">
      <span className="block text-sm font-semibold tracking-wide uppercase text-mblue mb-2">{t.steps.kicker}</span>
      <h2 className="text-[26px] sm:text-4xl mb-10 max-w-xl">{t.steps.title}</h2>

      <div className="grid md:grid-cols-3 gap-6">
        {t.steps.items.map(step => (
          <div key={step.number} className="card blueprint">
            <Corners />
            <div className="card-kicker">{step.number}</div>
            <div className="card-title">{step.title}</div>
            <p className="card-body">{step.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
