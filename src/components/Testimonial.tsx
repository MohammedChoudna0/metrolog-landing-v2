import Corners from './Corners'

// Placeholder social-proof slot — swap for a real customer quote and logo
// once one is available.
export default function Testimonial() {
  return (
    <section className="max-w-3xl mx-auto px-6 sm:px-8 lg:px-10 py-20 sm:py-24">
      <div className="card blueprint text-center items-center">
        <Corners />
        <div className="card-kicker">Testimonio de cliente</div>
        <p className="font-heading text-xl sm:text-[22px] leading-snug max-w-xl mx-auto mt-2 mb-2">
          — Espacio reservado para una cita real de un responsable de calidad o jefe de taller que use Metrolog —
        </p>
        <p className="text-sm text-text/55">
          Sustituir por testimonio y logo de cliente real cuando estén disponibles.
        </p>
      </div>
    </section>
  )
}
