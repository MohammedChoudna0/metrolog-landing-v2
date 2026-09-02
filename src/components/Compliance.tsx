import { useLang } from '../i18n/LanguageProvider'
import Corners from './Corners'
import equipoSrc from '../assets/EquipoDetalle.webp'

export default function Compliance() {
  const { t } = useLang()

  return (
    <section className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-10 py-20 sm:py-24">
      <span className="block text-sm font-semibold tracking-wide uppercase text-mblue mb-2">{t.compliance.kicker}</span>
      <h2 className="text-[26px] sm:text-4xl mb-8 max-w-2xl">{t.compliance.title}</h2>

      <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center mb-10">
        <p className="text-base leading-relaxed text-text/70">{t.compliance.intro}</p>
        <figure className="blueprint">
          <Corners />
          <img src={equipoSrc} alt="Ficha de un equipo en Metrolog Cloud, con código, número de serie y generación de etiqueta QR" width={1200} height={730} loading="lazy" className="w-full h-auto block" />
        </figure>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {t.compliance.items.map(item => (
          <div key={item.title} className="card blueprint">
            <Corners />
            <div className="card-title">{item.title}</div>
            <p className="card-body">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
