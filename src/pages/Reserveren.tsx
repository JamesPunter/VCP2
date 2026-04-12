import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { AnchorButton } from '@/components/ui/link-button'
import { useReveal } from '@/hooks/useReveal'

type FormState = {
  naam: string
  bedrijf: string
  email: string
  telefoon: string
  datum: string
  tijdblok: string
  productie: string
}

const TIJDBLOKKEN = [
  { value: 'ochtend', label: 'Ochtend / Morning (07:30 – 12:30) — € 287,50 excl. BTW' },
  { value: 'middag', label: 'Middag / Afternoon (13:00 – 18:00) — € 287,50 excl. BTW' },
  { value: 'dagdeel', label: 'Dagtarief / Full Day (07:30 – 17:30) — € 497,50 excl. BTW' },
  { value: 'avond', label: 'Avond / Evening (19:00 – 23:00) — € 195,00 excl. BTW' },
  { value: 'weekend', label: 'Weekend (Za/Zo) — Op aanvraag / On request' },
]

export default function Reserveren() {
  const ref1 = useReveal()

  const [form, setForm] = useState<FormState>({
    naam: '',
    bedrijf: '',
    email: '',
    telefoon: '',
    datum: '',
    tijdblok: '',
    productie: '',
  })
  const [submitted, setSubmitted] = useState(false)

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
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
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent" />
        <div className="relative max-w-6xl mx-auto px-6">
          <p className="text-primary text-sm font-semibold uppercase tracking-widest mb-4">Booking</p>
          <h1 className="text-5xl md:text-6xl font-bold text-white leading-tight mb-4">
            Reserveer / Book<br />de Studio
          </h1>
          <p className="text-white/60 text-lg max-w-lg leading-relaxed">
            Vul het formulier in voor een boekingsaanvraag. We nemen zo snel mogelijk contact met je op.
            <span className="block text-white/40 text-sm mt-2">
              Fill out the form below for a booking request.
            </span>
          </p>
        </div>
      </section>

      {/* FORM + SIDEBAR */}
      <section className="py-20 bg-background">
        <div className="max-w-5xl mx-auto px-6">
          <div ref={ref1} className="reveal grid lg:grid-cols-3 gap-10">

            {/* Form — 2/3 width */}
            <div className="lg:col-span-2">
              {submitted ? (
                <div className="bg-green-50 border border-green-200 rounded-2xl p-10 text-center">
                  <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-5">
                    <svg width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" className="text-green-600">
                      <polyline points="20 6 9 17 4 12"/>
                    </svg>
                  </div>
                  <h3 className="font-bold text-foreground text-xl mb-2">Aanvraag ontvangen!</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed max-w-sm mx-auto">
                    Bedankt voor je boekingsaanvraag. We nemen zo snel mogelijk contact met je op ter bevestiging.
                  </p>
                  <p className="text-xs text-muted-foreground mt-2">
                    Urgent? Bel <a href="tel:0621587273" className="text-primary font-medium">06 2158 7273</a>
                  </p>
                  <Button
                    variant="outline"
                    className="mt-6 rounded-xl"
                    onClick={() => {
                      setSubmitted(false)
                      setForm({ naam: '', bedrijf: '', email: '', telefoon: '', datum: '', tijdblok: '', productie: '' })
                    }}
                  >
                    Nieuwe aanvraag
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-1.5" htmlFor="naam">
                        Naam <span className="text-destructive">*</span>
                      </label>
                      <input
                        id="naam" name="naam" type="text" required
                        value={form.naam} onChange={handleChange}
                        placeholder="Jan de Vries"
                        className={inputClass}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-1.5" htmlFor="bedrijf">
                        Bedrijf / Company
                      </label>
                      <input
                        id="bedrijf" name="bedrijf" type="text"
                        value={form.bedrijf} onChange={handleChange}
                        placeholder="Naam / Naam BV"
                        className={inputClass}
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-1.5" htmlFor="email">
                        E-mailadres <span className="text-destructive">*</span>
                      </label>
                      <input
                        id="email" name="email" type="email" required
                        value={form.email} onChange={handleChange}
                        placeholder="jan@voorbeeld.nl"
                        className={inputClass}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-1.5" htmlFor="telefoon">
                        Telefoonnummer <span className="text-destructive">*</span>
                      </label>
                      <input
                        id="telefoon" name="telefoon" type="tel" required
                        value={form.telefoon} onChange={handleChange}
                        placeholder="06 1234 5678"
                        className={inputClass}
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-1.5" htmlFor="datum">
                      Gewenste datum <span className="text-destructive">*</span>
                    </label>
                    <input
                      id="datum" name="datum" type="date" required
                      value={form.datum} onChange={handleChange}
                      className={inputClass}
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-1.5" htmlFor="tijdblok">
                      Tijdblok / Timeslot <span className="text-destructive">*</span>
                    </label>
                    <select
                      id="tijdblok" name="tijdblok" required
                      value={form.tijdblok} onChange={handleChange}
                      className={`${inputClass} appearance-none`}
                    >
                      <option value="">Kies een tijdblok...</option>
                      {TIJDBLOKKEN.map(({ value, label }) => (
                        <option key={value} value={value}>{label}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-1.5" htmlFor="productie">
                      Type productie / Opmerkingen
                    </label>
                    <textarea
                      id="productie" name="productie" rows={5}
                      value={form.productie} onChange={handleChange}
                      placeholder="Vertel ons wat je gaat produceren, hoeveel mensen er aanwezig zijn en eventuele speciale wensen..."
                      className={`${inputClass} resize-none`}
                    />
                  </div>

                  <Button type="submit" size="lg" className="w-full rounded-xl">
                    Verstuur Aanvraag / Send Request
                  </Button>

                  <p className="text-xs text-muted-foreground text-center">
                    Tarieven zijn excl. 21% BTW / Prices are excl. 21% VAT.
                  </p>
                </form>
              )}
            </div>

            {/* Sidebar — 1/3 */}
            <div className="space-y-4">
              <div className="bg-foreground rounded-2xl p-6 text-white">
                <p className="text-white/50 text-xs font-semibold uppercase tracking-widest mb-3">Direct antwoord?</p>
                <a href="tel:0621587273" className="text-2xl font-bold text-white hover:text-white/80 transition-colors block mb-1">
                  06 2158 7273
                </a>
                <p className="text-white/50 text-sm">Urgent? / Need it fast?</p>
                <p className="text-white/40 text-xs mt-1">07:30 – 23:00</p>
              </div>

              <div className="bg-white border border-border rounded-2xl p-6">
                <h3 className="font-bold text-foreground mb-4">Tarieven snel bekijken</h3>
                <div className="space-y-3">
                  {[
                    { blok: 'Ochtend', prijs: '€ 287,50' },
                    { blok: 'Middag', prijs: '€ 287,50' },
                    { blok: 'Hele dag', prijs: '€ 497,50' },
                    { blok: 'Avond', prijs: '€ 195,00' },
                    { blok: 'Weekend', prijs: 'Op aanvraag' },
                  ].map(({ blok, prijs }) => (
                    <div key={blok} className="flex justify-between text-sm border-b border-border pb-2 last:border-0 last:pb-0">
                      <span className="text-muted-foreground">{blok}</span>
                      <span className="font-semibold text-foreground">{prijs}</span>
                    </div>
                  ))}
                </div>
                <p className="text-xs text-muted-foreground mt-3">Excl. 21% BTW. Inclusief faciliteiten, koffie & thee.</p>
              </div>

              <div className="bg-secondary/60 border border-border rounded-2xl p-6">
                <h3 className="font-bold text-foreground mb-2 text-sm">Adres</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Veemarkt 31<br />
                  1019 DA Amsterdam
                </p>
                <AnchorButton
                  href="https://maps.google.com/?q=Veemarkt+31,+Amsterdam"
                  target="_blank" rel="noreferrer"
                  variant="outline"
                  className="rounded-xl w-full justify-center mt-4 text-xs"
                >
                  Route plannen
                </AnchorButton>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
