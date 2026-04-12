import { LinkButton } from '@/components/ui/link-button'
import { useReveal } from '@/hooks/useReveal'

const OV_OPTIONS = [
  {
    icon: '🚋',
    title: 'Tram 26',
    desc: 'Neem Tram 26 naar halte Rietlandpark, dan een korte wandeling naar de Veemarkt.',
  },
  {
    icon: '🚌',
    title: 'Bus 22',
    desc: 'Neem Bus 22 vanaf Amsterdam Centraal Station naar halte Veemarkt.',
  },
  {
    icon: '🚲',
    title: 'OV-fiets',
    desc: 'Huur een OV-fiets bij Centraal Station. Via de Piet Heijnkade en Panamalaan naar de Veemarkt — ca. 20 minuten.',
  },
]

const AUTO_STEPS = [
  'Neem de Piet Heijntunnel exit (A10 afrit S114)',
  'Bij de eerste verkeerslichten links afslaan',
  'Bij de volgende verkeerslichten rechtdoor',
  'Dan links en direct rechts het Veemarktterrein oprijden',
  'Het kleine parkeerterrein voor de studio is direct zichtbaar',
]

export default function Locatie() {
  const ref1 = useReveal()
  const ref2 = useReveal()

  return (
    <>
      {/* HEADER */}
      <section className="relative pt-32 pb-16 bg-foreground overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent" />
        <div className="relative max-w-6xl mx-auto px-6">
          <p className="text-primary text-sm font-semibold uppercase tracking-widest mb-4">Locatie</p>
          <h1 className="text-5xl md:text-6xl font-bold text-white leading-tight mb-4">
            Amsterdam-Oost,<br />binnen de ring
          </h1>
          <p className="text-white/60 text-xl max-w-lg leading-relaxed">
            Veemarkt 31, 1019 DA Amsterdam. Op nog geen 20 minuten fietsen van Centraal Station.
          </p>
        </div>
      </section>

      {/* MAP + INFO */}
      <section className="py-20 bg-background">
        <div className="max-w-6xl mx-auto px-6">
          <div ref={ref1} className="reveal grid lg:grid-cols-5 gap-8 items-start">

            {/* Map — wider */}
            <div className="lg:col-span-3">
              <div className="rounded-2xl overflow-hidden border border-border shadow-md aspect-[4/3]">
                <iframe
                  title="Studio Le Garage locatie"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2436.4!2d4.9278!3d52.3625!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c6099f08b5c4e1%3A0x0!2sVeemarkt%2031%2C%201019%20DA%20Amsterdam!5e0!3m2!1snl!2snl!4v1234567890"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
              <div className="mt-4 flex gap-3">
                <a
                  href="https://maps.google.com/?q=Veemarkt+31,+Amsterdam"
                  target="_blank" rel="noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-primary font-medium hover:underline"
                >
                  <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                    <circle cx="12" cy="10" r="3"/>
                  </svg>
                  Open in Google Maps
                </a>
              </div>
            </div>

            {/* Info cards */}
            <div className="lg:col-span-2 space-y-4">
              <div className="bg-foreground rounded-2xl p-6 text-white">
                <p className="text-white/50 text-xs font-semibold uppercase tracking-widest mb-3">Adres</p>
                <p className="text-white font-bold text-lg">Veemarkt 31</p>
                <p className="text-white/70">1019 DA Amsterdam</p>
                <p className="text-white/50 text-sm mt-2">Amsterdam-Oost — binnen de A10 ring</p>
              </div>

              <div className="bg-white border border-border rounded-2xl p-6">
                <p className="text-xs font-semibold text-muted-foreground uppercase tracking-widest mb-3">Parkeren</p>
                <ul className="space-y-2 text-sm text-foreground">
                  <li className="flex items-start gap-2.5">
                    <span className="text-base">🅿️</span>
                    <span>Betaald parkeren direct buiten</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="text-base">🆓</span>
                    <span>Zondag: de hele dag gratis parkeren</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="text-base">🔌</span>
                    <span>Elektrische laadpaal aanwezig</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="text-base">🚚</span>
                    <span>Gratis laden & lossen voor de deur</span>
                  </li>
                </ul>
              </div>

              <div className="bg-secondary/60 border border-border rounded-2xl p-5 text-center">
                <p className="text-2xl mb-1">🚲</p>
                <p className="font-semibold text-foreground text-sm">~20 minuten fietsen</p>
                <p className="text-xs text-muted-foreground">vanaf Amsterdam Centraal Station</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* GETTING THERE */}
      <section className="py-20 bg-secondary/40">
        <div className="max-w-6xl mx-auto px-6">
          <div ref={ref2} className="reveal grid md:grid-cols-2 gap-12">

            {/* Public transport */}
            <div>
              <p className="text-sm font-semibold text-primary uppercase tracking-widest mb-3">Openbaar vervoer</p>
              <h2 className="text-2xl md:text-3xl font-bold mb-6">Met het OV</h2>
              <div className="space-y-4">
                {OV_OPTIONS.map(({ icon, title, desc }) => (
                  <div key={title} className="bg-white rounded-xl border border-border p-5 flex items-start gap-4 hover:shadow-sm transition-shadow">
                    <span className="text-2xl flex-shrink-0">{icon}</span>
                    <div>
                      <h3 className="font-semibold text-foreground text-sm mb-1">{title}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">{desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* By car */}
            <div>
              <p className="text-sm font-semibold text-primary uppercase tracking-widest mb-3">Met de auto</p>
              <h2 className="text-2xl md:text-3xl font-bold mb-6">Rijroute vanaf A10</h2>
              <div className="space-y-3">
                {AUTO_STEPS.map((step, i) => (
                  <div key={i} className="flex items-start gap-4 bg-white rounded-xl border border-border p-4">
                    <div className="w-7 h-7 rounded-full bg-foreground text-white flex items-center justify-center flex-shrink-0 text-xs font-bold">
                      {i + 1}
                    </div>
                    <p className="text-sm text-foreground leading-relaxed pt-0.5">{step}</p>
                  </div>
                ))}
              </div>

              <div className="mt-5 bg-white border border-border rounded-xl p-4 text-sm text-muted-foreground">
                <strong className="text-foreground">Tip:</strong> Via Afrit S114, direct na de Piet Heijntunnel. "Voor u bevindt zich een klein parkeerterrein — daar is onze studio gevestigd."
              </div>
            </div>
          </div>

          <div className="mt-12 text-center">
            <LinkButton to="/reserveren" size="lg" className="rounded-xl">
              Reserveer de studio
            </LinkButton>
          </div>
        </div>
      </section>
    </>
  )
}
