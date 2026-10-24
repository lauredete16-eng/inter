import { Link } from 'react-router-dom'
import Logo from './Logo'

export default function Footer() {
  return (
    <footer className="bg-navy-900 text-slate-300">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-12 md:grid-cols-3">
        <div>
          <Logo light />
          <p className="mt-4 text-sm leading-relaxed">Un portail consacré à la coopération policière internationale et à la consultation d’informations publiques. Les profils, articles et chiffres présentés sont fictifs.</p>
        </div>
        <div>
          <h3 className="font-sans text-sm font-semibold text-white">Explorer le site</h3>
          <ul className="mt-3 space-y-2 text-sm">
            {[['/', 'Accueil'], ['/a-propos', 'À propos'], ['/missions', 'Nos missions'], ['/notices', 'Notices rouges'], ['/actualites', 'Actualités'], ['/contact', 'Contact']].map(([to, l]) => (
              <li key={to}><Link className="hover:text-white" to={to}>{l}</Link></li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="font-sans text-sm font-semibold text-white">Informations utiles</h3>
          <ul className="mt-3 space-y-2 text-sm">
            <li><Link className="hover:text-white" to="/mentions-legales">Mentions légales</Link></li>
            <li><Link className="hover:text-white" to="/confidentialite">Politique de confidentialité</Link></li>
            <li>Contact : contact@interpole.com</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10 px-4 py-4 text-center text-xs text-slate-400">
        Site  officiel d’Interpol et  affilié une organisation policière.
      </div>
    </footer>
  )
}