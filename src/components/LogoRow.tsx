const logos = [
  { name: 'Company', cols: 18 },
  { name: 'Industry', cols: 16 },
  { name: 'TechCorp', cols: 16 },
  { name: 'GlobalSys', cols: 20 },
  { name: 'DataFlow', cols: 16 },
]

export default function LogoRow() {
  return (
    <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-3 text-gray-400">
      {logos.map(l => (
        <div key={l.name} className="flex items-center gap-2.5">
          <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeOpacity={0.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-18v18M3 7h7m-7 4h7m-7 4h7" />
          </svg>
          <span className="text-sm font-semibold tracking-tight opacity-50">{l.name}</span>
        </div>
      ))}
    </div>
  )
}
