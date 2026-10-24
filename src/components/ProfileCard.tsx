import { Link } from 'react-router-dom'
import { Avatar } from './Art'
import type { Profile } from '../data/profiles'

export default function ProfileCard({ profile }: { profile: Profile }) {
  return (
    <article className="card overflow-hidden transition duration-200 hover:-translate-y-0.5 hover:shadow-md">
      <div className="relative h-52 bg-slate-100">
        {profile.photo ? (
          <img
            src={profile.photo}
            alt={`Illustration de ${profile.firstName} ${profile.lastName}`}
            className="h-full w-full object-contain object-top"
            loading="lazy"
            onError={(e) => {
              e.currentTarget.style.display = 'none'
            }}
          />
        ) : (
          <Avatar
            seed={profile.seed}
            className="h-full w-full"
          />
        )}

        <span className="absolute left-3 top-3 rounded bg-notice-600 px-2 py-0.5 text-xs font-semibold text-white">
          Profil
        </span>
      </div>

      <div className="p-4">
        <h3 className="font-sans text-lg font-semibold">
          {profile.firstName} {profile.lastName.toUpperCase()}
        </h3>

        <p className="mt-1 text-sm text-slate-600">
          {profile.nationality} · né(e) le {profile.birthDate}
        </p>

        <p className="mt-2 inline-block rounded bg-inst-100 px-2 py-0.5 text-xs font-medium text-inst-600">
          {profile.category}
        </p>

        <Link
          to={`/notices/${profile.id}`}
          className="btn-outline mt-4 w-full"
        >
          Voir le profil
        </Link>
      </div>
    </article>
  )
}