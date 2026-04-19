import { Car, SquareParking, TrainFront } from 'lucide-react'
import { LinkButton } from '@/components/ui/link-button'
import { useReveal } from '@/hooks/useReveal'

const OV_LINES = [
  'Tram 26: halte Rietlandpark, korte wandeling.',
  'Bus 22: Centraal → halte Veemarkt.',
  'OV-fiets vanaf CS: ca. 20 min.',
]

const AUTO_STEPS = [
  'A10, afrit S114 (Piet Heijntunnel).',
  'Eerste lichten links; volgende rechtdoor.',
  'Daarna links, direct rechts het terrein op.',
]

const PARK_LINES = [
  'Betaald parkeren in de buurt; zondag vaak gratis.',
  'Laden en lossen voor de deur: gratis.',
]

const MAP_EMBED =
  'https://www.google.com/maps?q=Veemarkt+31,+1019+DA+Amsterdam&hl=nl&z=16&output=embed'

const publicAssetUrl = (filename: string) => `${import.meta.env.BASE_URL}${filename}`

const iconProps = {
  className: 'size-[18px] shrink-0 text-[#747474] md:size-5',
  strokeWidth: 1.5,
  'aria-hidden': true as const,
}

export default function Locatie() {
  const refHero = useReveal()
  const refMap = useReveal()
  const refImages = useReveal()
  const refRoute = useReveal()

  return (
    <div className="bg-white">
      <section className="relative bg-white pt-32 pb-8 md:pb-10">
        <div ref={refHero} className="reveal mx-auto max-w-5xl px-6 text-center">
          <h1 className="font-semicond font-black text-5xl leading-[1.05] tracking-tight text-black sm:text-6xl md:text-7xl">
            Locatie
          </h1>
          <p className="mx-auto mt-6 max-w-3xl font-body-dm text-lg font-semibold leading-[1.2] tracking-[-0.02em] text-black sm:text-xl md:text-2xl">
            Veemarkt 31, 1019 DA Amsterdam
          </p>
          <p className="mx-auto mt-4 max-w-2xl font-body-dm text-sm font-semibold leading-snug tracking-[-0.02em] text-[#595858] sm:text-base">
            Goed bereikbaar met auto en OV; ca. 20 minuten fietsen vanaf Centraal.
          </p>
        </div>
      </section>

      <section className="border-t border-[#ededed] pb-6 md:pb-8" aria-label="Kaart">
        <div className="mx-auto max-w-[1280px] px-[clamp(1rem,4vw,2rem)] md:px-[clamp(1.5rem,6vw,4rem)]">
          <div ref={refMap} className="reveal overflow-hidden rounded-[4px] border border-[#dbdbdb] bg-[#ededed] shadow-[0_8px_24px_rgba(0,0,0,0.08)]">
            <div className="relative min-h-[min(68dvh,560px)] w-full md:min-h-[min(62dvh,680px)] lg:min-h-[min(58dvh,760px)]">
              <iframe
                title="Studio Le Garage op Google Maps"
                src={MAP_EMBED}
                width="100%"
                height="100%"
                className="absolute inset-0 size-full"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
          <div className="mt-4 text-center md:mt-5">
            <a
              href="https://maps.google.com/?q=Veemarkt+31,+1019+DA+Amsterdam"
              target="_blank"
              rel="noreferrer"
              className="font-body-dm text-xs text-[#595858] underline-offset-[3px] hover:text-[#1f41ff] hover:underline sm:text-sm"
            >
              Open in Google Maps
            </a>
          </div>
        </div>
      </section>

      <section
        className="mx-auto max-w-[1280px] px-[clamp(1.5rem,8vw,7rem)] pb-[clamp(1.5rem,4vw,2.5rem)] pt-2"
        aria-label="Impressie"
      >
        <div ref={refImages} className="reveal mx-auto flex w-full justify-center">
          <figure className="relative aspect-video w-full max-w-[520px] overflow-hidden bg-neutral-200">
            <img
              src={publicAssetUrl('veemarkt.jpg')}
              alt="Het pand aan de Veemarkt in Amsterdam: rode baksteen, witte banden en groen rondom."
              className="size-full object-cover object-center"
              loading="lazy"
              decoding="async"
              sizes="(max-width: 640px) 100vw, 520px"
            />
          </figure>
        </div>
      </section>

      <section className="bg-white pb-16 pt-12 md:pb-24 md:pt-16">
        <div className="mx-auto max-w-6xl px-6 sm:px-10 lg:px-14">
          <div
            ref={refRoute}
            className="reveal grid grid-cols-1 gap-14 sm:grid-cols-3 sm:gap-x-6 sm:gap-y-0 md:gap-x-10 lg:gap-x-12"
          >
            <div className="min-w-0 px-1 py-2 sm:px-4 sm:py-3 md:px-5 md:py-4 lg:px-6">
              <div className="mb-6 flex items-center gap-3 text-[#747474] md:mb-7">
                <TrainFront {...iconProps} />
                <h2 className="font-montserrat text-[11px] font-semibold uppercase tracking-[0.14em] text-[#747474] md:text-xs">
                  Openbaar vervoer
                </h2>
              </div>
              <ul className="space-y-3 md:space-y-3.5">
                {OV_LINES.map((line) => (
                  <li
                    key={line}
                    className="font-roboto text-xs leading-relaxed text-[#747474] md:text-[13px]"
                  >
                    {line}
                  </li>
                ))}
              </ul>
            </div>

            <div className="min-w-0 px-1 py-2 sm:px-4 sm:py-3 md:px-5 md:py-4 lg:px-6">
              <div className="mb-6 flex items-center gap-3 text-[#747474] md:mb-7">
                <Car {...iconProps} />
                <h2 className="font-montserrat text-[11px] font-semibold uppercase tracking-[0.14em] text-[#747474] md:text-xs">
                  Auto
                </h2>
              </div>
              <ol className="space-y-3 md:space-y-3.5">
                {AUTO_STEPS.map((step, i) => (
                  <li
                    key={step}
                    className="font-roboto text-xs leading-relaxed text-[#747474] md:text-[13px]"
                  >
                    <span className="tabular-nums text-[#595858]">{i + 1}. </span>
                    {step}
                  </li>
                ))}
              </ol>
            </div>

            <div className="min-w-0 px-1 py-2 sm:px-4 sm:py-3 md:px-5 md:py-4 lg:px-6">
              <div className="mb-6 flex items-center gap-3 text-[#747474] md:mb-7">
                <SquareParking {...iconProps} />
                <h2 className="font-montserrat text-[11px] font-semibold uppercase tracking-[0.14em] text-[#747474] md:text-xs">
                  Parkeren
                </h2>
              </div>
              <ul className="space-y-3 md:space-y-3.5">
                {PARK_LINES.map((line) => (
                  <li
                    key={line}
                    className="font-roboto text-xs leading-relaxed text-[#747474] md:text-[13px]"
                  >
                    {line}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-16 flex justify-center md:mt-20">
            <LinkButton
              to="/reserveren"
              variant="ghost"
              className="inline-flex h-10 items-center justify-center rounded-[3px] border-2 border-[#1f41ff] bg-[#1f41ff] px-8 font-montserrat text-xs font-bold text-white hover:border-[#1a38e0] hover:bg-[#1a38e0]"
            >
              Reserveer de studio
            </LinkButton>
          </div>
        </div>
      </section>
    </div>
  )
}
