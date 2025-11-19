import { motion } from 'framer-motion'
import { Search, MapPin, PlusCircle } from 'lucide-react'
import { Link } from 'react-router-dom'

const Hero = () => {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-white via-emerald-50 to-amber-50" />
      <div className="relative max-w-6xl mx-auto px-4 pt-20 pb-16">
        <motion.h1
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl sm:text-5xl font-semibold tracking-tight text-slate-900 mb-4"
        >
          Calm, clean, sustainable.
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.1 }}
          className="text-slate-600 text-lg max-w-2xl"
        >
          Discover sustainable businesses near you and track your eco impact in real time.
        </motion.p>

        <div className="mt-8 flex flex-wrap gap-3">
          <Link to="/directory" className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-600 text-white shadow-sm hover:shadow transition">
            <Search size={18}/> Find Businesses
          </Link>
          <Link to="/profile" className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white text-slate-800 border border-slate-200 hover:bg-slate-50 transition">
            <PlusCircle size={18}/> Log a Visit
          </Link>
          <Link to="/profile" className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white text-slate-800 border border-slate-200 hover:bg-slate-50 transition">
            <MapPin size={18}/> View Impact
          </Link>
        </div>
      </div>
    </section>
  )
}

export default Hero
