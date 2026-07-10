import { useLang } from '../i18n/LanguageProvider'

export default function Steps() {
  const { t } = useLang()

  return (
    <section id="steps" className="py-32 sm:py-36">
      <div className="max-w-6xl mx-auto px-6 sm:px-10 lg:px-12">
        <div className="reveal text-center max-w-xl mx-auto mb-20">
          <h2 className="text-3xl sm:text-4xl font-semibold text-gray-900 tracking-tight leading-[1.1]">
            {t.steps.title}
          </h2>
          <p className="mt-5 text-base text-gray-400 leading-relaxed">
            {t.steps.subtitle}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {t.steps.items.map((step, i) => {
            const icons = [
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M7 10l5 5 5-5M12 15V3" />
              </svg>,
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
              </svg>,
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>,
            ]

            return (
              <div
                key={step.number}
                className={`reveal reveal-delay-${i + 1} rounded-3xl border border-mborder bg-white p-8 sm:p-10 hover:shadow-[0_4px_20px_rgba(0,0,0,0.04)] transition-shadow`}
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-mblue/10 text-mblue flex items-center justify-center">
                    {icons[i]}
                  </div>
                  <span className="text-sm font-semibold text-mblue tracking-wider">{step.number}</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">{step.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{step.description}</p>
              </div>
            )
          })}
        </div>

        <div className="reveal reveal-delay-3 mt-16 text-center">
          <p className="text-xs text-gray-400 font-medium tracking-wide">{t.steps.footer}</p>
        </div>
      </div>
    </section>
  )
}
