import { useLang } from '../i18n/LanguageProvider'
import LogoRow from './LogoRow'
import inventarioSrc from '../assets/Inventario.webp'

function scrollTo(id: string) {
  const el = document.getElementById(id)
  if (el) el.scrollIntoView({ behavior: 'smooth' })
}

function Sparkle({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 00-2.455 2.456z" />
    </svg>
  )
}

function Arrow({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 20 20" fill="currentColor">
      <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
    </svg>
  )
}

export default function Hero() {
  const { t } = useLang()

  return (
    <section id="hero" className="relative min-h-screen flex items-center pt-10 overflow-hidden bg-[#FCFCFD]">
      <div className="absolute inset-0 pointer-events-none" style={{
        background: 'linear-gradient(175deg, #FCFCFD 0%, #F2F8FF 40%, #DCEBFF 75%, #C7DBFF 100%)',
      }} />

      <div className="absolute inset-0 pointer-events-none" style={{
        background: 'radial-gradient(ellipse at 50% 35%, rgba(255,255,255,0.6) 0%, transparent 50%)',
      }} />

      <div className="absolute inset-0 pointer-events-none" style={{
        background: 'radial-gradient(ellipse at 50% 60%, rgba(126,168,255,0.08) 0%, transparent 40%)',
      }} />

      <div className="w-full max-w-5xl mx-auto px-6 sm:px-10 lg:px-12 text-center pt-28 sm:pt-36 pb-16 sm:pb-24 relative z-10">
        <div className="reveal flex items-center justify-center gap-2 text-xs font-medium text-gray-400 mb-16 sm:mb-20">
          <span className="w-1 h-1 rounded-full bg-mblue" />
          {t.hero.badge}
        </div>

        <h1 className="reveal reveal-delay-1 text-5xl sm:text-6xl lg:text-7xl font-semibold tracking-tight leading-[1.05] max-w-4xl mx-auto text-gray-900 mb-6">
          {t.hero.titleStart}{' '}
          <span className="text-mblue">
            {t.hero.titleAccent}
          </span>
        </h1>

        <p className="reveal reveal-delay-2 text-base sm:text-lg text-gray-400 max-w-lg mx-auto leading-relaxed mb-12 sm:mb-16">
          {t.hero.subtitle}
        </p>

        <div className="reveal reveal-delay-3 max-w-xl mx-auto mb-20 sm:mb-28">
          <div className="flex items-center gap-4 px-6 py-4 rounded-3xl border border-mborder bg-white/80 backdrop-blur-sm shadow-[0_1px_4px_rgba(0,0,0,0.02)] hover:shadow-[0_4px_16px_rgba(0,0,0,0.04)] transition-shadow">
            <Sparkle className="w-5 h-5 text-mblue/60 shrink-0" />
            <input
              type="text"
              readOnly
              placeholder={t.hero.promptPlaceholder}
              className="flex-1 text-sm text-gray-900 bg-transparent outline-none placeholder:text-gray-400 cursor-text"
              onClick={() => scrollTo('form')}
            />
            <button
              onClick={() => scrollTo('form')}
              className="w-9 h-9 rounded-full bg-mblue text-white flex items-center justify-center shrink-0 hover:bg-[#3d6ae6] transition-all shadow-sm"
            >
              <Arrow className="w-4 h-4" />
            </button>
          </div>
        </div>

        <div className="reveal reveal-delay-4 flex flex-col sm:flex-row items-center justify-center gap-3 mb-24 sm:mb-32">
          <button
            onClick={() => scrollTo('form')}
            className="px-6 py-3 rounded-xl bg-mblue text-white text-sm font-medium hover:bg-[#3d6ae6] transition-all"
          >
            {t.hero.cta}
          </button>
          <button
            onClick={() => scrollTo('steps')}
            className="px-6 py-3 rounded-xl text-gray-500 text-sm font-medium hover:text-gray-900 hover:bg-gray-50 transition-all"
          >
            {t.hero.secondaryCta}
          </button>
        </div>

        <div className="reveal reveal-delay-5 max-w-4xl mx-auto mb-16 sm:mb-20">
          <div className="rounded-2xl border border-mborder/30 overflow-hidden shadow-[0_2px_20px_rgba(79,125,255,0.06)] bg-white">
            <img src={inventarioSrc} alt="Metrolog inventory dashboard" className="w-full h-auto" />
          </div>
        </div>

        <div className="reveal reveal-delay-5">
          <LogoRow />
        </div>
      </div>
    </section>
  )
}
