
import { Link } from 'react-router-dom'

function Page({
  title,
  items,
}: {
  title: string
  items: [string, string][]
}) {
  return (
    <div className="mx-auto max-w-3xl px-4 py-14">
      <h1 className="text-3xl font-bold">{title}</h1>

      <div className="mt-8 space-y-6">
        {items.map(([h, t]) => (
          <section key={h}>
            <h2 className="font-sans text-lg font-semibold">
              {h}
            </h2>
            <p className="mt-2 leading-relaxed">{t}</p>
          </section>
        ))}
      </div>
    </div>
  )
}

export const Legal = () => (
  <Page
    title="Mentions légales"
    items={[
      [
        'Éditeur du site',
        'Meridian Security Portal est un site indépendant consacré aux informations de sécurité et de coopération policière internationale.',
      ],
      [
        'Statut du site',
        'Site officiel, indépendant de toute organisation policière internationale.',
      ],
      [
        'Exactitude des informations',
        'Les informations publiées doivent être vérifiées avant toute utilisation. Les fiches locales ne constituent pas, à elles seules, des avis de recherche officiels.',
      ],
      [
        'Responsabilité',
        'Le contenu est fourni à titre informatif et ne constitue pas un avis juridique. Les informations légales relatives à l’éditeur et à l’hébergement doivent être complétées selon la situation réelle du site.',
      ],
    ]}
  />
)

export const Privacy = () => (
  <Page
    title="Politique de confidentialité"
    items={[
      [
        'Données collectées',
        'Les données effectivement collectées dépendent des fonctionnalités et des services connectés au site.',
      ],
      [
        'Formulaire de contact',
        'Le fonctionnement du formulaire dépend de sa configuration. Avant de saisir des données personnelles, vérifiez comment elles sont traitées et transmises.',
      ],
      [
        'Protection des données',
        'Évitez de communiquer des informations sensibles. La politique de confidentialité devra être adaptée si le site utilise un serveur, une base de données, des cookies ou un service tiers.',
      ],
    ]}
  />
)

export const NotFound = () => (
  <div className="mx-auto max-w-xl px-4 py-24 text-center">
    <h1 className="text-3xl font-bold">
      Page introuvable
    </h1>

    <p className="mt-3">
      Cette adresse ne correspond à aucune page du site.
    </p>

    <Link to="/" className="btn-primary mt-6">
      Retour à l’accueil
    </Link>

   
  </div>
)