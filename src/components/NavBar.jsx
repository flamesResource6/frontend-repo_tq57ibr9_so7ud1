import { useState } from 'react'
import { Menu, Leaf, User, Search } from 'lucide-react'
import { Link } from 'react-router-dom'

const NavBar = () => {
  const [open, setOpen] = useState(false)

  const navLink = (
    <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 text-slate-700">
      <Link to="/" className="px-3 py-2 rounded-full hover:bg-white/70 transition">Home</Link>
      <Link to="/directory" className="px-3 py-2 rounded-full hover:bg-white/70 transition">Directory</Link>
      <Link to="/register" className="px-3 py-2 rounded-full hover:bg-white/70 transition">Register Business</Link>
      <Link to="/about" className="px-3 py-2 rounded-full hover:bg-white/70 transition">About</Link>
    </div>
  )

  return (
    <header className="sticky top-0 z-40">
      <div className="backdrop-blur-xl bg-white/60 border-b border-slate-200/60">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 text-slate-800">
            <div className="p-2 rounded-xl bg-gradient-to-br from-emerald-200 to-emerald-100 shadow-sm">
              <Leaf size={18} className="text-emerald-700" />
            </div>
            <span className="font-semibold tracking-tight">Terra Tranquil</span>
          </Link>

          <div className="hidden sm:block">{navLink}</div>

          <div className="flex items-center gap-2">
            <Link to="/profile" className="p-2 rounded-full hover:bg-white/70 transition" aria-label="Profile">
              <User size={20} className="text-slate-700" />
            </Link>
            <button className="sm:hidden p-2 rounded-full hover:bg-white/70" onClick={() => setOpen(!open)} aria-label="Menu">
              <Menu size={20} className="text-slate-700" />
            </button>
          </div>
        </div>

        {open && (
          <div className="sm:hidden px-4 pb-4 animate-in">
            {navLink}
          </div>
        )}
      </div>
    </header>
  )
}

export default NavBar
