import { useEffect, useState } from 'react'

const Bar = ({ label, value, max = 100, color = 'emerald' }) => {
  const pct = Math.min(100, Math.round((value / max) * 100))
  return (
    <div>
      <div className="flex justify-between text-sm text-slate-700 mb-1"><span>{label}</span><span>{value}</span></div>
      <div className="h-3 rounded-full bg-slate-100 overflow-hidden">
        <div className={`h-full rounded-full bg-${color}-600 transition-all`} style={{ width: pct + '%' }} />
      </div>
    </div>
  )
}

const Profile = () => {
  const [username] = useState('Guest')
  const [userId] = useState('guest-user')
  const [impact, setImpact] = useState({ visits: 0, eco_points: 0, community_impact: 0, terra_level: 0 })
  const [visits, setVisits] = useState([])
  const BASE = import.meta.env.VITE_BACKEND_URL

  const load = async () => {
    const imp = await fetch(`${BASE}/api/users/${userId}/impact?username=${username}`).then(r=>r.json())
    const v = await fetch(`${BASE}/api/users/${userId}/visits`).then(r=>r.json())
    setImpact(imp)
    setVisits(v)
  }
  useEffect(()=>{ load() }, [])

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <div className="bg-white/70 backdrop-blur border border-slate-200 rounded-2xl p-6 shadow-sm">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-emerald-200 to-amber-200"/>
            <div>
              <div className="font-semibold text-slate-900">{username}</div>
              <div className="text-sm text-slate-600">Calm progress, real impact</div>
            </div>
          </div>
          <button onClick={load} className="px-3 py-2 rounded-full bg-white border border-slate-200 text-slate-800">Refresh</button>
        </div>

        <div className="mt-6 grid sm:grid-cols-3 gap-3">
          <div className="p-4 rounded-xl bg-white border border-slate-200"><div className="text-sm text-slate-500">Terra Points</div><div className="text-2xl font-semibold text-slate-900">{impact.eco_points}</div></div>
          <div className="p-4 rounded-xl bg-white border border-slate-200"><div className="text-sm text-slate-500">Visits Logged</div><div className="text-2xl font-semibold text-slate-900">{impact.visits}</div></div>
          <div className="p-4 rounded-xl bg-white border border-slate-200"><div className="text-sm text-slate-500">Businesses Supported</div><div className="text-2xl font-semibold text-slate-900">{Math.min(impact.visits, visits.length)}</div></div>
        </div>

        <div className="mt-8 space-y-4">
          <Bar label="Total Visits" value={impact.visits} max={50} />
          <Bar label="Eco Points" value={impact.eco_points} max={500} />
          <Bar label="Community Impact" value={impact.community_impact} max={100} color="amber" />
          <Bar label="Terra Level" value={impact.terra_level} max={3} />
        </div>

        <div className="mt-8">
          <div className="font-medium text-slate-900 mb-3">My Visits</div>
          <div className="grid sm:grid-cols-2 gap-3">
            {visits.map(v => (
              <div key={v.id} className="p-4 rounded-xl bg-white border border-slate-200">
                <div className="font-medium text-slate-900">{v.business_name}</div>
                <div className="text-sm text-slate-600">{v.category} • {v.location}</div>
              </div>
            ))}
            {visits.length === 0 && (
              <div className="text-slate-600">No visits yet. Tap “Mark as Visited” on a business to get started.</div>
            )}
          </div>
        </div>

        <div className="mt-8">
          <div className="font-medium text-slate-900 mb-2">Badges</div>
          <div className="flex gap-2">
            {['Starter','Supporter','Trailblazer'].map((b,i)=> (
              <div key={b} className={`px-3 py-1.5 rounded-full border ${impact.terra_level>=i? 'bg-emerald-600 text-white border-emerald-600':'bg-white text-slate-700 border-slate-200'}`}>{b}</div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Profile
