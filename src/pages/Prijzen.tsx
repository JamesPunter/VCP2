import { LinkButton, AnchorButton } from '@/components/ui/link-button'
import { Badge } from '@/components/ui/badge'
import { useReveal } from '@/hooks/useReveal'

const TIJDBLOKKEN = [
  {
    id: 'ochtend',
    label: 'Ochtend',
    sublabel: 'Morning',
    tijd: '07:30 – 12:30',
    duur: '5 uur',
    prijs: '€ 287,50',
    prijsIncl: '€ 347,88 incl. BTW',
    featured: false,
    icon: '🌅',
    desc: 'Ideaal voor producties met dagelijks ochtendlicht.',
  },
  {
    id: 'middag',
    label: 'Middag',
    sublabel: 'Afternoon',
    tijd: '13:00 – 18:00',
    duur: '5 uur',
    prijs: '€ 287,50',
    prijsIncl: '€ 347,88 incl. BTW',
    featured: false,
    icon: '☀️',
    desc: 'Ruimte voor een volledige middagproductie.',
  },
  {
    id: 'dagdeel',
    label: 'Hele Dag',
    sublabel: 'Full Day',
    tijd: '07:30 – 17:30',
    duur: '10 uur',
    prijs: '€ 497,50',
    prijsIncl: '€ 601,98 incl. BTW',
    featured: true,
    icon: '📅',
    desc: 'De beste keuze voor grote producties met ruime opbouw- en afbraaktijd.',
  },
  {
    id: 'avond',
    label: 'Avond',
    sublabel: 'Evening',
    tijd: '19:00 – 23:00',
    duur: '4 uur',
    prijs: '€ 195,00',
    prijsIncl: '€ 235,95 incl. BTW',
    featured: false,
    icon: '🌙',
    desc: 'Geschikt voor avondopnames, events en presentaties.',
  },
  {
    id: 'weekend',
    label: 'Weekend',
    sublabel: 'Saturday & Sunday',
    tijd: 'Op aanvraag',
    duur: '—',
    prijs: 'Op aanvraag',
    prijsIncl: 'Neem contact op',
    featured: false,
    icon: '📆',
    desc: 'Weekendtarieven worden op aanvraag bepaald. Gratis parkeren op zondag.',
  },
]

const INCLUDED = [
  'Gebruik van de volledige studio (60m²)',
  'Mobiele dansvloer (40m²) met spiegelwand',
  'Koffie en thee',
  'Keuken en toilet op begane grond',
  'Elektra en driepolige stroom',
  'Studio Host aanwezig voor ondersteuning',
  'Gratis laden en lossen voor de deur',
  'Standaard statieven en C-stands',
  'Basisverlichting aanwezig',
]

export default function Prijzen() {
  const ref1 = useReveal()
  const ref2 = useReveal()

  return (
    <>
      {/* HEADER */}
      <section className="relative pt-32 pb-20 bg-foreground overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent" />
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 40px, white 40px, white 41px), repeating-linear-gradient(90deg, transparent, transparent 40px, white 40px, white 41px)'
        }} />
        <div className="relative max-w-6xl mx-auto px-6">
          <p className="text-primary text-sm font-semibold uppercase tracking-widest mb-4">Tarieven</p>
          <h1 className="text-5xl md:text-6xl font-bold text-white leading-tight mb-6">
            Transparante prijzen,<br />geen verborgen kosten
          </h1>
          <p className="text-white/60 text-xl max-w-xl leading-relaxed">
            Wij werken met vaste tijdblokken. Kies het blok dat bij jouw productie past —
            alles inclusief faciliteiten, koffie en thee.
          </p>
          <p className="mt-4 text-white/40 text-sm">
            Alle tarieven zijn exclusief 21% BTW, tenzij anders vermeld.
          </p>
        </div>
      </section>

      {/* TIJDBLOKKEN */}
      <section className="py-20 bg-background">
        <div className="max-w-5xl mx-auto px-6">
          <div ref={ref1} className="reveal">
            <div className="grid md:grid-cols-2 gap-4">
              {TIJDBLOKKEN.map(({ id, label, sublabel, tijd, duur, prijs, prijsIncl, featured, icon, desc }) => (
                <div
                  key={id}
                  className={`relative rounded-2xl border p-7 transition-all duration-300 ${
                    featured
                      ? 'bg-foreground border-foreground text-white shadow-2xl scale-[1.02]'
                      : 'bg-white border-border hover:shadow-lg hover:border-primary/20'
                  }`}
                >
                  {featured && (
                    <div className="absolute -top-3 left-6">
                      <Badge className="bg-primary text-white border-0 text-xs px-3 py-1">
                        Meest gekozen
                      </Badge>
                    </div>
                  )}

                  <div className="flex items-start justify-between mb-5">
                    <div>
                      <span className="text-2xl mb-2 block">{icon}</span>
                      <h2 className={`text-xl font-bold ${featured ? 'text-white' : 'text-foreground'}`}>
                        {label}
                      </h2>
                      <p className={`text-xs font-medium uppercase tracking-widest ${featured ? 'text-white/50' : 'text-muted-foreground'}`}>
                        {sublabel}
                      </p>
                    </div>
                    <div className="text-right">
                      <p className={`text-3xl font-bold ${featured ? 'text-white' : 'text-foreground'}`}>
                        {prijs}
                      </p>
                      <p className={`text-xs ${featured ? 'text-white/50' : 'text-muted-foreground'}`}>
                        {prijsIncl}
                      </p>
                    </div>
                  </div>

                  <div className={`flex items-center gap-4 text-sm mb-4 pb-4 border-b ${featured ? 'border-white/15' : 'border-border'}`}>
                    <div className="flex items-center gap-1.5">
                      <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" className={featured ? 'text-white/60' : 'text-muted-foreground'}>
                        <circle cx="12" cy="12" r="10"/>
                        <polyline points="12 6 12 12 16 14"/>
                      </svg>
                      <span className={featured ? 'text-white/70' : 'text-muted-foreground'}>{tijd}</span>
                    </div>
                    {duur !== '—' && (
                      <span className={`text-xs px-2 py-0.5 rounded-full ${featured ? 'bg-white/10 text-white/60' : 'bg-secondary text-muted-foreground'}`}>
                        {duur}
                      </span>
                    )}
                  </div>

                  <p className={`text-sm leading-relaxed ${featured ? 'text-white/65' : 'text-muted-foreground'}`}>
                    {desc}
                  </p>

                  <div className="mt-5">
                    <LinkButton
                      to="/reserveren"
                      className={`w-full justify-center rounded-xl ${
                        featured
                          ? 'bg-white text-foreground hover:bg-white/90'
                          : ''
                      }`}
                      variant={featured ? undefined : 'outline'}
                    >
                      {id === 'weekend' ? 'Neem contact op' : 'Reserveer dit blok'}
                    </LinkButton>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* WHAT'S INCLUDED */}
      <section className="py-20 bg-secondary/40">
        <div className="max-w-5xl mx-auto px-6">
          <div ref={ref2} className="reveal">
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              <div>
                <p className="text-sm font-semibold text-primary uppercase tracking-widest mb-3">Inbegrepen</p>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Alles wat je nodig hebt</h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Elk tijdblok geeft je toegang tot de volledige studio met alle bijbehorende faciliteiten.
                  Geen extra's, geen verborgen kosten.
                </p>
                <ul className="space-y-3">
                  {INCLUDED.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-primary flex items-center justify-center flex-shrink-0 mt-0.5">
                        <svg width="10" height="10" fill="none" stroke="white" strokeWidth="2.5" viewBox="0 0 24 24">
                          <polyline points="20 6 9 17 4 12"/>
                        </svg>
                      </div>
                      <span className="text-sm text-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="space-y-4">
                <div className="bg-white border border-border rounded-2xl p-6">
                  <h3 className="font-bold text-foreground mb-3">Weekendboekingen</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                    Op zaterdag en zondag zijn tarieven op aanvraag. Neem contact met ons op voor beschikbaarheid en prijzen.
                    Op zondag is parkeren gratis.
                  </p>
                  <AnchorButton href="mailto:info@studiolegarage.nl" variant="outline" className="rounded-xl w-full justify-center">
                    Weekend aanvragen
                  </AnchorButton>
                </div>

                <div className="bg-white border border-border rounded-2xl p-6">
                  <h3 className="font-bold text-foreground mb-3">Specialistisch materiaal</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Heb je naast de standaard uitrusting extra apparatuur nodig? Dat is in overleg te regelen via onze partners.
                    Vermeld je wensen bij de boeking.
                  </p>
                </div>

                <div className="bg-foreground rounded-2xl p-6">
                  <p className="text-white/60 text-xs font-semibold uppercase tracking-widest mb-2">Vragen over tarieven?</p>
                  <p className="text-white font-bold text-lg mb-1">
                    <a href="tel:0621587273" className="hover:text-white/80 transition-colors">06 2158 7273</a>
                  </p>
                  <p className="text-white/50 text-sm">07:30 – 23:00, ook in het weekend</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
