
import { Link, useParams } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'
import { NewsArt } from '../components/Art'
import { news } from '../data/news'

export default function NewsDetail() {
  const { id } = useParams()
  const a = news.find((n) => String(n.id) === id)

  if (!a) {
    return (
      <div className="mx-auto max-w-xl px-4 py-24 text-center">
        <h1 className="text-3xl font-bold">
          Article introuvable
        </h1>

        <p className="mt-3 text-slate-600">
          Aucun article ne correspond à votre recherche.
        </p>

        <Link
          to="/actualites"
          className="btn-outline mt-6 inline-flex items-center gap-2"
        >
          <ArrowLeft className="h-4 w-4" />
          Retour aux actualités
        </Link>

        <p className="mt-8 text-xs text-slate-500">
          Site  officiel
        </p>
      </div>
    )
  }

  return (
    <article className="mx-auto max-w-3xl px-4 py-12">
      <Link
        to="/actualites"
        className="btn-outline mb-6 inline-flex items-center gap-2"
      >
        <ArrowLeft className="h-4 w-4" />
        Retour aux actualités
      </Link>

      <p className="text-sm text-slate-500">
        <span className="font-semibold text-inst-600">
          {a.category}
        </span>
        {' — '}
        {a.date}
      </p>

      <h1 className="mt-2 text-3xl font-bold leading-tight">
        {a.title}
      </h1>

      <div className="mt-6 h-64 overflow-hidden rounded-md">
        <NewsArt
          seed={a.seed}
          className="h-full w-full"
        />
      </div>

      <div className="mt-6 space-y-4 text-lg leading-relaxed">
        {a.body.map((t, i) => (
          <p key={i}>{t}</p>
        ))}
      </div>

      <div className="mt-8 border-t border-slate-200 pt-6">
        <p className="text-xs text-slate-500">
          Site  officiel
        </p>
      </div>
    </article>
  )
}
