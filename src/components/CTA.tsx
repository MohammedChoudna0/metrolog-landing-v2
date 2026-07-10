import { useLang } from '../i18n/LanguageProvider'

export default function CTA() {
  const { t } = useLang()

  return (
    <section id="cta" className="py-20 sm:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl bg-gradient-to-br from-primary-600 via-primary-700 to-primary-800 px-8 py-16 sm:px-16 sm:py-20 text-center overflow-hidden">
          <div className="absolute inset-0 -z-0">
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary-400/20 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-80 h-80 bg-primary-300/10 rounded-full blur-3xl" />
          </div>

          <div className="relative z-10 max-w-2xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-white">
              {t.cta.title}
            </h2>
            <p className="mt-4 text-lg text-primary-100">
              {t.cta.subtitle}
            </p>
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="#"
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-white text-primary-700 font-semibold text-base hover:bg-primary-50 transition-all shadow-lg"
              >
                {t.cta.button}
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
              <a
                href="#faq"
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl border border-primary-400 text-primary-100 font-medium text-base hover:bg-primary-600/50 transition-all"
              >
                {t.cta.secondary}
              </a>
            </div>
            <p className="mt-6 text-sm text-primary-200">
              {t.cta.disclaimer}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
