import { useMemo, useState } from 'react'
import SectionTitle from '../components/SectionTitle'
import NewsCard from '../components/NewsCard'
import { news } from '../data/news'

export default function News() {
  const [cat, setCat] = useState('Toutes')

  const cats = [
    'Toutes',
    ...Array.from(new Set(news.map((n) => n.category)))
  ]

  const list = useMemo(
    () =>
      cat === 'Toutes'
        ? news
        : news.filter((n) => n.category === cat),
    [cat]
  )

  return (
    <div className="mx-auto max-w-6xl px-4 py-14">
      <SectionTitle
        title="Actualités"
        text="Suivez les évolutions de la coopération policière internationale, les initiatives de prévention et les actions menées contre la criminalité transnationale."
      />

      <div className="mb-6 flex flex-wrap gap-2">
        {cats.map((c) => (
          <button
            key={c}
            type="button"
            onClick={() => setCat(c)}
            aria-pressed={cat === c}
            className={`rounded-full border px-4 py-1.5 text-sm transition ${
              cat === c
                ? 'border-inst-600 bg-inst-600 text-white'
                : 'border-slate-300 bg-white hover:border-inst-600'
            }`}
          >
            {c}
          </button>
        ))}
      </div>

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {list.map((a) => (
          <NewsCard key={a.id} article={a} />
        ))}
      </div>

      {list.length === 0 && (
        <p className="py-10 text-center text-slate-600">
          Aucune actualité n’est disponible dans cette catégorie.
        </p>
      )}
    </div>
  )
}