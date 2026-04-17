import type { ReactNode } from 'react'
import { cn } from '@/lib/utils'

type PageHeroProps = {
  children: ReactNode
  className?: string
  /** pb-20 for long heroes (e.g. Prijzen, FAQ) */
  size?: 'default' | 'tall'
}

export function PageHero({ children, className, size = 'default' }: PageHeroProps) {
  return (
    <section
      className={cn(
        'relative overflow-hidden bg-[#0a0e14] text-white',
        size === 'tall' ? 'pt-32 pb-20 md:pb-24' : 'pt-32 pb-16 md:pb-20',
        className
      )}
    >
      <div
        className="absolute inset-0 opacity-[0.08]"
        style={{
          backgroundImage: `repeating-linear-gradient(0deg, transparent, transparent 31px, rgba(255,255,255,0.55) 31px, rgba(255,255,255,0.55) 32px),
            repeating-linear-gradient(90deg, transparent, transparent 31px, rgba(255,255,255,0.55) 31px, rgba(255,255,255,0.55) 32px)`,
        }}
        aria-hidden
      />
      <div
        className="absolute inset-0 bg-gradient-to-b from-white/[0.035] to-transparent pointer-events-none"
        aria-hidden
      />
      <div className="relative max-w-6xl mx-auto px-6">{children}</div>
    </section>
  )
}
