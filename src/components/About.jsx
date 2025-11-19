const About = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <div className="space-y-8">
        <section className="bg-white/70 backdrop-blur border border-slate-200 rounded-2xl p-6 shadow-sm">
          <h2 className="text-xl font-semibold text-slate-900 mb-2">What is Terra Tranquil</h2>
          <p className="text-slate-700">A calm platform that connects you with eco-friendly businesses and helps you build meaningful, measurable impact.</p>
        </section>
        <section className="bg-white/70 backdrop-blur border border-slate-200 rounded-2xl p-6 shadow-sm">
          <h2 className="text-xl font-semibold text-slate-900 mb-2">Our mission</h2>
          <p className="text-slate-700">Make sustainable choices effortless. Reward real-world actions. Grow a thriving, local, low-impact economy.</p>
        </section>
        <section className="bg-white/70 backdrop-blur border border-slate-200 rounded-2xl p-6 shadow-sm">
          <h2 className="text-xl font-semibold text-slate-900 mb-2">How it works</h2>
          <ul className="text-slate-700 list-disc ml-5 space-y-1">
            <li>Browse the directory and pick a place.</li>
            <li>Visit in person and tap “Mark as Visited”.</li>
            <li>Watch your points and level rise instantly.</li>
          </ul>
        </section>
        <section className="bg-white/70 backdrop-blur border border-slate-200 rounded-2xl p-6 shadow-sm">
          <h2 className="text-xl font-semibold text-slate-900 mb-2">Benefits</h2>
          <ul className="text-slate-700 list-disc ml-5 space-y-1">
            <li>Users: discover better choices, track progress, feel good.</li>
            <li>Businesses: reach conscious customers, share your practices, grow loyalty.</li>
          </ul>
        </section>
      </div>
    </div>
  )
}

export default About
