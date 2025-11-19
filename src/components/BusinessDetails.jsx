import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Phone, MapPin, Globe, CheckCircle2 } from 'lucide-react'

const BusinessDetails = () => {
  const { id } = useParams()
  const [biz, setBiz] = useState(null)
  const [username] = useState('Guest')
  const [userId] = useState('guest-user')
  const BASE = import.meta.env.VITE_BACKEND_URL

  useEffect(()=>{
    fetch(`${BASE}/api/businesses/${id}`).then(r=>r.json()).then(setBiz)
  }, [id])

  const markVisited = async () => {
    await fetch(`${BASE}/api/visits`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ user_id: userId, username, business_id: id })
    })
    // optimistic toast could be added
  }

  if (!biz) return <div className="max-w-6xl mx-auto px-4 py-10">Loading...</div>

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <div className="h-48 rounded-3xl bg-gradient-to-br from-emerald-100 to-amber-100" />
      <div className="mt-6 bg-white/70 backdrop-blur border border-slate-200 rounded-2xl p-6 shadow-sm">
        <div className="flex items-start justify-between gap-4">
          <div>
            <h2 className="text-2xl font-semibold text-slate-900">{biz.name}</h2>
            <div className="text-slate-600">{biz.category} • {biz.location}</div>
          </div>
          <div className="text-sm px-2 py-1 rounded-full bg-emerald-600 text-white">Eco {biz.eco_score}</div>
        </div>

        <p className="mt-4 text-slate-700">{biz.description}</p>

        <div className="mt-6 grid sm:grid-cols-3 gap-3">
          <a href={`tel:`} className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-full bg-white border border-slate-200 text-slate-800"> <Phone size={18}/> Call </a>
          <a href={`https://maps.apple.com/?q=${encodeURIComponent(biz.name+' '+biz.location)}`} className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-full bg-white border border-slate-200 text-slate-800"> <MapPin size={18}/> Maps </a>
          <a href={biz.website} target="_blank" className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-full bg-white border border-slate-200 text-slate-800"> <Globe size={18}/> Website </a>
        </div>

        <div className="mt-8">
          <div className="text-slate-900 font-medium mb-2">Eco Score highlights</div>
          <div className="grid sm:grid-cols-3 gap-2">
            {["Low waste", "Ethical sourcing", "Energy efficient"].map((t,i)=> (
              <div key={i} className="flex items-center gap-2 px-3 py-2 rounded-xl bg-emerald-50 border border-emerald-100 text-emerald-800"><CheckCircle2 size={18}/> {t}</div>
            ))}
          </div>
        </div>

        <div className="mt-8">
          <button onClick={markVisited} className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full bg-emerald-600 text-white shadow-sm hover:shadow-md transition">Mark as Visited</button>
        </div>
      </div>
    </div>
  )
}

export default BusinessDetails
