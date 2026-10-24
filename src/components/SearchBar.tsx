import { Search, X } from 'lucide-react'

export default function SearchBar({ value, onChange }: { value: string; onChange: (v: string) => void }) {
  return (
    <div className="relative">
      <Search className="pointer-events-none absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400" />
      <input type="search" className="input pl-10 pr-10 text-base" placeholder="Rechercher par nom, prénom, nationalité ou pays" value={value} onChange={(e) => onChange(e.target.value)} aria-label="Rechercher une notice" />
      {value && (
        <button type="button" onClick={() => onChange('')} className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-700" aria-label="Effacer la recherche"><X className="h-5 w-5" /></button>
      )}
    </div>
  )
}
