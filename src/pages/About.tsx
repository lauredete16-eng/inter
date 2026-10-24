import SectionTitle from '../components/SectionTitle'

const blocks = [
  [
    'Notre raison d’être',
    'La criminalité transnationale constitue un défi majeur pour les autorités judiciaires et policières. La fraude, la cybercriminalité, le trafic de stupéfiants et la traite des êtres humains nécessitent une coopération entre les pays. Meridian Security Portal présente les mécanismes de cette coopération et les moyens mis en œuvre pour lutter contre les infractions internationales.'
  ],
  [
    'Une information claire et responsable',
    'La coopération policière internationale repose sur l’échange d’informations, l’entraide judiciaire et le respect des législations nationales. Les informations relatives aux procédures doivent être traitées avec rigueur, dans le respect de la protection des données personnelles, des droits fondamentaux et de la présomption d’innocence.'
  ],
  [
    'Comprendre les notices rouges',
    'Une notice rouge d’INTERPOL est une demande adressée aux services de police du monde entier afin de localiser une personne recherchée et, si la législation nationale le permet, de procéder à son arrestation provisoire en vue d’une extradition ou d’une mesure similaire. Elle ne constitue pas un mandat d’arrêt international. Chaque pays applique sa propre législation et décide des mesures à prendre.'
  ],
  [
    'Comment fonctionne le portail',
    'Le portail permet de consulter les informations publiées dans ses différentes rubriques, d’effectuer des recherches et de filtrer les résultats selon les critères disponibles. Les fiches détaillées permettent de retrouver les informations associées à chaque entrée. Les modalités de collecte, de mise à jour et de conservation des données dépendent des sources utilisées et du fonctionnement technique du site.'
  ],
  [
    'Notre indépendance',
    'Meridian Security Portal est un portail indépendant consacré à l’information sur la coopération policière internationale. Il ne représente pas INTERPOL, ne remplace pas les communications des autorités officielles et ne constitue pas un service de police ou une autorité judiciaire. Pour toute information concernant une personne recherchée ou une procédure en cours, les publications officielles des organismes compétents doivent être consultées.'
  ],
  [
    'Sources et vérification des informations',
    'Les informations relatives aux notices, aux personnes recherchées et aux procédures internationales doivent être vérifiées à partir de sources officielles et actualisées. INTERPOL met notamment à disposition une base publique permettant de consulter certaines notices rouges. La publication d’une notice ne constitue pas une déclaration de culpabilité. Les informations doivent être interprétées dans leur contexte et tenir compte des éventuelles mises à jour des autorités compétentes.'
  ]
]

export default function About() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-14">
      <SectionTitle
        title="À propos de ce portail"
        text="Comprendre les mécanismes, les missions et les enjeux de la coopération policière internationale."
      />

      <div className="space-y-5">
        {blocks.map(([t, d]) => (
          <section
            key={t}
            className="card border-l-4 border-l-inst-600 p-6"
          >
            <h2 className="font-sans text-xl font-semibold">{t}</h2>
            <p className="mt-2 leading-relaxed">{d}</p>
          </section>
        ))}
      </div>
    </div>
  )
}