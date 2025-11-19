import { useState } from 'react'

const RegisterBusiness = () => {
  const BASE = import.meta.env.VITE_BACKEND_URL
  const [form, setForm] = useState({ name:'', category:'', location:'', website:'', description:'', logo_url:'', eco_checks:[false,false,false,false,false] })
  const [submitted, setSubmitted] = useState(false)

  const submit = async (e) => {
    e.preventDefault()
    const res = await fetch(`${BASE}/api/businesses`, { method:'POST', headers:{'Content-Type':'application/json'}, body: JSON.stringify(form) })
    if (res.ok) setSubmitted(true)
  }

  if (submitted) return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <div className="bg-white/70 backdrop-blur border border-slate-200 rounded-2xl p-8 text-center">
        <div className="text-2xl font-semibold text-slate-900 mb-2">Thank you</div>
        <p className="text-slate-600">Your business was submitted. Well review and publish shortly.</p>
      </div>
    </div>
  )

  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <form onSubmit={submit} className="bg-white/70 backdrop-blur border border-slate-200 rounded-2xl p-6 shadow-sm space-y-5">
        <div className="text-xl font-semibold text-slate-900">Register your business</div>
        <div className="grid sm:grid-cols-2 gap-4">
          <div>
            <label className="text-sm text-slate-600">Business Name</label>
            <input className="mt-1 w-full px-3 py-2 rounded-xl border border-slate-200 bg-white" value={form.name} onChange={e=>setForm({...form, name:e.target.value})} required />
          </div>
          <div>
            <label className="text-sm text-slate-600">Category</label>
            <input className="mt-1 w-full px-3 py-2 rounded-xl border border-slate-200 bg-white" value={form.category} onChange={e=>setForm({...form, category:e.target.value})} required />
          </div>
          <div>
            <label className="text-sm text-slate-600">Location</label>
            <input className="mt-1 w-full px-3 py-2 rounded-xl border border-slate-200 bg-white" value={form.location} onChange={e=>setForm({...form, location:e.target.value})} required />
          </div>
          <div>
            <label className="text-sm text-slate-600">Website</label>
            <input className="mt-1 w-full px-3 py-2 rounded-xl border border-slate-200 bg-white" value={form.website} onChange={e=>setForm({...form, website:e.target.value})} />
          </div>
          <div className="sm:col-span-2">
            <label className="text-sm text-slate-600">Short Description</label>
            <textarea className="mt-1 w-full px-3 py-2 rounded-xl border border-slate-200 bg-white" rows={4} value={form.description} onChange={e=>setForm({...form, description:e.target.value})} />
          </div>
          <div className="sm:col-span-2">
            <label className="text-sm text-slate-600">Logo URL</label>
            <input className="mt-1 w-full px-3 py-2 rounded-xl border border-slate-200 bg-white" value={form.logo_url} onChange={e=>setForm({...form, logo_url:e.target.value})} />
          </div>
        </div>

        <div className="pt-2">
          <div className="text-sm text-slate-700 mb-2">Eco-Friendly Checklist</div>
          <div className="grid sm:grid-cols-2 gap-2">
            {['Low waste operations','Local sourcing','Renewable energy','Responsible packaging','Community programs'].map((label, i)=> (
              <label key={label} className="flex items-center gap-2 p-3 rounded-xl bg-white border border-slate-200">
                <input type="checkbox" checked={form.eco_checks[i]} onChange={e=>{
                  const arr = [...form.eco_checks]; arr[i] = e.target.checked; setForm({...form, eco_checks: arr})
                }} />
                <span className="text-slate-700">{label}</span>
              </label>
            ))}
          </div>
        </div>

        <div className="pt-2">
          <button className="w-full sm:w-auto px-5 py-2.5 rounded-full bg-emerald-600 text-white shadow-sm">Submit</button>
        </div>
      </form>
    </div>
  )
}

export default RegisterBusiness
