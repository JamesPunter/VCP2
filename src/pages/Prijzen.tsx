import { LinkButton, AnchorButton } from '@/components/ui/link-button'
import { Badge } from '@/components/ui/badge'
import { useReveal } from '@/hooks/useReveal'
import { useLanguage } from '@/i18n/language-context'
import { PageHero } from '@/components/page-hero'

const SLOT_META = [
  {
    id: 'ochtend' as const,
    icon: '🌅',
    tijd: '07:30 – 12:30',
    duur: '5 uur',
    prijs: '€ 287,50',
    prijsInclCore: '€ 347,88',
    featured: false,
  },
  {
    id: 'middag' as const,
    icon: '☀️',
    tijd: '13:00 – 18:00',
    duur: '5 uur',
    prijs: '€ 287,50',
    prijsInclCore: '€ 347,88',
    featured: false,
  },
  {
    id: 'dagdeel' as const,
    icon: '📅',
    tijd: '07:30 – 17:30',
    duur: '10 uur',
    prijs: '€ 497,50',
    prijsInclCore: '€ 601,98',
    featured: true,
  },
  {
    id: 'avond' as const,
    icon: '🌙',
    tijd: '19:00 – 23:00',
    duur: '4 uur',
    prijs: '€ 195,00',
    prijsInclCore: '€ 235,95',
    featured: false,
  },
  {
    id: 'weekend' as const,
    icon: '📆',
    tijd: 'Op aanvraag',
    duur: '—',
    prijs: 'Op aanvraag',
    prijsInclCore: '',
    featured: false,
  },
]

export default function Prijzen() {
  const { t } = useLanguage()
  const p = t.prijzen
  const ref1 = useReveal()
  const ref2 = useReveal()

  const slots = SLOT_META.map((row) => {
    const copy = p.blocks[row.id]
    const isWeekend = row.id === 'weekend'
    const tijd = isWeekend ? p.onRequest : row.tijd
    const duur = isWeekend ? '—' : row.duur
    const prijs = isWeekend ? p.onRequest : row.prijs
    const prijsIncl = isWeekend
      ? p.contactForMore
      : `${row.prijsInclCore} ${p.vatInclSuffix}`
    return {
      ...row,
      label: copy.label,
      sublabel: copy.sublabel,
      desc: copy.desc,
      tijd,
      duur,
      prijs,
      prijsIncl,
    }
  })

  return (
    <>
      <PageHero size="tall">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-[1.1] mb-6 max-w-4xl">
          {p.heroTitle}
        </h1>
        <p className="text-white/65 text-lg md:text-xl max-w-2xl leading-relaxed">
          {p.heroLead}
        </p>
        <p className="mt-4 text-white/45 text-sm max-w-2xl">
          {p.vatNote}
        </p>
      </PageHero>

      <section className="py-16 md:py-20 bg-neutral-50">
        <div className="max-w-[90rem] mx-auto px-6">
          <div ref={ref1} className="reveal">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
              {slots.map(({ id, label, sublabel, tijd, duur, prijs, prijsIncl, featured, icon, desc }) => (
                <div
                  key={id}
                  className={
                    featured
                      ? 'relative rounded-3xl border-2 border-neutral-900 bg-neutral-950 text-white p-6 md:p-7 shadow-xl'
                      : 'relative rounded-3xl border border-neutral-200/90 bg-[#f2f2f2] p-6 md:p-7 shadow-[0_1px_3px_rgba(0,0,0,0.06)] hover:shadow-md transition-shadow'
                  }
                >
                  {featured && (
                    <div className="absolute -top-3 left-5 z-10">
                      <Badge className="rounded-full bg-neutral-900 text-white border-0 text-[10px] uppercase tracking-widest px-3 py-1 font-semibold shadow-md">
                        {p.featuredBadge}
                      </Badge>
                    </div>
                  )}

                  <div className="flex items-start justify-between gap-3 mb-5">
                    <div className="min-w-0">
                      <span className="text-2xl mb-2 block">{icon}</span>
                      <h2 className={`text-lg font-bold ${featured ? 'text-white' : 'text-neutral-900'}`}>
                        {label}
                      </h2>
                      <p className={`text-[10px] sm:text-xs font-semibold uppercase tracking-widest mt-0.5 ${featured ? 'text-white/45' : 'text-neutral-500'}`}>
                        {sublabel}
                      </p>
                    </div>
                    <div className="text-right shrink-0">
                      <p className={`text-2xl md:text-3xl font-bold tabular-nums ${featured ? 'text-white' : 'text-neutral-900'}`}>
                        {prijs}
                      </p>
                      <p className={`text-[11px] md:text-xs mt-0.5 ${featured ? 'text-white/50' : 'text-neutral-500'}`}>
                        {prijsIncl}
                      </p>
                    </div>
                  </div>

                  <div className={`flex flex-wrap items-center gap-2 sm:gap-4 text-sm mb-4 pb-4 border-b ${featured ? 'border-white/15' : 'border-neutral-300/80'}`}>
                    <div className="flex items-center gap-1.5 min-w-0">
                      <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" className={featured ? 'text-white/55 shrink-0' : 'text-neutral-500 shrink-0'}>
                        <circle cx="12" cy="12" r="10"/>
                        <polyline points="12 6 12 12 16 14"/>
                      </svg>
                      <span className={featured ? 'text-white/75' : 'text-neutral-600'}>{tijd}</span>
                    </div>
                    {duur !== '—' && (
                      <span className={`text-xs px-2.5 py-1 rounded-full font-medium ${featured ? 'bg-white/12 text-white/75' : 'bg-white text-neutral-600 border border-neutral-200/80'}`}>
                        {duur}
                      </span>
                    )}
                  </div>

                  <p className={`text-sm leading-relaxed ${featured ? 'text-white/70' : 'text-neutral-600'}`}>
                    {desc}
                  </p>

                  <div className="mt-6">
                    <LinkButton
                      to="/reserveren"
                      className={
                        featured
                          ? 'w-full justify-center rounded-full bg-white text-neutral-900 hover:bg-white/90 border-0'
                          : 'w-full justify-center rounded-full border-2 border-neutral-900 text-neutral-900 bg-transparent hover:bg-neutral-900 hover:text-white'
                      }
                      variant={featured ? undefined : 'outline'}
                    >
                      {id === 'weekend' ? p.weekendContact : p.reserveCta}
                    </LinkButton>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-white border-t border-neutral-200/80">
        <div className="max-w-5xl mx-auto px-6">
          <div ref={ref2} className="reveal">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">{p.includedHeading}</h2>
                <p className="text-neutral-600 leading-relaxed mb-8">
                  {p.includedLead}
                </p>
                <ul className="space-y-3">
                  {p.includedItems.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-neutral-900 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <svg width="10" height="10" fill="none" stroke="white" strokeWidth="2.5" viewBox="0 0 24 24">
                          <polyline points="20 6 9 17 4 12"/>
                        </svg>
                      </div>
                      <span className="text-sm text-neutral-800">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="space-y-4">
                <div className="bg-neutral-50 border border-neutral-200/80 rounded-3xl p-6 md:p-7">
                  <h3 className="font-bold text-neutral-900 mb-3">{p.weekendTitle}</h3>
                  <p className="text-sm text-neutral-600 leading-relaxed mb-5">
                    {p.weekendBody}
                  </p>
                  <AnchorButton href="mailto:info@studiolegarage.nl" variant="outline" className="rounded-full w-full justify-center border-2 border-neutral-900 text-neutral-900 hover:bg-neutral-900 hover:text-white">
                    {p.weekendBtn}
                  </AnchorButton>
                </div>

                <div className="bg-neutral-50 border border-neutral-200/80 rounded-3xl p-6 md:p-7">
                  <h3 className="font-bold text-neutral-900 mb-3">{p.gearTitle}</h3>
                  <p className="text-sm text-neutral-600 leading-relaxed">
                    {p.gearBody}
                  </p>
                </div>

                <div className="bg-neutral-950 rounded-3xl p-6 md:p-7 text-white">
                  <p className="text-white/50 text-xs font-semibold uppercase tracking-widest mb-2">{p.ratesHelp}</p>
                  <p className="font-bold text-lg mb-1">
                    <a href="tel:0621587273" className="hover:text-white/85 transition-colors">06 2158 7273</a>
                  </p>
                  <p className="text-white/45 text-sm">{p.ratesHours}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
