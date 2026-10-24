import { Link } from 'react-router-dom'
import { GlobeArt } from './Art'

export default function Hero() {
  return (
    <section className="bg-gradient-to-br from-navy-900 via-navy-800 to-inst-600 text-white">
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-16 md:grid-cols-2 md:py-24">
        <div>
          <h1 className="font-serif text-4xl font-bold leading-tight text-white md:text-5xl">La sécurité publique se pense au-delà des frontières.</h1>
          <p className="mt-5 max-w-lg leading-relaxed text-white/85">
            Découvrez comment les polices de différents pays coopèrent, échangent des informations et font face à la criminalité transnationale. Explorez aussi une section de notices rouges, pensée pour tester la recherche et la consultation de fiches.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link to="/missions" className="btn bg-white text-navy-900 hover:bg-slate-100">Découvrir nos missions</Link>
            <Link to="/notices" className="btn-light">Consulter les notices</Link>
          </div>
         
        </div>
        <div className="mx-auto h-72 w-full max-w-md md:h-80"><GlobeArt /></div>
      </div>
    </section>
  )
}