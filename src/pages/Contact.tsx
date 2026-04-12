import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { AnchorButton } from '@/components/ui/link-button'
import { Badge } from '@/components/ui/badge'
import { useReveal } from '@/hooks/useReveal'

const CONTACT_ITEMS = [
  {
    icon: (
      <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.42 2 2 0 0 1 3.6 1.25h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.77a16 16 0 0 0 6.29 6.29l.94-.94a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
      </svg>
    ),
    label: 'Mobiel',
    value: '06 2158 7273',
    href: 'tel:0621587273',
    accent: 'bg-blue-50 text-blue-600',
  },
  {
    icon: (
      <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.42 2 2 0 0 1 3.6 1.25h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.77a16 16 0 0 0 6.29 6.29l.94-.94a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
      </svg>
    ),
    label: 'Kantoor',
    value: '020 625 35 13',
    href: 'tel:0206253513',
    accent: 'bg-slate-100 text-slate-600',
  },
  {
    icon: (
      <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
        <polyline points="22,6 12,13 2,6"/>
      </svg>
    ),
    label: 'E-mail',
    value: 'info@studiolegarage.nl',
    href: 'mailto:info@studiolegarage.nl',
    accent: 'bg-orange-50 text-orange-600',
  },
  {
    icon: (
      <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
        <circle cx="12" cy="10" r="3"/>
      </svg>
    ),
    label: 'Adres',
    value: 'Veemarkt 31, 1019 DA Amsterdam',
    href: 'https://maps.google.com/?q=Veemarkt+31,+Amsterdam',
    accent: 'bg-green-50 text-green-600',
  },
]

export default function Contact() {
  const ref1 = useReveal()
  const ref2 = useReveal()

  const [form, setForm] = useState({ naam: '', email: '', telefoon: '', bericht: '' })
  const [submitted, setSubmitted] = useState(false)

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setSubmitted(true)
  }

  const inputClass = 'w-full rounded-xl border border-border bg-white px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/25 focus:border-primary transition-all'

  return (
    <>
      {/* HEADER */}
      <section className="relative pt-32 pb-16 bg-foreground overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-tr from-primary/25 to-transparent" />
        <div className="relative max-w-6xl mx-auto px-6">
          <p className="text-primary text-sm font-semibold uppercase tracking-widest mb-4">Contact</p>
          <h1 className="text-5xl md:text-6xl font-bold text-white leading-tight mb-4">
            Neem contact op
          </h1>
          <p className="text-white/60 text-xl max-w-lg leading-relaxed">
            Vragen over de studio, beschikbaarheid of tarieven? We zijn bereikbaar van 07:30 tot 23:00.
          </p>
        </div>
      </section>

      {/* CONTACT CARDS */}
      <section className="py-12 bg-secondary/40 border-b border-border">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {CONTACT_ITEMS.map(({ icon, label, value, href, accent }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith('http') ? '_blank' : undefined}
                rel={href.startsWith('http') ? 'noreferrer' : undefined}
                className="bg-white rounded-2xl border border-border p-5 flex items-start gap-4 hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 group"
              >
                <div className={`w-10 h-10 rounded-xl ${accent} flex items-center justify-center flex-shrink-0`}>
                  {icon}
                </div>
                <div className="min-w-0">
                  <p className="text-xs text-muted-foreground font-medium mb-0.5">{label}</p>
                  <p className="font-semibold text-foreground text-sm group-hover:text-primary transition-colors truncate">{value}</p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* FORM + INFO */}
      <section className="py-20 bg-background">
        <div className="max-w-5xl mx-auto px-6">
          <div ref={ref1} className="reveal grid lg:grid-cols-2 gap-12">

            {/* Form */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-2">Stuur een bericht</h2>
              <p className="text-muted-foreground mb-7 leading-relaxed">
                Wil je een vraag stellen of informatie ontvangen? Gebruik het formulier hieronder. Voor reserveringen gebruik je de <a href="/reserveren" className="text-primary font-medium hover:underline">reserveringspagina</a>.
              </p>

              {submitted ? (
                <div className="bg-green-50 border border-green-200 rounded-2xl p-8 text-center">
                  <div className="w-14 h-14 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-4">
                    <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" className="text-green-600">
                      <polyline points="20 6 9 17 4 12"/>
                    </svg>
                  </div>
                  <h3 className="font-bold text-foreground text-lg mb-2">Bericht ontvangen!</h3>
                  <p className="text-muted-foreground text-sm">We nemen zo snel mogelijk contact met je op.</p>
                  <Button variant="outline" className="mt-5 rounded-xl"
                    onClick={() => { setSubmitted(false); setForm({ naam: '', email: '', telefoon: '', bericht: '' }) }}>
                    Nieuw bericht
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-1.5" htmlFor="naam">
                        Naam <span className="text-destructive">*</span>
                      </label>
                      <input id="naam" name="naam" type="text" required
                        value={form.naam} onChange={handleChange}
                        placeholder="Jan de Vries" className={inputClass} />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-1.5" htmlFor="telefoon">
                        Telefoon
                      </label>
                      <input id="telefoon" name="telefoon" type="tel"
                        value={form.telefoon} onChange={handleChange}
                        placeholder="06 1234 5678" className={inputClass} />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-1.5" htmlFor="email">
                      E-mailadres <span className="text-destructive">*</span>
                    </label>
                    <input id="email" name="email" type="email" required
                      value={form.email} onChange={handleChange}
                      placeholder="jan@voorbeeld.nl" className={inputClass} />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-1.5" htmlFor="bericht">
                      Bericht <span className="text-destructive">*</span>
                    </label>
                    <textarea id="bericht" name="bericht" required rows={5}
                      value={form.bericht} onChange={handleChange}
                      placeholder="Je vraag of opmerking..."
                      className={`${inputClass} resize-none`} />
                  </div>
                  <Button type="submit" size="lg" className="w-full rounded-xl">
                    Verstuur bericht
                  </Button>
                </form>
              )}
            </div>

            {/* Info */}
            <div className="space-y-5">
              <div className="bg-foreground rounded-2xl p-7 text-white">
                <h3 className="font-bold text-white text-lg mb-4">Bereikbaarheid</h3>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between border-b border-white/10 pb-3">
                    <span className="text-white/60">Maandag – Vrijdag</span>
                    <span className="font-medium text-white">07:30 – 23:00</span>
                  </div>
                  <div className="flex justify-between border-b border-white/10 pb-3">
                    <span className="text-white/60">Zaterdag</span>
                    <span className="font-medium text-white">07:30 – 23:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-white/60">Zondag</span>
                    <span className="font-medium text-white">07:30 – 23:00</span>
                  </div>
                </div>
                <p className="text-white/40 text-xs mt-4">KvK Amsterdam: 33252574</p>
              </div>

              <div className="bg-white border border-border rounded-2xl p-6">
                <h3 className="font-bold text-foreground mb-2">Social media</h3>
                <p className="text-sm text-muted-foreground mb-4">Volg ons voor inspiratie en updates:</p>
                <div className="flex gap-3">
                  <AnchorButton
                    href="https://facebook.com/studiolegarage"
                    target="_blank" rel="noreferrer"
                    variant="outline" className="rounded-xl flex-1 justify-center text-xs"
                  >
                    Facebook
                  </AnchorButton>
                  <AnchorButton
                    href="https://instagram.com/studiolegarage"
                    target="_blank" rel="noreferrer"
                    variant="outline" className="rounded-xl flex-1 justify-center text-xs"
                  >
                    Instagram
                  </AnchorButton>
                  <AnchorButton
                    href="https://linkedin.com/company/studiolegarage"
                    target="_blank" rel="noreferrer"
                    variant="outline" className="rounded-xl flex-1 justify-center text-xs"
                  >
                    LinkedIn
                  </AnchorButton>
                </div>
              </div>

              <div className="bg-secondary/60 border border-border rounded-2xl p-5 flex flex-wrap gap-2">
                <Badge variant="outline" className="text-blue-600 border-blue-200 bg-blue-50">
                  Mobiel: 06 2158 7273
                </Badge>
                <Badge variant="outline" className="text-green-600 border-green-200 bg-green-50">
                  info@studiolegarage.nl
                </Badge>
                <Badge variant="outline" className="text-purple-600 border-purple-200 bg-purple-50">
                  Veemarkt 31, Amsterdam
                </Badge>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* QUICK CTA */}
      <section className="py-10 bg-foreground">
        <div ref={ref2} className="reveal max-w-6xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-white font-bold text-lg mb-1">Direct reserveren?</h3>
              <p className="text-white/60 text-sm">Gebruik ons boekingsformulier voor een aanvraag.</p>
            </div>
            <AnchorButton
              href="/reserveren"
              size="lg"
              className="rounded-xl bg-white text-foreground hover:bg-white/90"
            >
              Naar reserveringspagina
            </AnchorButton>
          </div>
        </div>
      </section>
    </>
  )
}
