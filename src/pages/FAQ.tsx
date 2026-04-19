import { useState } from 'react'
import { LinkButton, AnchorButton } from '@/components/ui/link-button'
import { useReveal } from '@/hooks/useReveal'
import { cn } from '@/lib/utils'

const FAQS = [
  {
    vraag: 'Is er apparatuur aanwezig in de studio?',
    antwoord:
      'Ja: statieven, C-stands en basisverlichting. Specialistisch materiaal regelen we in overleg — vermeld het bij je aanvraag.',
  },
  {
    vraag: 'Kan ik de studio per uur huren?',
    antwoord:
      'We werken met vaste blokken (ochtend, middag, avond, dagdeel). Losse uren zijn er niet.',
  },
  {
    vraag: 'Is de studio bereikbaar met de auto?',
    antwoord:
      'Ja, via de A10 (S114). Laden en lossen voor de deur is gratis; parkeren in de buurt is betaald (zondag vaak gratis).',
  },
  {
    vraag: 'Wat is inbegrepen bij het tarief?',
    antwoord:
      'Studio (60 m²), dansvloer met spiegel, keuken en toilet, stroom, basisgrip, host-ondersteuning en koffie/thee.',
  },
  {
    vraag: 'Hoe maak ik een boeking?',
    antwoord:
      'Via de reserveringspagina: datum, tijdblok en korte toelichting. We reageren snel; bij spoed: bel 06 2158 7273.',
  },
  {
    vraag: 'Zijn er weekendtarieven?',
    antwoord:
      'Ja, op zaterdag en zondag. Tarieven op aanvraag — mail info@studiolegarage.nl of bel 06 2158 7273.',
  },
  {
    vraag: 'Hoe kom ik er met het OV?',
    antwoord:
      'Tram 26 (Rietlandpark) of bus 22 (Veemarkt). Zie de locatiepagina voor de volledige route.',
  },
]

function FaqItem({ id, vraag, antwoord }: { id: string; vraag: string; antwoord: string }) {
  const [open, setOpen] = useState(false)

  return (
    <div
      className={cn(
        'rounded-[4px] border border-[#dbdbdb] bg-white shadow-[0_2px_4px_rgba(0,0,0,0.04)] transition-shadow duration-300 ease-out',
        open && 'shadow-[0_4px_5px_1px_rgba(193,193,193,0.2)]',
      )}
    >
      <button
        type="button"
        id={`${id}-trigger`}
        className="flex w-full items-center justify-between gap-4 px-4 py-4 text-left md:px-5 md:py-4"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
        aria-controls={`${id}-panel`}
      >
        <span className="font-body-dm font-semibold text-sm text-black tracking-[-0.02em] md:text-base">
          {vraag}
        </span>
        <span
          className={cn(
            'flex size-8 shrink-0 items-center justify-center rounded-[4px] border text-sm font-bold transition-[border-color,background-color,color,transform] duration-300 ease-[cubic-bezier(0.22,1,0.36,1)]',
            open
              ? 'border-[#1f41ff] bg-[#1f41ff] text-white'
              : 'border-[#dbdbdb] bg-white text-[#1f41ff]',
          )}
          aria-hidden
        >
          <span className={cn('inline-block leading-none transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)]', open && 'rotate-45')}>
            +
          </span>
        </span>
      </button>
      <div
        className={cn(
          'grid transition-[grid-template-rows] duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-none',
          open ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]',
        )}
      >
        <div className="min-h-0 overflow-hidden">
          <div
            id={`${id}-panel`}
            role="region"
            aria-labelledby={`${id}-trigger`}
            aria-hidden={!open}
            className="border-t border-[#ededed] px-4 pb-4 pt-3 md:px-5 md:pb-5"
          >
            <p className="font-roboto text-sm leading-relaxed text-[#747474] md:text-[15px]">{antwoord}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function FAQ() {
  const refHero = useReveal()
  const refList = useReveal()
  const refCta = useReveal()

  return (
    <div className="bg-white">
      <section className="relative bg-white pt-32 pb-12 md:pb-16">
        <div ref={refHero} className="reveal mx-auto max-w-5xl px-6 text-center">
          <h1 className="font-semicond font-black text-5xl leading-[1.05] tracking-tight text-black sm:text-6xl md:text-7xl">
            Veelgestelde vragen
          </h1>
          <p className="mx-auto mt-8 max-w-3xl font-body-dm text-xl font-semibold leading-[1.15] tracking-[-0.02em] text-black sm:text-2xl md:text-[30px]">
            Korte antwoorden op de meest gestelde vragen over huren en faciliteiten.
          </p>
          <p className="mx-auto mt-6 max-w-2xl font-body-dm text-base font-semibold leading-[1.15] tracking-[-0.02em] text-[#595858] sm:text-lg">
            Staat je vraag er niet tussen? Mail of bel ons — we helpen je graag.
          </p>
        </div>
      </section>

      <section className="border-t border-[#ededed] bg-white pt-12 pb-16 md:pt-16 md:pb-24">
        <div className="mx-auto max-w-3xl px-6">
          <div ref={refList} className="reveal space-y-3">
            {FAQS.map(({ vraag, antwoord }, i) => (
              <FaqItem key={vraag} id={`faq-${i}`} vraag={vraag} antwoord={antwoord} />
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-[#ededed] bg-white pt-12 pb-16 md:pt-16 md:pb-20">
        <div ref={refCta} className="reveal mx-auto max-w-xl px-6 text-center">
          <h2 className="font-body-dm text-xl font-semibold tracking-[-0.02em] text-black md:text-2xl">
            Nog iets onduidelijk?
          </h2>
          <p className="mt-3 font-roboto text-sm leading-relaxed text-[#747474] md:text-[15px]">
            Stuur een bericht of bel — we reageren zo snel we kunnen.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <LinkButton
              to="/contact"
              className="inline-flex h-10 items-center justify-center rounded-[3px] border-2 border-[#1f41ff] bg-[#1f41ff] px-6 font-montserrat text-xs font-bold text-white hover:border-[#1a38e0] hover:bg-[#1a38e0]"
            >
              Naar contact
            </LinkButton>
            <AnchorButton
              href="tel:0621587273"
              className="inline-flex h-10 items-center justify-center rounded-[3px] border-2 border-[#1f41ff] bg-transparent px-6 font-montserrat text-xs font-bold text-[#1f41ff] hover:bg-[#1f41ff] hover:text-white"
            >
              Bel 06 2158 7273
            </AnchorButton>
          </div>
          <p className="mt-6 font-roboto text-sm text-[#747474]">
            Of mail{' '}
            <a
              href="mailto:info@studiolegarage.nl"
              className="font-medium text-[#1f41ff] underline-offset-2 hover:underline"
            >
              info@studiolegarage.nl
            </a>
          </p>
        </div>
      </section>
    </div>
  )
}
