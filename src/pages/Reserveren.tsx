import { useId, useMemo, useState } from 'react'
import { format, startOfToday } from 'date-fns'
import { nl } from 'date-fns/locale'
import { CalendarIcon } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { Calendar } from '@/components/ui/calendar'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'
import { ScrollArea } from '@/components/ui/scroll-area'
import { Textarea } from '@/components/ui/textarea'
import { BookingMonthCaption } from '@/components/booking-month-caption'
import { useReveal } from '@/hooks/useReveal'
import { cn } from '@/lib/utils'

const CALENDAR_START_MONTH = new Date(2020, 0)

type FormState = {
  naam: string
  bedrijf: string
  email: string
  telefoon: string
  tijdblok: string
  productie: string
}

const TIME_SLOTS: { value: string; title: string; tijd: string; prijs: string }[] = [
  { value: 'ochtend', title: 'Ochtend', tijd: '07:30 – 12:30', prijs: '€287,50' },
  { value: 'middag', title: 'Middag', tijd: '13:00 – 18:00', prijs: '€287,50' },
  { value: 'avond', title: 'Avond', tijd: '19:00 – 23:00', prijs: '€195,00' },
  { value: 'dagdeel', title: 'Hele dag', tijd: '07:30 – 17:30', prijs: '€497,50' },
  { value: 'weekend', title: 'Weekend', tijd: 'Za / Zo', prijs: 'Op aanvraag' },
]

const WEEKEND_DAY_BLOK_VALUES = ['ochtend', 'middag', 'avond', 'dagdeel'] as const

function isCalendarWeekend(date: Date): boolean {
  const d = date.getDay()
  return d === 0 || d === 6
}

const labelClass =
  'font-body-dm font-semibold text-black text-sm tracking-[-0.02em] mb-1.5'

const controlBase =
  'rounded-[4px] border border-[#dbdbdb] bg-white text-sm text-black placeholder:text-[#747474] shadow-[0_2px_4px_rgba(0,0,0,0.04)] focus-visible:border-[#1f41ff] focus-visible:ring-1 focus-visible:ring-[#1f41ff]/30'

export default function Reserveren() {
  const refHero = useReveal()
  const refForm = useReveal()
  const idBase = useId()

  const [selectedDate, setSelectedDate] = useState<Date | undefined>(undefined)
  const [calendarOpen, setCalendarOpen] = useState(false)

  const [form, setForm] = useState<FormState>({
    naam: '',
    bedrijf: '',
    email: '',
    telefoon: '',
    tijdblok: '',
    productie: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const selectedSlot = useMemo(
    () => TIME_SLOTS.find((s) => s.value === form.tijdblok),
    [form.tijdblok],
  )

  const displayedTimeSlots = useMemo(() => {
    if (!selectedDate) return []
    if (isCalendarWeekend(selectedDate)) {
      return TIME_SLOTS.filter((s) =>
        (WEEKEND_DAY_BLOK_VALUES as readonly string[]).includes(s.value),
      )
    }
    return TIME_SLOTS.filter((s) => s.value !== 'weekend')
  }, [selectedDate])

  const weekendDayPricing = Boolean(selectedDate && isCalendarWeekend(selectedDate))

  const kostenSummary = useMemo(() => {
    if (!selectedSlot || !selectedDate) {
      return { bedrag: '—' as string, showVatNote: false }
    }
    if (form.tijdblok === 'weekend') {
      return { bedrag: 'Op aanvraag', showVatNote: false }
    }
    if (weekendDayPricing && (WEEKEND_DAY_BLOK_VALUES as readonly string[]).includes(form.tijdblok)) {
      return { bedrag: 'Op aanvraag', showVatNote: false }
    }
    return { bedrag: selectedSlot.prijs, showVatNote: true }
  }, [selectedSlot, selectedDate, form.tijdblok, weekendDayPricing])

  const calendarEndMonth = useMemo(() => new Date(new Date().getFullYear() + 3, 11), [])

  function handleInputChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  function handleDateSelect(date: Date | undefined) {
    setSelectedDate(date)
    setCalendarOpen(false)
    setForm((prev) => ({ ...prev, tijdblok: '' }))
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!selectedDate || !form.tijdblok) return
    setSubmitted(true)
  }

  const datumLabel = selectedDate
    ? format(selectedDate, 'd MMM yyyy', { locale: nl })
    : 'Datum'

  return (
    <>
      {!submitted ? (
        <section className="relative bg-white pt-32 pb-10 md:pb-14">
          <div ref={refHero} className="reveal max-w-5xl mx-auto px-6 text-center">
            <h1 className="font-semicond font-black text-black text-5xl sm:text-6xl md:text-7xl leading-[1.05] tracking-tight">
              Reserveer de studio
            </h1>
            <p className="mt-6 md:mt-8 font-body-dm font-semibold text-black text-lg sm:text-xl md:text-2xl leading-[1.15] tracking-[-0.02em] max-w-3xl mx-auto">
              Vul het formulier in voor een boekingsaanvraag. We nemen zo snel mogelijk contact met je op.
            </p>
          </div>
        </section>
      ) : null}

      <section
        className={cn(
          submitted
            ? 'min-h-[min(85dvh,calc(100dvh-8rem))] bg-[#f5f5f5] py-16 md:py-24 lg:py-32 pt-28 md:pt-36'
            : 'bg-white pb-16 md:pb-24',
        )}
      >
        <div className={cn('mx-auto px-6', submitted ? 'max-w-4xl' : 'max-w-5xl')}>
          <div ref={refForm} className="reveal">
            {submitted ? (
              <div className="rounded-[4px] border border-[#dbdbdb] bg-white px-8 py-14 text-center shadow-[0_4px_5px_1px_rgba(193,193,193,0.2)] sm:px-12 sm:py-16 md:px-16 md:py-20 lg:px-20 lg:py-24">
                <div className="mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-full bg-[#eef2ff] md:mb-8 md:h-16 md:w-16">
                  <svg
                    width="28"
                    height="28"
                    className="md:h-8 md:w-8"
                    fill="none"
                    stroke="#1f41ff"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    aria-hidden
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
                <h3 className="font-body-dm font-semibold text-black text-xl tracking-[-0.02em] sm:text-2xl md:text-3xl mb-3 md:mb-4">
                  Aanvraag ontvangen
                </h3>
                <p className="mx-auto max-w-xl font-roboto text-base leading-relaxed text-[#747474] md:text-lg md:leading-relaxed">
                  Bedankt voor je boekingsaanvraag. We nemen zo snel mogelijk contact met je op ter bevestiging.
                </p>
                <p className="mx-auto mt-4 max-w-xl font-roboto text-sm text-[#747474] md:mt-5 md:text-base">
                  Urgent? Bel{' '}
                  <a
                    href="tel:0621587273"
                    className="font-medium text-[#1f41ff] underline-offset-2 hover:underline"
                  >
                    06 2158 7273
                  </a>
                </p>
                <Button
                  type="button"
                  variant="outline"
                  className="mt-8 h-10 rounded-[3px] border-2 border-[#1f41ff] px-6 font-montserrat text-sm font-bold text-[#1f41ff] hover:bg-[#1f41ff] hover:text-white md:mt-10 md:h-11 md:px-8"
                  onClick={() => {
                    setSubmitted(false)
                    setSelectedDate(undefined)
                    setForm({ naam: '', bedrijf: '', email: '', telefoon: '', tijdblok: '', productie: '' })
                  }}
                >
                  Nieuwe aanvraag
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-8 md:space-y-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
                  <div className="space-y-4">
                    <div>
                      <Label htmlFor={`${idBase}-naam`} className={labelClass}>
                        Naam <span className="text-destructive">*</span>
                      </Label>
                      <Input
                        id={`${idBase}-naam`}
                        name="naam"
                        required
                        value={form.naam}
                        onChange={handleInputChange}
                        className={cn(controlBase, 'h-9 px-3')}
                      />
                    </div>
                    <div>
                      <Label htmlFor={`${idBase}-bedrijf`} className={labelClass}>
                        Bedrijf
                      </Label>
                      <Input
                        id={`${idBase}-bedrijf`}
                        name="bedrijf"
                        value={form.bedrijf}
                        onChange={handleInputChange}
                        className={cn(controlBase, 'h-9 px-3')}
                      />
                    </div>
                    <div>
                      <Label htmlFor={`${idBase}-email`} className={labelClass}>
                        Email <span className="text-destructive">*</span>
                      </Label>
                      <Input
                        id={`${idBase}-email`}
                        name="email"
                        type="email"
                        autoComplete="email"
                        required
                        value={form.email}
                        onChange={handleInputChange}
                        className={cn(controlBase, 'h-9 px-3')}
                      />
                    </div>
                    <div>
                      <Label htmlFor={`${idBase}-telefoon`} className={labelClass}>
                        Telefoon <span className="text-destructive">*</span>
                      </Label>
                      <Input
                        id={`${idBase}-telefoon`}
                        name="telefoon"
                        type="tel"
                        autoComplete="tel"
                        required
                        value={form.telefoon}
                        onChange={handleInputChange}
                        className={cn(controlBase, 'h-9 px-3')}
                      />
                    </div>
                  </div>

                  <div className="flex flex-col min-h-0">
                    <span className={labelClass}>Selecteer datum</span>
                    <Popover open={calendarOpen} onOpenChange={setCalendarOpen}>
                      <PopoverTrigger
                        type="button"
                        className={cn(
                          controlBase,
                          'relative isolate w-full flex items-center justify-between gap-2 px-3 h-9 font-body-dm font-medium text-left text-sm',
                          !selectedDate && 'text-[#747474]',
                        )}
                      >
                        <span className="truncate">{datumLabel}</span>
                        <CalendarIcon className="size-4 shrink-0 text-[#1f41ff] opacity-80" aria-hidden />
                      </PopoverTrigger>
                      <PopoverContent
                        className="z-[280] w-auto border border-[#dbdbdb] bg-white p-0 opacity-100 shadow-lg text-black"
                        align="start"
                        sideOffset={6}
                      >
                        <Calendar
                          mode="single"
                          selected={selectedDate}
                          onSelect={handleDateSelect}
                          defaultMonth={selectedDate ?? new Date()}
                          disabled={{ before: startOfToday() }}
                          locale={nl}
                          captionLayout="label"
                          startMonth={CALENDAR_START_MONTH}
                          endMonth={calendarEndMonth}
                          components={{ MonthCaption: BookingMonthCaption }}
                          classNames={{
                            month_caption:
                              'flex min-h-10 w-full items-stretch justify-center gap-2 bg-white px-0 py-1 opacity-100 relative z-20',
                          }}
                          className="bg-white p-2 opacity-100 text-black"
                        />
                      </PopoverContent>
                    </Popover>
                    <input
                      type="hidden"
                      name="datum"
                      value={selectedDate ? format(selectedDate, 'yyyy-MM-dd') : ''}
                      aria-hidden
                    />

                    {selectedDate ? (
                      <div
                        className={cn(
                          'relative isolate mt-3 flex flex-col rounded-[4px] border border-[#dbdbdb] bg-white p-3',
                          'shadow-[0_4px_5px_1px_rgba(193,193,193,0.2)]',
                        )}
                      >
                        <p className="font-body-dm font-semibold text-xs text-black mb-2">Tijdblok</p>
                        <ScrollArea className="h-[220px] w-full lg:h-[260px]">
                          <div className="space-y-1.5 pr-3">
                          {displayedTimeSlots.map((slot) => {
                            const selected = form.tijdblok === slot.value
                            const prijsLabel = weekendDayPricing ? 'Op aanvraag' : slot.prijs
                            return (
                              <button
                                key={slot.value}
                                type="button"
                                aria-pressed={selected}
                                onClick={() => setForm((prev) => ({ ...prev, tijdblok: slot.value }))}
                                className={cn(
                                  'w-full border bg-white text-left rounded-[4px] px-2.5 py-2 text-xs transition-colors',
                                  'focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#1f41ff]/35',
                                  selected
                                    ? 'border-[#1f41ff] bg-[#f8f9ff]'
                                    : 'border-[#e8e8e8] hover:border-[#dbdbdb] shadow-[0_2px_4px_rgba(0,0,0,0.04)]',
                                )}
                              >
                                <span className="font-body-dm font-semibold text-xs text-black">
                                  {slot.title}
                                </span>
                                <span className="mt-0.5 block font-body-dm text-sm font-bold tabular-nums text-black">
                                  {prijsLabel}
                                </span>
                                <span className="mt-0.5 block font-montserrat text-[10px] text-[#747474]">
                                  {slot.tijd}
                                </span>
                              </button>
                            )
                          })}
                          </div>
                        </ScrollArea>
                      </div>
                    ) : null}
                    <input type="hidden" name="tijdblok" value={form.tijdblok} />
                  </div>
                </div>

                <div>
                  <Label htmlFor={`${idBase}-productie`} className={labelClass}>
                    Opmerkingen
                  </Label>
                  <Textarea
                    id={`${idBase}-productie`}
                    name="productie"
                    rows={3}
                    value={form.productie}
                    onChange={handleInputChange}
                    className={cn(controlBase, 'w-full min-h-[72px] px-3 py-2 resize-y font-roboto')}
                  />
                </div>

                <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between sm:gap-6 pt-4 border-t border-[#ededed]">
                  <div className="min-w-0">
                    <p className="font-roboto text-[11px] font-medium uppercase tracking-wider text-[#747474] mb-1">
                      Kosten voor geselecteerd blok
                    </p>
                    <p className="font-body-dm font-bold text-black text-lg tabular-nums tracking-tight">
                      {kostenSummary.bedrag}
                      {kostenSummary.showVatNote ? (
                        <span className="font-roboto font-normal text-xs text-[#747474] ml-2">
                          excl. 21% BTW
                        </span>
                      ) : null}
                    </p>
                  </div>

                  <Button
                    type="submit"
                    disabled={!selectedDate || !form.tijdblok}
                    className={cn(
                      'w-full sm:w-auto shrink-0 h-9 rounded-[3px] bg-[#1f41ff] hover:bg-[#1a38e0] text-white',
                      'font-montserrat font-bold text-xs px-5',
                      'disabled:opacity-40',
                    )}
                  >
                    Verstuur aanvraag
                  </Button>
                </div>
              </form>
            )}
          </div>
        </div>
      </section>
    </>
  )
}
