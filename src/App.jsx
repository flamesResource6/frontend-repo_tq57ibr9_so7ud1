import { Routes, Route, Link } from 'react-router-dom'
import NavBar from './components/NavBar'
import Footer from './components/Footer'
import Hero from './components/Hero'
import FeaturedCarousel from './components/FeaturedCarousel'
import Directory from './components/Directory'
import BusinessDetails from './components/BusinessDetails'
import Profile from './components/Profile'
import RegisterBusiness from './components/RegisterBusiness'
import About from './components/About'
import { useEffect, useState } from 'react'

const App = () => {
  const [featured, setFeatured] = useState([])
  const BASE = import.meta.env.VITE_BACKEND_URL
  useEffect(()=>{ fetch(`${BASE}/api/businesses`).then(r=>r.json()).then(d=>setFeatured(d.slice(0,3))).catch(()=>setFeatured([])) }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-emerald-50 to-amber-50">
      <NavBar />
      <Routes>
        <Route path="/" element={<>
          <Hero />
          <FeaturedCarousel businesses={featured} />
        </>} />
        <Route path="/directory" element={<Directory />} />
        <Route path="/business/:id" element={<BusinessDetails />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/register" element={<RegisterBusiness />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
