import * as React from 'react'
import { format, setMonth, setYear, startOfMonth } from 'date-fns'
import { nl } from 'date-fns/locale'
import type { CalendarMonth } from 'react-day-picker'
import { useDayPicker } from 'react-day-picker'

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { cn } from '@/lib/utils'

function clampToNavRange(date: Date, start?: Date, end?: Date): Date {
  let d = startOfMonth(date)
  if (start) {
    const sm = startOfMonth(start)
    if (d < sm) d = sm
  }
  if (end) {
    const em = startOfMonth(end)
    if (d > em) d = em
  }
  return d
}

export type BookingMonthCaptionProps = {
  calendarMonth: CalendarMonth
  displayIndex: number
} & React.HTMLAttributes<HTMLDivElement>

/**
 * Month/year navigation using shadcn Select instead of DayPicker dropdowns
 * (avoids overlap/z-index issues inside popovers).
 */
export function BookingMonthCaption({
  calendarMonth,
  className,
  style,
  children: _children,
  ...divProps
}: BookingMonthCaptionProps) {
  const { goToMonth, dayPickerProps } = useDayPicker()
  const { startMonth, endMonth } = dayPickerProps

  const displayDate = calendarMonth.date
  const month = displayDate.getMonth()
  const year = displayDate.getFullYear()

  const fromYear = startMonth ? startMonth.getFullYear() : year - 5
  const toYear = endMonth ? endMonth.getFullYear() : year + 5

  const years: number[] = []
  for (let y = fromYear; y <= toYear; y++) {
    years.push(y)
  }

  function handleMonthChange(value: string | null) {
    if (value == null) return
    const next = clampToNavRange(
      setMonth(startOfMonth(displayDate), Number.parseInt(value, 10)),
      startMonth,
      endMonth,
    )
    goToMonth(next)
  }

  function handleYearChange(value: string | null) {
    if (value == null) return
    const next = clampToNavRange(
      setYear(startOfMonth(displayDate), Number.parseInt(value, 10)),
      startMonth,
      endMonth,
    )
    goToMonth(next)
  }

  return (
    <div
      {...divProps}
      className={cn(
        'relative z-20 flex w-full flex-wrap items-center justify-center gap-2 bg-white px-1 py-2 opacity-100',
        className,
      )}
      style={style}
    >
      <Select value={String(month)} onValueChange={handleMonthChange}>
        <SelectTrigger
          size="sm"
          className="h-8 min-w-[8.5rem] flex-1 border-[#dbdbdb] bg-white text-xs opacity-100 shadow-none sm:min-w-[10rem] sm:text-sm"
          aria-label="Maand"
        >
          <SelectValue />
        </SelectTrigger>
        <SelectContent
          alignItemWithTrigger={false}
          className="z-[400] max-h-52 w-[min(100%,12rem)] border border-[#dbdbdb] bg-white opacity-100 shadow-md"
          side="bottom"
          align="start"
          sideOffset={4}
        >
          {Array.from({ length: 12 }, (_, i) => (
            <SelectItem key={i} value={String(i)}>
              {format(new Date(2000, i, 1), 'LLLL', { locale: nl })}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>

      <Select value={String(year)} onValueChange={handleYearChange}>
        <SelectTrigger
          size="sm"
          className="h-8 w-[5.5rem] shrink-0 border-[#dbdbdb] bg-white text-xs opacity-100 shadow-none sm:text-sm"
          aria-label="Jaar"
        >
          <SelectValue />
        </SelectTrigger>
        <SelectContent
          alignItemWithTrigger={false}
          className="z-[400] max-h-52 w-24 border border-[#dbdbdb] bg-white opacity-100 shadow-md"
          side="bottom"
          align="end"
          sideOffset={4}
        >
          {years.map((y) => (
            <SelectItem key={y} value={String(y)}>
              {String(y)}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  )
}
