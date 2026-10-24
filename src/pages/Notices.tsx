
import { useEffect, useMemo, useState } from 'react'
import {
  ChevronLeft,
  ChevronRight,
  RotateCcw,
} from 'lucide-react'
import SearchBar from '../components/SearchBar'
import ProfileCard from '../components/ProfileCard'
import { categories, profiles } from '../data/profiles'

const PAGE_SIZE = 6

const norm = (s: string) =>
  s.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase()

const uniq = (a: string[]) =>
  Array.from(new Set(a)).sort((x, y) => x.localeCompare(y, 'fr'))

export default function Notices() {
  const [loading, setLoading] = useState(true)
  const [query, setQuery] = useState('')
  const [nationality, setNationality] = useState('')
  const [country, setCountry] = useState('')
  const [category, setCategory] = useState('')
  const [sex, setSex] = useState('')
  const [page, setPage] = useState(1)

  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 350)
    return () => clearTimeout(t)
  }, [])

  useEffect(() => {
    setPage(1)
  }, [query, nationality, country, category, sex])

  const results = useMemo(() => {
    const q = norm(query.trim())

    return profiles.filter(
      (p) =>
        (!q ||
          norm(
            `${p.firstName} ${p.lastName} ${p.nationality} ${p.country}`
          ).includes(q)) &&
        (!nationality || p.nationality === nationality) &&
        (!country || p.country === country) &&
        (!category || p.category === category) &&
        (!sex || p.sex === sex)
    )
  }, [query, nationality, country, category, sex])

  const active = [
    query,
    nationality,
    country,
    category,
    sex,
  ].filter(Boolean).length

  const pages = Math.max(1, Math.ceil(results.length / PAGE_SIZE))

  const shown = results.slice(
    (page - 1) * PAGE_SIZE,
    page * PAGE_SIZE
  )

  const reset = () => {
    setQuery('')
    setNationality('')
    setCountry('')
    setCategory('')
    setSex('')
  }

  const Select = ({
    label,
    value,
    set,
    options,
  }: {
    label: string
    value: string
    set: (v: string) => void
    options: string[]
  }) => (
    <label className="block text-xs font-medium text-slate-600">
      {label}
      <select
        className="input mt-1"
        value={value}
        onChange={(e) => set(e.target.value)}
      >
        <option value="">Tous</option>
        {options.map((o) => (
          <option key={o} value={o}>
            {o}
          </option>
        ))}
      </select>
    </label>
  )

  return (
    <>
      <section className="bg-navy-900 py-12 text-white">
        <div className="mx-auto max-w-6xl px-4">
          <h1 className="font-serif text-3xl font-bold text-white md:text-4xl">
            Notices rouges
          </h1>

          <p className="mt-3 max-w-3xl leading-relaxed text-white/80">
            Une notice rouge est une demande adressée aux services
            de police du monde entier afin de localiser une personne
            recherchée et, si la législation applicable le permet,
            de procéder à son arrestation provisoire.
          </p>

          <p className="mt-4 text-xs text-white/60">
            Site officiel
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-6xl px-4 py-10">
        <form
          onSubmit={(e) => e.preventDefault()}
          className="card p-5"
        >
          <SearchBar value={query} onChange={setQuery} />

          <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <Select
              label="Nationalité"
              value={nationality}
              set={setNationality}
              options={uniq(profiles.map((p) => p.nationality))}
            />

            <Select
              label="Pays"
              value={country}
              set={setCountry}
              options={uniq(profiles.map((p) => p.country))}
            />

            <Select
              label="Catégorie"
              value={category}
              set={setCategory}
              options={categories}
            />

            <label className="block text-xs font-medium text-slate-600">
              Sexe
              <select
                className="input mt-1"
                value={sex}
                onChange={(e) => setSex(e.target.value)}
              >
                <option value="">Tous</option>
                <option value="F">Féminin</option>
                <option value="M">Masculin</option>
              </select>
            </label>
          </div>

          <div className="mt-4 flex flex-wrap items-center gap-3">
            <button type="submit" className="btn-primary">
              Rechercher
            </button>

            <button
              type="button"
              onClick={reset}
              className="btn-outline"
            >
              <RotateCcw className="h-4 w-4" />
              Réinitialiser les filtres
            </button>

            {active > 0 && (
              <span className="text-sm text-slate-500">
                {active} filtre{active > 1 ? 's' : ''} actif
                {active > 1 ? 's' : ''}
              </span>
            )}
          </div>
        </form>

        <p
          className="mt-6 text-sm text-slate-600"
          aria-live="polite"
        >
          {loading
            ? 'Chargement…'
            : `${results.length} résultat${results.length > 1 ? 's' : ''}`}
        </p>

        {loading ? (
          <div className="mt-4 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {Array.from({ length: 3 }).map((_, i) => (
              <div
                key={i}
                className="card h-80 animate-pulse bg-slate-100"
              />
            ))}
          </div>
        ) : shown.length === 0 ? (
          <div className="card mt-4 p-10 text-center">
            <p className="font-semibold text-navy-900">
              Aucun profil ne correspond à ces critères.
            </p>

            <p className="mt-1 text-sm text-slate-600">
              Modifiez votre recherche ou réinitialisez les filtres.
            </p>

            <button
              type="button"
              onClick={reset}
              className="btn-primary mt-5"
            >
              Réinitialiser les filtres
            </button>
          </div>
        ) : (
          <div className="mt-4 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {shown.map((p) => (
              <ProfileCard key={p.id} profile={p} />
            ))}
          </div>
        )}

        {!loading && pages > 1 && (
          <nav
            className="mt-8 flex items-center justify-center gap-4"
            aria-label="Pagination"
          >
            <button
              type="button"
              className="btn-outline px-3"
              disabled={page === 1}
              onClick={() => setPage(page - 1)}
              aria-label="Page précédente"
            >
              <ChevronLeft className="h-4 w-4" />
            </button>

            <span className="text-sm">
              Page {page} sur {pages}
            </span>

            <button
              type="button"
              className="btn-outline px-3"
              disabled={page === pages}
              onClick={() => setPage(page + 1)}
              aria-label="Page suivante"
            >
              <ChevronRight className="h-4 w-4" />
            </button>
          </nav>
        )}

       
      </div>
    </>
  )
}
