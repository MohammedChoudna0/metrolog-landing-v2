import { useState } from 'react'
import { useLang } from '../i18n/LanguageProvider'

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)
  const { t } = useLang()

  return (
    <section id="faq" className="py-32 sm:py-36">
      <div className="max-w-2xl mx-auto px-6 sm:px-10 lg:px-12">
        <div className="reveal text-center max-w-xl mx-auto mb-20">
          <h2 className="text-3xl sm:text-4xl font-semibold text-gray-900 tracking-tight leading-[1.1]">
            {t.faq.title}
          </h2>
          <p className="mt-5 text-base text-gray-400 leading-relaxed">
            {t.faq.subtitle}
          </p>
        </div>

        <div className="space-y-4">
          {t.faq.items.map((faq, i) => (
            <div key={i} className="reveal reveal-delay-1 rounded-3xl border border-mborder bg-white overflow-hidden transition-shadow hover:shadow-[0_2px_12px_rgba(0,0,0,0.03)]">
              <button
                className="w-full flex items-center justify-between px-8 py-5 text-left hover:bg-gray-50/50 transition-colors"
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
              >
                <span className="text-sm font-medium text-gray-900 pr-6">{faq.q}</span>
                <svg
                  className={`w-4 h-4 text-gray-400 shrink-0 transition-transform ${openIndex === i ? 'rotate-180 text-mblue' : ''}`}
                  fill="none" stroke="currentColor" viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {openIndex === i && (
                <div className="px-8 pb-6 text-sm text-gray-500 leading-relaxed border-t border-[#E8E8ED]/50 pt-4">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
