import { useState } from 'react'
import { LinkButton, AnchorButton } from '@/components/ui/link-button'
import { useReveal } from '@/hooks/useReveal'

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
    <div className={`border border-border rounded-2xl overflow-hidden transition-all duration-300 ${open ? 'shadow-md' : 'hover:shadow-sm'}`}>
      <button
        className="w-full flex items-center justify-between p-6 text-left bg-white hover:bg-secondary/30 transition-colors"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
      >
        <span className="font-semibold text-foreground pr-4 text-base leading-snug">{vraag}</span>
        <div className={`flex-shrink-0 w-7 h-7 rounded-full border-2 border-border flex items-center justify-center transition-all duration-300 ${open ? 'bg-foreground border-foreground rotate-45' : 'bg-white'}`}>
          <svg width="12" height="12" fill="none" stroke={open ? 'white' : 'currentColor'} strokeWidth="2.5" viewBox="0 0 24 24">
            <line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/>
          </svg>
        </div>
      </button>
      <div className={`overflow-hidden transition-all duration-300 ease-in-out ${open ? 'max-h-64' : 'max-h-0'}`}>
        <div className="px-6 pb-6 bg-white border-t border-border">
          <p className="text-muted-foreground leading-relaxed pt-4 text-sm">{antwoord}</p>
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
      {/* HEADER */}
      <section className="relative pt-32 pb-20 bg-foreground overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent" />
        <div className="relative max-w-6xl mx-auto px-6">
          <p className="text-primary text-sm font-semibold uppercase tracking-widest mb-4">Veelgestelde vragen</p>
          <h1 className="text-5xl md:text-6xl font-bold text-white leading-tight mb-6">
            Alles wat je<br />wil weten
          </h1>
          <p className="text-white/60 text-xl max-w-lg leading-relaxed">
            Staat jouw vraag er niet bij? Stel hem via het contactformulier of bel ons direct.
          </p>
        </div>
      </section>

      {/* FAQ ITEMS */}
      <section className="py-20 bg-background">
        <div className="max-w-3xl mx-auto px-6">
          <div ref={ref1} className="reveal space-y-3">
            {FAQS.map(({ vraag, antwoord }) => (
              <FaqItem key={vraag} vraag={vraag} antwoord={antwoord} />
            ))}
          </div>
        </div>
      </section>

      {/* STILL QUESTIONS */}
      <section className="py-16 bg-secondary/40">
        <div ref={ref2} className="reveal max-w-3xl mx-auto px-6 text-center">
          <p className="text-4xl mb-5">💬</p>
          <h2 className="text-2xl md:text-3xl font-bold mb-3">Vraag niet beantwoord?</h2>
          <p className="text-muted-foreground mb-8 leading-relaxed">
            We horen graag van je. Stuur een bericht of bel ons direct — we reageren snel.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <LinkButton to="/contact" size="lg" className="rounded-xl">
              Stel je vraag
            </LinkButton>
            <AnchorButton href="tel:0621587273" size="lg" variant="outline" className="rounded-xl">
              Bel: 06 2158 7273
            </AnchorButton>
          </div>
          <p className="text-sm text-muted-foreground mt-5">
            Of mail naar{' '}
            <a href="mailto:info@studiolegarage.nl" className="text-primary font-medium hover:underline">
              info@studiolegarage.nl
            </a>
          </p>
        </div>
      </section>
    </>
  )
}
