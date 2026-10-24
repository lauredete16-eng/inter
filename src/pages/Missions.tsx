import { Link } from 'react-router-dom'
import SectionTitle from '../components/SectionTitle'
import { missions } from '../data/missions'
import { icons } from './Home'

export default function Missions() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-14">
      <SectionTitle
        title="Nos missions"
        text="Découvrez les principaux domaines de la coopération policière internationale, les échanges d’informations et les mécanismes de lutte contre la criminalité transnationale."
      />

      <div className="grid gap-6 md:grid-cols-2">
        {missions.map((m) => {
          const Icon = icons[m.icon]

          return (
            <section
              key={m.id}
              id={m.id}
              className="card p-6 transition duration-200 hover:shadow-md"
            >
              <div className="flex items-center gap-3">
                <span className="rounded bg-inst-100 p-2.5 text-inst-600">
                  <Icon className="h-6 w-6" />
                </span>

                <h2 className="font-sans text-lg font-semibold">
                  {m.title}
                </h2>
              </div>

              <p className="mt-4 leading-relaxed">
                {m.long}
              </p>
            </section>
          )
        })}
      </div>

      <div className="mt-10 flex flex-wrap gap-3">
        <Link to="/notices" className="btn-primary">
          Consulter les notices
        </Link>

        <Link to="/a-propos" className="btn-outline">
          À propos du portail
        </Link>
      </div>
    </div>
  )
}