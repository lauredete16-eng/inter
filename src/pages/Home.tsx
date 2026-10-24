import { Link } from 'react-router-dom'
import {
  Handshake,
  Share2,
  Search,
  ShieldAlert,
  GraduationCap,
  Scale
} from 'lucide-react'
import Hero from '../components/Hero'
import SectionTitle from '../components/SectionTitle'
import ProfileCard from '../components/ProfileCard'
import NewsCard from '../components/NewsCard'
import { missions, stats } from '../data/missions'
import { profiles } from '../data/profiles'
import { news } from '../data/news'

export const icons = {
  handshake: Handshake,
  share: Share2,
  search: Search,
  shield: ShieldAlert,
  graduation: GraduationCap,
  scale: Scale
}

export default function Home() {
  return (
    <>
      <Hero />

      <section className="mx-auto max-w-6xl px-4 py-16">
        <SectionTitle
          title="Les enjeux de la coopération internationale"
          text="Découvrez les missions, les mécanismes et les principes qui encadrent la coopération policière entre les pays."
        />

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {missions.slice(0, 4).map((m) => {
            const Icon = icons[m.icon]

            return (
              <Link
                to="/missions"
                key={m.id}
                className="card p-5 transition duration-200 hover:border-inst-600 hover:shadow-md"
              >
                <Icon className="h-7 w-7 text-inst-600" />

                <h3 className="mt-4 font-sans text-base font-semibold">
                  {m.title}
                </h3>

                <p className="mt-2 text-sm text-slate-600">
                  {m.short}
                </p>
              </Link>
            )
          })}
        </div>
      </section>

      <section className="bg-navy-900 py-14 text-white">
        <div className="mx-auto max-w-6xl px-4">
          <div className="grid gap-8 text-center sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((s) => (
              <div key={s.label}>
                <p className="font-serif text-4xl font-bold">
                  {s.value}
                </p>

                <p className="mt-1 text-sm text-white/70">
                  {s.label}
                </p>
              </div>
            ))}
          </div>

          <p className="mt-8 text-center text-xs text-white/60">
            Les données chiffrées doivent être consultées dans leur source
            officielle et interprétées selon leur date de publication.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16">
        <SectionTitle
          title="Notices et informations de recherche"
          text="Consultez les informations relatives aux personnes recherchées à partir des publications officielles des autorités compétentes."
        />

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {profiles.slice(0, 8).map((p) => (
            <ProfileCard key={p.id} profile={p} />
          ))}
        </div>

        <Link to="/notices" className="btn-primary mt-8">
          Consulter les notices
        </Link>
      </section>

      <section className="bg-white py-16">
        <div className="mx-auto max-w-6xl px-4">
          <SectionTitle
            title="Actualités et coopération internationale"
            text="Retrouvez les informations, les évolutions et les initiatives liées à la lutte contre la criminalité transnationale."
          />

          <div className="grid gap-5 md:grid-cols-3">
            {news.slice(0, 3).map((a) => (
              <NewsCard key={a.id} article={a} />
            ))}
          </div>
        </div>
      </section>
    </>
  )
}