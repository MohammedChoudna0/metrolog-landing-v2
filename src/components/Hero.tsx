import { useLang } from '../i18n/LanguageProvider'
import Corners from './Corners'
import inventarioSrc from '../assets/Inventario.webp'

function scrollTo(id: string) {
  const el = document.getElementById(id)
  if (el) el.scrollIntoView({ behavior: 'smooth' })
}

export default function Hero() {
  const { t } = useLang()

  return (
    <section id="hero" className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-10 pt-20 sm:pt-28 pb-16">
      <div className="max-w-3xl">
        <span className="tag tag-accent mb-4">{t.hero.badge}</span>
        <h1 className="text-[38px] sm:text-6xl lg:text-[64px] leading-[1.05] mt-4 mb-4 text-balance">
          {t.hero.titleStart}{' '}
          <span className="text-mblue">{t.hero.titleAccent}</span>
        </h1>
        <p className="text-lg sm:text-xl leading-relaxed text-text/80 max-w-xl mb-6">
          {t.hero.subtitle}
        </p>
        <div className="flex gap-3 flex-wrap items-center">
          <button
            type="button"
            className="btn btn-primary blueprint px-6! py-3! text-base!"
            onClick={() => scrollTo('contacto')}
          >
            <Corners />
            {t.hero.cta}
          </button>
          <button
            type="button"
            className="btn btn-ghost px-6! py-3! text-base!"
            onClick={() => scrollTo('steps')}
          >
            {t.hero.secondaryCta}
          </button>
        </div>
        <p className="mt-4 text-sm text-text/60">{t.hero.trust}</p>
      </div>

      <figure className="blueprint duotone mt-16 sm:mt-20">
        <Corners />
        <img src={inventarioSrc} alt={t.hero.imageAlt} className="w-full h-auto block" />
      </figure>
    </section>
  )
}
