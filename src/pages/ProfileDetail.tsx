import { Link, useParams } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'
import { Avatar } from '../components/Art'
import { profiles } from '../data/profiles'

export default function ProfileDetail() {
  const { id } = useParams()
  const p = profiles.find((x) => String(x.id) === id)

  if (!p) {
    return (
      <div className="mx-auto max-w-xl px-4 py-24 text-center">
        <h1 className="text-3xl font-bold">
          Profil introuvable
        </h1>

        <p className="mt-3 text-slate-600">
          Aucune fiche ne correspond à l’identifiant demandé.
        </p>

        <Link
          to="/notices"
          className="btn-primary mt-6 inline-flex items-center gap-2"
        >
          <ArrowLeft className="h-4 w-4" />
          Retour aux notices
        </Link>
      </div>
    )
  }

  const fields: [string, string][] = [
    ['Nom', p.lastName.toUpperCase()],
    ['Prénom', p.firstName],
    ['Sexe', p.sex === 'F' ? 'Féminin' : 'Masculin'],
    ['Date de naissance', p.birthDate],
    ['Nationalité', p.nationality],
    ['Pays associé', p.country],
    ['Taille', p.height],
    ['Catégorie', p.category],
  ]

  return (
    <div className="mx-auto max-w-5xl px-4 py-10">
      <Link
        to="/notices"
        className="btn-outline mb-6 inline-flex items-center gap-2"
      >
        <ArrowLeft className="h-4 w-4" />
        Retour aux notices
      </Link>

      <div className="card overflow-hidden md:grid md:grid-cols-[320px_1fr]">
        <div className="flex min-h-[320px] items-start justify-center bg-slate-100 md:min-h-[500px]">
          {p.photo ? (
            <img
              src={p.photo}
              alt={`Illustration de ${p.firstName} ${p.lastName}`}
              className="h-auto max-h-[500px] w-full object-contain object-top"
              loading="lazy"
              onError={(e) => {
                e.currentTarget.style.display = 'none'
              }}
            />
          ) : (
            <Avatar
              seed={p.seed}
              className="h-80 w-full md:h-full"
            />
          )}
        </div>

        <div className="p-6 md:p-8">
          <span className="inline-block rounded bg-notice-600 px-3 py-1 text-xs font-semibold text-white">
            Fiche illustrative
          </span>

          <h1 className="mt-3 text-3xl font-bold">
            {p.firstName} {p.lastName.toUpperCase()}
          </h1>

          <p className="mt-3 leading-relaxed">
            {p.summary}
          </p>

          <dl className="mt-6 grid gap-x-6 gap-y-3 sm:grid-cols-2">
            {fields.map(([k, v]) => (
              <div
                key={k}
                className="border-b border-slate-100 pb-2"
              >
                <dt className="text-xs text-slate-500">
                  {k}
                </dt>

                <dd className="font-medium text-navy-900">
                  {v || 'Non renseigné'}
                </dd>
              </div>
            ))}
          </dl>

          <p className="mt-8 border-t border-slate-200 pt-4 text-xs text-slate-500">
            Site non officiel · Profil illustratif
          </p>
        </div>
      </div>
    </div>
  )
}