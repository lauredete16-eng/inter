import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import Logo from './Logo'

const links = [
  { to: '/', label: 'Accueil' },
  { to: '/a-propos', label: 'À propos' },
  { to: '/missions', label: 'Nos missions' },
  { to: '/notices', label: 'Notices rouges' },
  { to: '/actualites', label: 'Actualités' },
  { to: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const cls = ({ isActive }: { isActive: boolean }) =>
    `block border-b-2 px-3 py-2 text-sm font-medium transition ${isActive ? 'border-notice-600 text-navy-900' : 'border-transparent text-slate-600 hover:text-inst-600'}`
  return (
    <header className="sticky top-0 z-30 border-b border-slate-200 bg-white/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <Link to="/" aria-label="Accueil Meridian Security Portal"><Logo /></Link>
        <nav className="hidden items-center gap-1 lg:flex" aria-label="Navigation principale">
          {links.map((l) => <NavLink key={l.to} to={l.to} end={l.to === '/'} className={cls}>{l.label}</NavLink>)}
        </nav>
        <button className="rounded p-2 text-navy-900 lg:hidden" onClick={() => setOpen(!open)} aria-expanded={open} aria-label="Menu">
          {open ? <X /> : <Menu />}
        </button>
      </div>
      {open && (
        <nav className="border-t border-slate-200 bg-white px-4 py-2 lg:hidden" aria-label="Navigation mobile">
          {links.map((l) => <NavLink key={l.to} to={l.to} end={l.to === '/'} className={cls} onClick={() => setOpen(false)}>{l.label}</NavLink>)}
        </nav>
      )}
    </header>
  )
}
