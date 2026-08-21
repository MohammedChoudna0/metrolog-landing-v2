import { useLang } from '../i18n/LanguageProvider'
import usePageTitle from '../hooks/usePageTitle'

export default function PoliticaPrivacidad() {
  const { t } = useLang()
  usePageTitle(t.legal.politicaPrivacidad)

  return (
    <div className="pt-24 pb-16 sm:pt-32 sm:pb-20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-10">
          <p className="text-xs font-semibold text-mblue tracking-widest uppercase mb-2">
            {t.legal.badge}
          </p>
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900">
            {t.legal.politicaPrivacidad}
          </h1>
          <p className="mt-2 text-sm text-gray-500">{t.legal.lastUpdate}</p>
        </div>

        <div className="space-y-8 text-sm text-gray-500 leading-relaxed">
          {t.legal.politicaPrivacidadSections.map((section, i) => (
            <section key={i}>
              <h2 className="text-base font-semibold text-gray-900 mb-2">{section.h}</h2>
              {section.p?.map((para, j) => (
                <p key={j} className={j > 0 ? 'mt-2' : ''}>{para}</p>
              ))}
              {section.l && section.l.length > 0 && (
                <ul className="list-disc list-inside space-y-1 mt-2">
                  {section.l.map((item, j) => (
                    <li key={j}>{item}</li>
                  ))}
                </ul>
              )}
              {section.s?.map((sub, j) => (
                <div key={j}>
                  <h3 className="text-sm font-semibold text-gray-700 mt-4 mb-1">{sub.h}</h3>
                  <ul className="list-disc list-inside space-y-1">
                    {sub.l.map((item, k) => (
                      <li key={k}>{item}</li>
                    ))}
                  </ul>
                </div>
              ))}
              {section.p2?.map((para, j) => (
                <p key={`p2-${j}`} className="mt-2">{para}</p>
              ))}
            </section>
          ))}
        </div>
      </div>
    </div>
  )
}
