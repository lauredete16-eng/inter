import { Link } from 'react-router-dom'
import { NewsArt } from './Art'
import type { Article } from '../data/news'

export default function NewsCard({ article }: { article: Article }) {
  return (
    <article className="card flex flex-col overflow-hidden transition duration-200 hover:shadow-md">
      <div className="h-40"><NewsArt seed={article.seed} className="h-full w-full" /></div>
      <div className="flex flex-1 flex-col p-5">
        <p className="text-xs text-slate-500"><span className="font-semibold text-inst-600">{article.category}</span> — {article.date}</p>
        <h3 className="mt-2 font-sans text-base font-semibold leading-snug">{article.title}</h3>
        <p className="mt-2 flex-1 text-sm text-slate-600">{article.summary}</p>
        <Link to={`/actualites/${article.id}`} className="mt-4 text-sm font-semibold text-inst-600 hover:underline">Lire l’article</Link>
      </div>
    </article>
  )
}
