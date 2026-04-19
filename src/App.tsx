import { useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Home from '@/pages/Home'
import Prijzen from '@/pages/Prijzen'
import Reserveren from '@/pages/Reserveren'
import Locatie from '@/pages/Locatie'
import Contact from '@/pages/Contact'
import FAQ from '@/pages/FAQ'

function ScrollToTop() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return null
}

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <ScrollToTop />
      <Navbar />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/prijzen" element={<Prijzen />} />
          <Route path="/reserveren" element={<Reserveren />} />
          <Route path="/locatie" element={<Locatie />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/faq" element={<FAQ />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App
