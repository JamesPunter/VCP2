import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { LinkButton } from '@/components/ui/link-button'
import { useReveal } from '@/hooks/useReveal'
import { cn } from '@/lib/utils'

const CONTACT_LINES: { label?: 'Mobiel' | 'Kantoor'; value: string; href: string }[] = [
  { label: 'Mobiel', value: '06 2158 7273', href: 'tel:0621587273' },
  { label: 'Kantoor', value: '020 625 35 13', href: 'tel:0206253513' },
  { value: 'info@studiolegarage.nl', href: 'mailto:info@studiolegarage.nl' },
  {
    value: 'Veemarkt 31, 1019 DA Amsterdam',
    href: 'https://maps.google.com/?q=Veemarkt+31,+Amsterdam',
  },
]

const labelClass =
  'font-body-dm font-semibold text-black text-sm tracking-[-0.02em] mb-1.5'

const controlBase =
  'rounded-[4px] border border-[#dbdbdb] bg-white text-sm text-black placeholder:text-[#747474] shadow-[0_2px_4px_rgba(0,0,0,0.04)] focus-visible:border-[#1f41ff] focus-visible:ring-1 focus-visible:ring-[#1f41ff]/30'

const bannerLinkClass =
  'underline decoration-solid underline-offset-[3px] hover:opacity-90 whitespace-nowrap'

const publicAssetUrl = (filename: string) => `${import.meta.env.BASE_URL}${filename}`

const CONTACT_IMPRESSIONS = [
  {
    file: 'dansvloer.jpg',
    alt: 'Dansstudio met parketvloer, spiegelwanden en een witte paal.',
  },
  {
    file: 'dansvloer-boven.jpg',
    alt: 'Dansstudio van bovenaf: parketvloer en spiegelwanden.',
  },
] as const

export default function Contact() {
  const refHero = useReveal()
  const refBody = useReveal()
  const refImages = useReveal()
  const refCta = useReveal()

  const [form, setForm] = useState({ naam: '', email: '', telefoon: '', bericht: '' })
  const [submitted, setSubmitted] = useState(false)

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <div className="bg-white">
      <section className="relative bg-white pt-32 pb-10 md:pb-14">
        <div ref={refHero} className="reveal mx-auto max-w-5xl px-6 text-center">
          <h1 className="font-semicond font-black text-5xl leading-[1.05] tracking-tight text-black sm:text-6xl md:text-7xl">
            Contact
          </h1>
          <p className="mx-auto mt-6 max-w-3xl font-body-dm text-lg font-semibold leading-[1.15] tracking-[-0.02em] text-black sm:text-xl md:mt-8 md:text-2xl">
            Vragen over de studio, beschikbaarheid of tarieven? We helpen je graag.
          </p>
        </div>
      </section>

      <section className="bg-white pb-16 md:pb-24">
        <div className="mx-auto max-w-5xl px-6">
          <div ref={refBody} className="reveal mx-auto max-w-3xl">
            <h2 className="text-center font-body-dm text-xl font-semibold tracking-[-0.02em] text-black md:text-2xl">
              Stuur een bericht
            </h2>
            <p className="mt-3 text-center font-roboto text-sm leading-relaxed text-[#747474] md:text-[15px]">
              Voor een boeking gebruik je de{' '}
              <Link
                to="/reserveren"
                className="font-medium text-[#1f41ff] underline-offset-2 hover:underline"
              >
                reserveringspagina
              </Link>
              .
            </p>

            {submitted ? (
              <div className="mt-8 rounded-[4px] border border-[#dbdbdb] bg-white px-8 py-12 text-center shadow-[0_4px_5px_1px_rgba(193,193,193,0.2)]">
                <div className="mx-auto mb-5 flex size-14 items-center justify-center rounded-full bg-[#eef2ff]">
                  <svg
                    width="28"
                    height="28"
                    fill="none"
                    stroke="#1f41ff"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    aria-hidden
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
                <h3 className="font-body-dm text-lg font-semibold tracking-[-0.02em] text-black md:text-xl">
                  Bericht ontvangen
                </h3>
                <p className="mx-auto mt-3 max-w-md font-roboto text-sm text-[#747474]">
                  We nemen zo snel mogelijk contact met je op.
                </p>
                <Button
                  type="button"
                  variant="outline"
                  className="mt-8 h-10 rounded-[3px] border-2 border-[#1f41ff] px-6 font-montserrat text-sm font-bold text-[#1f41ff] hover:bg-[#1f41ff] hover:text-white"
                  onClick={() => {
                    setSubmitted(false)
                    setForm({ naam: '', email: '', telefoon: '', bericht: '' })
                  }}
                >
                  Nieuw bericht
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="mt-8 space-y-4 md:space-y-5">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <Label htmlFor="contact-naam" className={labelClass}>
                      Naam <span className="text-destructive">*</span>
                    </Label>
                    <Input
                      id="contact-naam"
                      name="naam"
                      required
                      value={form.naam}
                      onChange={handleChange}
                      className={cn(controlBase, 'h-9 px-3')}
                    />
                  </div>
                  <div>
                    <Label htmlFor="contact-telefoon" className={labelClass}>
                      Telefoon
                    </Label>
                    <Input
                      id="contact-telefoon"
                      name="telefoon"
                      type="tel"
                      value={form.telefoon}
                      onChange={handleChange}
                      className={cn(controlBase, 'h-9 px-3')}
                    />
                  </div>
                </div>
                <div>
                  <Label htmlFor="contact-email" className={labelClass}>
                    E-mail <span className="text-destructive">*</span>
                  </Label>
                  <Input
                    id="contact-email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    value={form.email}
                    onChange={handleChange}
                    className={cn(controlBase, 'h-9 px-3')}
                  />
                </div>
                <div>
                  <Label htmlFor="contact-bericht" className={labelClass}>
                    Bericht <span className="text-destructive">*</span>
                  </Label>
                  <Textarea
                    id="contact-bericht"
                    name="bericht"
                    required
                    rows={5}
                    value={form.bericht}
                    onChange={handleChange}
                    className={cn(controlBase, 'min-h-[120px] resize-y px-3 py-2 font-roboto')}
                  />
                </div>
                <div className="pt-2">
                  <Button
                    type="submit"
                    className="h-9 w-full rounded-[3px] bg-[#1f41ff] font-montserrat text-xs font-bold text-white hover:bg-[#1a38e0] sm:w-auto sm:px-8"
                  >
                    Verstuur bericht
                  </Button>
                </div>
              </form>
            )}
          </div>
        </div>
      </section>

      <section className="w-full bg-[#1f41ff] text-white" aria-label="Contactgegevens">
        <div className="mx-auto flex max-w-[1280px] flex-col items-center justify-center gap-4 px-6 py-4 text-[clamp(0.95rem,1.4vw,1.25rem)] font-semibold tracking-[-0.02em] sm:flex-row sm:flex-wrap sm:gap-x-8 sm:gap-y-3 md:py-[18px] lg:gap-x-12">
          {CONTACT_LINES.map(({ label, value, href }) => (
            <p
              key={href}
              className="flex flex-wrap items-baseline justify-center gap-x-1.5 text-center"
              style={{ fontFamily: 'var(--font-semicond)' }}
            >
              {label ? <span className="text-white/85">{label}:</span> : null}
              <a
                href={href}
                target={href.startsWith('http') ? '_blank' : undefined}
                rel={href.startsWith('http') ? 'noreferrer' : undefined}
                className={bannerLinkClass}
              >
                {value}
              </a>
            </p>
          ))}
        </div>
      </section>

      <section
        className="mx-auto max-w-[1280px] px-[clamp(1.5rem,8vw,7rem)] pt-[clamp(2.5rem,6vw,4.5rem)] pb-[clamp(2rem,4vw,3rem)]"
        aria-label="Impressie"
      >
        <div
          ref={refImages}
          className="reveal grid grid-cols-1 place-items-center gap-8 sm:grid-cols-2 sm:place-items-stretch sm:justify-items-center"
        >
          {CONTACT_IMPRESSIONS.map(({ file, alt }) => (
            <figure
              key={file}
              className="relative aspect-[305/383] w-full max-w-[480px] overflow-hidden bg-neutral-200"
            >
              <img
                src={publicAssetUrl(file)}
                alt={alt}
                className="size-full object-cover object-center"
                loading="lazy"
                decoding="async"
                sizes="(max-width: 640px) 100vw, 480px"
              />
            </figure>
          ))}
        </div>
      </section>

      <section className="bg-[#1f41ff] py-10 text-white md:py-12" aria-label="Reserveren">
        <div ref={refCta} className="reveal mx-auto flex max-w-5xl flex-col items-center justify-between gap-6 px-6 md:flex-row">
          <div className="text-center md:text-left">
            <h3 className="font-body-dm text-lg font-semibold">Direct reserveren?</h3>
            <p className="mt-1 font-roboto text-sm text-white/80">
              Gebruik het boekingsformulier voor een aanvraag.
            </p>
          </div>
          <LinkButton
            to="/reserveren"
            variant="ghost"
            className="inline-flex h-10 shrink-0 items-center justify-center rounded-[3px] border-2 border-white bg-white px-8 font-montserrat text-xs font-bold text-[#1f41ff] hover:bg-white/90"
          >
            Naar reserveren
          </LinkButton>
        </div>
      </section>
    </div>
  )
}
