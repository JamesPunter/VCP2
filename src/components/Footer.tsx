import { useLanguage } from '@/i18n/language-context'

const socialBtn =
  'flex size-10 shrink-0 items-center justify-center rounded-full bg-neutral-800 text-white shadow-sm ring-1 ring-white/5 transition-colors hover:bg-neutral-700 hover:ring-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/30'

const linkClass =
  'text-neutral-300 transition-colors hover:text-white focus-visible:outline-none focus-visible:underline'

export default function Footer() {
  const { t } = useLanguage()

  return (
    <footer className="border-t border-white/[0.06] bg-neutral-950 text-white">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-6 py-10 sm:flex-row sm:items-center sm:justify-between sm:gap-12 sm:py-12">
        <div className="min-w-0 space-y-2">
          <p className="text-[15px] font-medium leading-snug tracking-tight text-white sm:text-base">
            {t.footer.addressLine}
          </p>
          <p className="flex flex-wrap items-center gap-x-2 text-[15px] leading-snug sm:text-base">
            <a href="tel:0621587273" className={linkClass}>
              06 2158 7273
            </a>
            <span className="select-none text-neutral-600" aria-hidden>
              ·
            </span>
            <a href="tel:0206253513" className={linkClass}>
              020 625 35 13
            </a>
          </p>
          <p className="text-[15px] leading-snug sm:text-base">
            <a href="mailto:info@studiolegarage.nl" className={linkClass}>
              info@studiolegarage.nl
            </a>
          </p>
          <p className="pt-1 text-xs leading-relaxed text-neutral-500 sm:text-[13px]">
            {t.footer.copyright(new Date().getFullYear())}
          </p>
        </div>

        <div className="flex shrink-0 items-center gap-3 sm:pl-4">
          <a
            href="https://facebook.com/studiolegarage"
            target="_blank"
            rel="noreferrer"
            className={socialBtn}
            aria-label="Facebook"
          >
            <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
              <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
            </svg>
          </a>
          <a
            href="https://linkedin.com/company/studiolegarage"
            target="_blank"
            rel="noreferrer"
            className={socialBtn}
            aria-label="LinkedIn"
          >
            <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z" />
              <circle cx="4" cy="4" r="2" />
            </svg>
          </a>
          <a
            href="https://instagram.com/studiolegarage"
            target="_blank"
            rel="noreferrer"
            className={socialBtn}
            aria-label="Instagram"
          >
            <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" aria-hidden>
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
              <circle cx="12" cy="12" r="4" />
              <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
            </svg>
          </a>
        </div>
      </div>
    </footer>
  )
}
