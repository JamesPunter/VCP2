import { Link } from 'react-router-dom'
import { Separator } from '@/components/ui/separator'

export default function Footer() {
  return (
    <footer className="bg-foreground text-white">
      <div className="max-w-6xl mx-auto px-6 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-8 h-8 rounded-lg bg-white/20 flex items-center justify-center">
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <rect x="1" y="6" width="12" height="7" rx="1" fill="white" opacity="0.9"/>
                  <path d="M1 6L7 1L13 6" stroke="white" strokeWidth="1.5" fill="none"/>
                </svg>
              </div>
              <div className="leading-tight">
                <span className="block text-sm font-bold text-white tracking-tight">Studio Le Garage</span>
                <span className="block text-[10px] text-white/50 uppercase tracking-widest">Amsterdam-Oost</span>
              </div>
            </div>
            <p className="text-white/60 text-sm leading-relaxed max-w-xs">
              Een industriële loft van ruim 60m² met 5 meter plafondhoogte — ideaal voor fotografie, film, podcasts, workshops en presentaties in Amsterdam-Oost.
            </p>
            <div className="flex gap-3 mt-5">
              <a href="https://facebook.com/studiolegarage" target="_blank" rel="noreferrer"
                className="w-9 h-9 rounded-lg bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors" aria-label="Facebook">
                <svg width="16" height="16" fill="white" viewBox="0 0 24 24">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
                </svg>
              </a>
              <a href="https://instagram.com/studiolegarage" target="_blank" rel="noreferrer"
                className="w-9 h-9 rounded-lg bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors" aria-label="Instagram">
                <svg width="16" height="16" fill="none" stroke="white" strokeWidth="2" viewBox="0 0 24 24">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                  <circle cx="12" cy="12" r="4"/>
                  <circle cx="17.5" cy="6.5" r="1" fill="white" stroke="none"/>
                </svg>
              </a>
              <a href="https://linkedin.com/company/studiolegarage" target="_blank" rel="noreferrer"
                className="w-9 h-9 rounded-lg bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors" aria-label="LinkedIn">
                <svg width="16" height="16" fill="white" viewBox="0 0 24 24">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z"/>
                  <circle cx="4" cy="4" r="2"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-4">Navigatie</h4>
            <ul className="space-y-2.5">
              {[
                { label: 'Studio', to: '/' },
                { label: 'Prijzen', to: '/prijzen' },
                { label: 'Reserveren', to: '/reserveren' },
                { label: 'Locatie', to: '/locatie' },
                { label: 'Contact', to: '/contact' },
                { label: 'FAQ', to: '/faq' },
              ].map(({ label, to }) => (
                <li key={to}>
                  <Link to={to} className="text-white/60 hover:text-white text-sm transition-colors">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-4">Contact</h4>
            <ul className="space-y-2.5 text-sm text-white/60">
              <li>
                <a href="tel:0621587273" className="hover:text-white transition-colors">06 2158 7273</a>
              </li>
              <li>
                <a href="tel:0206253513" className="hover:text-white transition-colors">020 625 35 13</a>
              </li>
              <li>
                <a href="mailto:info@studiolegarage.nl" className="hover:text-white transition-colors">
                  info@studiolegarage.nl
                </a>
              </li>
              <li className="leading-relaxed pt-1">
                Veemarkt 31<br />
                1019 DA Amsterdam
              </li>
              <li className="pt-1 text-white/40 text-xs">Bereikbaar 07:30 – 23:00</li>
            </ul>
          </div>
        </div>

        <Separator className="bg-white/10 mb-6" />

        <div className="flex flex-col md:flex-row items-center justify-between gap-3 text-white/40 text-xs">
          <p>© {new Date().getFullYear()} Studio Le Garage Amsterdam. K.v.K. 33252574</p>
          <p>Veemarkt 31, 1019 DA Amsterdam-Oost</p>
        </div>
      </div>
    </footer>
  )
}
