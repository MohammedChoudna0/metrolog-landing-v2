import { useLang } from '../i18n/LanguageProvider'
import Corners from './Corners'
import equipoSrc from '../assets/EquipoDetalle.webp'

export default function Security() {
  const { t } = useLang()

  return (
    <section className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-10 py-20 sm:py-24">
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        <div>
          <span className="block text-sm font-semibold tracking-wide uppercase text-mblue mb-2">{t.security.kicker}</span>
          <h2 className="text-[26px] sm:text-4xl mb-8 max-w-lg">{t.security.title}</h2>
          <div className="flex flex-col gap-6">
            {t.security.items.map(item => (
              <div key={item.title}>
                <div className="card-title mb-1.5">{item.title}</div>
                <p className="card-body">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
        <figure className="blueprint">
          <Corners />
          <img src={equipoSrc} alt="Ficha de equipo en Metrolog Cloud con generación de código QR" width={1200} height={730} loading="lazy" className="w-full h-auto block" />
        </figure>
      </div>
    </section>
  )
}
