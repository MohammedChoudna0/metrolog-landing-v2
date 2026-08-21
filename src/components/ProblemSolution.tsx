import { useLang } from '../i18n/LanguageProvider'
import Corners from './Corners'

export default function ProblemSolution() {
  const { t } = useLang()

  return (
    <section className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-10 py-20 sm:py-24">
      <span className="block text-sm font-semibold tracking-wide uppercase text-mblue mb-2">{t.problem.kicker}</span>
      <h2 className="text-[26px] sm:text-4xl mb-10 max-w-xl">{t.problem.title}</h2>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="card blueprint opacity-70">
          <Corners />
          <div className="card-kicker">{t.problem.todayKicker}</div>
          <div className="card-title">{t.problem.todayTitle}</div>
          <p className="card-body">{t.problem.todayText}</p>
        </div>
        <div className="card blueprint elev-md" style={{ borderColor: 'var(--color-mblue)' }}>
          <Corners />
          <div className="card-kicker">{t.problem.solutionKicker}</div>
          <div className="card-title">{t.problem.solutionTitle}</div>
          <p className="card-body">{t.problem.solutionText}</p>
        </div>
      </div>
    </section>
  )
}
