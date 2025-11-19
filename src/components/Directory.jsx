import { useEffect, useState } from 'react'
import { Search } from 'lucide-react'
import { Link } from 'react-router-dom'

const CATEGORIES = ['All','Cafés','Local Shops','Groceries','Wellness','Farms']

const Directory = () => {
  const [query, setQuery] = useState('')
  const [category, setCategory] = useState('All')
  const [items, setItems] = useState([])

  const BASE = import.meta.env.VITE_BACKEND_URL

  useEffect(() => {
    const url = new URL(BASE + '/api/businesses')
    if (query) url.searchParams.set('search', query)
    if (category) url.searchParams.set('category', category)
    fetch(url.toString()).then(r=>r.json()).then(setItems).catch(()=>setItems([]))
  }, [query, category])

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <div className="bg-white/70 backdrop-blur border border-slate-200 rounded-2xl p-4 shadow-sm">
        <div className="flex flex-col sm:flex-row gap-3 sm:items-center">
          <div className="flex items-center gap-2 flex-1 px-3 py-2 rounded-xl border border-slate-200 bg-white">
            <Search size={18} className="text-slate-500"/>
            <input value={query} onChange={e=>setQuery(e.target.value)} placeholder="Search businesses" className="w-full outline-none text-slate-800 placeholder-slate-400 bg-transparent"/>
          </div>
          <div className="flex gap-2 overflow-auto">
            {CATEGORIES.map(c=> (
              <button key={c} onClick={()=>setCategory(c)} className={`px-3 py-2 rounded-full border ${category===c? 'bg-emerald-600 text-white border-emerald-600':'bg-white text-slate-700 border-slate-200'} transition whitespace-nowrap`}>{c}</button>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.map(b => (
          <Link key={b.id} to={`/business/${b.id}`} className="group bg-white/70 backdrop-blur border border-slate-200 rounded-2xl p-4 shadow-sm hover:shadow-md transition block">
            <div className="h-32 rounded-xl bg-gradient-to-br from-emerald-100 to-amber-100 mb-4"/>
            <div className="flex items-center justify-between">
              <div>
                <div className="font-semibold text-slate-900">{b.name}</div>
                <div className="text-sm text-slate-600">{b.category} • {b.location}</div>
              </div>
              <div className="text-sm px-2 py-1 rounded-full bg-emerald-600 text-white">Eco {b.eco_score}</div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default Directory
