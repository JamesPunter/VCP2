import { LinkButton } from '@/components/ui/link-button'
import { useReveal } from '@/hooks/useReveal'
import { useLanguage } from '@/i18n/language-context'

const SLOT_META = [
  {
    id: 'ochtend' as const,
    tijd: '7:30 - 12:30',
    prijs: '€287,50',
  },
  {
    id: 'middag' as const,
    tijd: '13:00 - 18:00',
    prijs: '€287,50',
  },
  {
    id: 'avond' as const,
    tijd: '19:00 - 23:00',
    prijs: '€195,00',
  },
  {
    id: 'dagdeel' as const,
    tijd: '7:30 - 17:30',
    prijs: '€497,50',
  },
]

export default function Prijzen() {
  const { t } = useLanguage()
  const p = t.prijzen
  const ref1 = useReveal()
  const ref2 = useReveal()
  const ref3 = useReveal()

  const slots = SLOT_META.map((row) => {
    const copy = p.blocks[row.id]
    return {
      ...row,
      label: copy.label,
      desc: copy.desc,
    }
  })

  return (
    <>
      <section className="relative bg-white pt-32 pb-12 md:pb-16">
        <div ref={ref1} className="reveal max-w-5xl mx-auto px-6 text-center">
          <h1 className="font-semicond font-black text-black text-5xl sm:text-6xl md:text-7xl leading-[1.05] tracking-tight">
            {p.heroTitle}
          </h1>
          <p className="mt-8 font-body-dm font-semibold text-black text-xl sm:text-2xl md:text-[30px] leading-[1.15] tracking-[-0.02em] max-w-3xl mx-auto">
            {p.heroLead}
          </p>
          <p className="mt-6 font-body-dm font-semibold text-[#595858] text-base sm:text-lg md:text-xl leading-[1.15] tracking-[-0.02em]">
            {p.vatNote}
          </p>
        </div>
      </section>

      <section className="pb-20 md:pb-24 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <div ref={ref2} className="reveal">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
              {slots.map(({ id, label, tijd, prijs, desc }) => {
                const isDark = id === 'dagdeel'
                return (
                  <div
                    key={id}
                    className={[
                      'relative rounded-[4px] border px-4 py-6 md:px-4 md:py-7 text-center flex flex-col items-center',
                      'shadow-[0_4px_5px_1px_rgba(193,193,193,0.35)]',
                      isDark
                        ? 'bg-[#2c3140] border-[#2c3140] text-white'
                        : 'bg-white border-[#dbdbdb]',
                    ].join(' ')}
                  >
                    <h2
                      className={[
                        'font-body-dm font-semibold text-lg md:text-xl leading-tight tracking-[-0.02em]',
                        isDark ? 'text-white' : 'text-black',
                      ].join(' ')}
                    >
                      {label}
                    </h2>

                    <p
                      className={[
                        'mt-2 font-body-dm font-bold text-3xl md:text-[2rem] leading-none tabular-nums tracking-[-0.02em]',
                        isDark ? 'text-white' : 'text-black',
                      ].join(' ')}
                    >
                      {prijs}
                    </p>

                    <p
                      className={[
                        'mt-3 font-montserrat font-medium text-xs md:text-sm',
                        isDark ? 'text-[#dddddd]' : 'text-[#747474]',
                      ].join(' ')}
                    >
                      {tijd}
                    </p>

                    <div className="mt-4 w-full flex justify-center">
                      <LinkButton
                        to="/reserveren"
                        variant="ghost"
                        className={[
                          'inline-flex items-center justify-center rounded-[3px] border-2 border-solid h-10 w-full max-w-[200px]',
                          'font-montserrat font-bold text-xs md:text-sm transition-colors px-2',
                          isDark
                            ? 'border-[#1f41ff] bg-[#1f41ff] text-white hover:border-[#1a38e0] hover:bg-[#1a38e0]'
                            : 'border-[#1f41ff] bg-transparent text-[#1f41ff] hover:border-[#1f41ff] hover:bg-[#1f41ff] hover:text-white',
                        ].join(' ')}
                      >
                        {p.reserveCta}
                      </LinkButton>
                    </div>

                    <div
                      className={[
                        'mt-5 h-px w-20',
                        isDark ? 'bg-white/40' : 'bg-[#dbdbdb]',
                      ].join(' ')}
                      aria-hidden
                    />

                    <p
                      className={[
                        'mt-3 font-roboto font-medium text-xs md:text-sm leading-snug max-w-[200px]',
                        isDark ? 'text-[#dddddd]' : 'text-[#747474]',
                      ].join(' ')}
                    >
                      {desc}
                    </p>
                  </div>
                )
              })}
            </div>

            <p className="mt-10 md:mt-12 pt-8 md:pt-10 border-t border-[#dbdbdb] text-center max-w-2xl mx-auto">
              <a
                href="mailto:info@studiolegarage.nl"
                className="font-body-dm text-sm md:text-[15px] text-[#595858] hover:text-[#1f41ff] transition-colors underline-offset-[3px] decoration-[#dbdbdb]/80 hover:decoration-[#1f41ff]"
              >
                {p.weekendUnderCards}
              </a>
            </p>

            <div
              ref={ref3}
              className="reveal mt-14 md:mt-20 max-w-md mx-auto text-center"
            >
              <h2 className="font-body-dm font-semibold text-black text-xl md:text-2xl tracking-[-0.02em] mb-6 md:mb-8">
                {p.includedHeading}
              </h2>
              <ul className="space-y-3.5 text-left">
                {p.includedItems.map((item) => (
                  <li
                    key={item}
                    className="font-roboto text-[15px] text-[#747474] leading-relaxed pl-4 border-l border-[#e8e8e8] hover:border-[#1f41ff]/35 transition-colors"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
