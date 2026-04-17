import { useState } from 'react'
import { LinkButton, AnchorButton } from '@/components/ui/link-button'
import { useReveal } from '@/hooks/useReveal'
import { PageHero } from '@/components/page-hero'

const FAQS = [
  {
    vraag: 'Is er apparatuur aanwezig in de studio?',
    antwoord: 'Ja, er zijn standaard verschillende statieven, C-stands en basisverlichting aanwezig. Heb je specialistisch materiaal nodig? Dat is in overleg te regelen via onze partners. Vermeld je wensen bij je boekingsaanvraag, dan denken wij mee.',
  },
  {
    vraag: 'Kan ik de studio ook voor een paar uur huren?',
    antwoord: 'Wij werken met vaste bloktijden — ochtend (07:30–12:30), middag (13:00–18:00), avond (19:00–23:00) of een volledige dag (07:30–17:30). Dit zorgt voor een gestructureerde planning en geeft jou genoeg ruimte voor opbouw, productie en afbouw. Losse uren zijn niet mogelijk.',
  },
  {
    vraag: 'Is de studio bereikbaar met de auto?',
    antwoord: 'Zeker. Studio Le Garage ligt in Amsterdam-Oost en is goed bereikbaar via de A10 (afrit S114, Piet Heijntunnel). Laden en lossen kan direct voor de deur, gratis. Er is betaald parkeren in de directe omgeving. Op zondag is parkeren de hele dag gratis.',
  },
  {
    vraag: 'Zijn huisdieren toegestaan?',
    antwoord: 'In overleg zijn huisdieren toegestaan voor producties. We vragen wel om de studio na afloop brandschoon achter te laten. Meld dit bij je boeking, dan bespreken we de mogelijkheden.',
  },
  {
    vraag: 'Wat is inbegrepen bij het tarief?',
    antwoord: 'Elk tijdblok is inclusief: gebruik van de volledige studio (60m²), de mobiele dansvloer (40m²) met spiegelwand, koffie en thee, keuken en toilet, elektra en driepolige stroom, standaard statieven en C-stands, basisverlichting en ondersteuning van een Studio Host. Geen verborgen kosten.',
  },
  {
    vraag: 'Hoe kom ik er met het openbaar vervoer?',
    antwoord: 'Neem Tram 26 naar halte Rietlandpark, of Bus 22 vanaf Amsterdam Centraal Station naar halte Veemarkt. Per OV-fiets via de Piet Heijnkade en Panamalaan is het zo\'n 20 minuten fietsen vanaf CS. Zie de locatiepagina voor een volledige routebeschrijving.',
  },
  {
    vraag: 'Zijn er weekendtarieven?',
    antwoord: 'Ja, op zaterdag en zondag zijn we beschikbaar. De tarieven voor het weekend worden op aanvraag bepaald. Neem contact met ons op via info@studiolegarage.nl of bel 06 2158 7273 voor meer informatie.',
  },
  {
    vraag: 'Hoe maak ik een boeking?',
    antwoord: 'Gebruik het boekingsformulier op de reserveringspagina. Kies je datum, tijdblok en geef een korte beschrijving van je productie. We nemen zo snel mogelijk contact op ter bevestiging. Voor urgente aanvragen bel je 06 2158 7273.',
  },
]

function FaqItem({ vraag, antwoord }: { vraag: string; antwoord: string }) {
  const [open, setOpen] = useState(false)

  return (
    <div className={`border border-neutral-200/90 rounded-3xl overflow-hidden transition-all duration-300 bg-white ${open ? 'shadow-md ring-1 ring-neutral-900/5' : 'hover:shadow-sm'}`}>
      <button
        className="w-full flex items-center justify-between p-6 text-left bg-white hover:bg-neutral-50 transition-colors"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
      >
        <span className="font-semibold text-neutral-900 pr-4 text-base leading-snug">{vraag}</span>
        <div className={`flex-shrink-0 w-8 h-8 rounded-full border-2 flex items-center justify-center transition-all duration-300 ${open ? 'bg-neutral-900 border-neutral-900 rotate-45' : 'bg-white border-neutral-300'}`}>
          <svg width="12" height="12" fill="none" stroke={open ? 'white' : 'currentColor'} strokeWidth="2.5" viewBox="0 0 24 24" className={open ? '' : 'text-neutral-700'}>
            <line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/>
          </svg>
        </div>
      </button>
      <div className={`overflow-hidden transition-all duration-300 ease-in-out ${open ? 'max-h-64' : 'max-h-0'}`}>
        <div className="px-6 pb-6 bg-white border-t border-neutral-200/90">
          <p className="text-neutral-600 leading-relaxed pt-4 text-sm">{antwoord}</p>
        </div>
      </div>
    </div>
  )
}

export default function FAQ() {
  const ref1 = useReveal()
  const ref2 = useReveal()

  return (
    <>
      <PageHero size="tall">
        <p className="text-white/50 text-xs font-semibold uppercase tracking-widest mb-4">Veelgestelde vragen</p>
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-[1.1] mb-6 max-w-3xl">
          Alles wat je<br />wil weten
        </h1>
        <p className="text-white/65 text-xl max-w-lg leading-relaxed">
          Staat jouw vraag er niet bij? Stel hem via het contactformulier of bel ons direct.
        </p>
      </PageHero>

      <section className="py-16 md:py-20 bg-neutral-50">
        <div className="max-w-3xl mx-auto px-6">
          <div ref={ref1} className="reveal space-y-3">
            {FAQS.map(({ vraag, antwoord }) => (
              <FaqItem key={vraag} vraag={vraag} antwoord={antwoord} />
            ))}
          </div>
        </div>
      </section>

      {/* STILL QUESTIONS */}
      <section className="py-16 md:py-20 bg-white border-t border-neutral-200/80">
        <div ref={ref2} className="reveal max-w-3xl mx-auto px-6 text-center">
          <p className="text-4xl mb-5">💬</p>
          <h2 className="text-2xl md:text-3xl font-bold text-neutral-900 mb-3">Vraag niet beantwoord?</h2>
          <p className="text-neutral-600 mb-8 leading-relaxed">
            We horen graag van je. Stuur een bericht of bel ons direct — we reageren snel.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <LinkButton to="/contact" size="lg" className="rounded-full bg-neutral-900 hover:bg-neutral-800 text-white">
              Stel je vraag
            </LinkButton>
            <AnchorButton href="tel:0621587273" size="lg" variant="outline" className="rounded-full border-2 border-neutral-900 text-neutral-900 hover:bg-neutral-900 hover:text-white">
              Bel: 06 2158 7273
            </AnchorButton>
          </div>
          <p className="text-sm text-neutral-600 mt-5">
            Of mail naar{' '}
            <a href="mailto:info@studiolegarage.nl" className="text-neutral-900 font-semibold hover:underline underline-offset-2">
              info@studiolegarage.nl
            </a>
          </p>
        </div>
      </section>
    </>
  )
}
