import { motion } from 'framer-motion'

const FeaturedCarousel = ({ businesses = [] }) => {
  return (
    <section className="max-w-6xl mx-auto px-4 pb-10">
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {businesses.map((b, i) => (
          <motion.div key={b.id || i} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.05 }} className="bg-white/70 backdrop-blur border border-slate-200 rounded-2xl overflow-hidden shadow-sm">
            <div className="h-32 bg-gradient-to-br from-emerald-100 to-amber-100" />
            <div className="p-4">
              <div className="flex items-center justify-between">
                <h3 className="font-semibold text-slate-900">{b.name}</h3>
                <div className="text-sm px-2 py-1 rounded-full bg-emerald-600 text-white">Eco {b.eco_score || 80}</div>
              </div>
              <div className="text-sm text-slate-600 mt-1">{b.category} • {b.location}</div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

export default FeaturedCarousel
