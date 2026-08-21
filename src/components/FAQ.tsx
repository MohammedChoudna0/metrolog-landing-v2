import { useState } from 'react'
import { useLang } from '../i18n/LanguageProvider'
import Corners from './Corners'

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)
  const { t } = useLang()

  return (
    <section id="faq" className="max-w-2xl mx-auto px-6 sm:px-8 lg:px-10 py-20 sm:py-24">
      <span className="block text-sm font-semibold tracking-wide uppercase text-mblue mb-2">{t.faq.kicker}</span>
      <h2 className="text-[26px] sm:text-4xl mb-10">{t.faq.title}</h2>

      <div className="grid gap-3">
        {t.faq.items.map((faq, i) => (
          <div key={faq.q} className="card blueprint p-0! gap-0!">
            <Corners />
            <button
              className="w-full flex items-center justify-between gap-4 px-6 py-4 text-left"
              onClick={() => setOpenIndex(openIndex === i ? null : i)}
              aria-expanded={openIndex === i}
            >
              <span className="font-heading font-semibold text-base">{faq.q}</span>
              <svg
                className={`w-4 h-4 shrink-0 transition-transform ${openIndex === i ? 'rotate-180 text-mblue' : 'text-text/50'}`}
                fill="none" stroke="currentColor" viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 9l6 6 6-6" />
              </svg>
            </button>
            {openIndex === i && (
              <div className="px-6 pb-4 text-sm leading-relaxed text-text/80">
                {faq.a}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  )
}
