
export interface Article {
  id: string
  title: string
  category: string
  date: string
  summary: string
  body: string[]
  seed: number
}

export const news: Article[] = [
  {
    id: 'cooperation-regionale',
    seed: 1,
    category: 'Coopération',
    date: '',
    title: 'La coopération policière internationale',
    summary:
      'La coopération entre les services de police contribue à faciliter l’échange d’informations et la coordination des enquêtes transfrontalières.',
    body: [
      'Les infractions qui dépassent les frontières nationales peuvent nécessiter une coordination entre plusieurs services de police.',
      'L’échange d’informations doit s’effectuer par des canaux appropriés, dans le respect des législations applicables et des règles de protection des données.',
      'La coopération internationale repose notamment sur la communication entre autorités compétentes et le respect des procédures nationales.'
    ]
  },
  {
    id: 'formation-analystes',
    seed: 2,
    category: 'Formation',
    date: '',
    title: 'Le rôle de l’analyse dans les enquêtes criminelles',
    summary:
      'L’analyse des informations aide les enquêteurs à identifier des liens pertinents et à mieux comprendre les phénomènes criminels.',
    body: [
      'L’analyse criminelle consiste à examiner des informations disponibles afin de dégager des tendances et des liens potentiels entre différents éléments.',
      'La qualité des résultats dépend notamment de la fiabilité des sources, de la vérification des informations et de méthodes de travail rigoureuses.',
      'Les données personnelles doivent être traitées conformément aux règles applicables et aux garanties prévues par la loi.'
    ]
  },
  {
    id: 'cybersecurite-sensibilisation',
    seed: 3,
    category: 'Cybersécurité',
    date: '',
    title: 'Cinq réflexes pour mieux se protéger contre l’hameçonnage',
    summary:
      'Quelques pratiques simples permettent de réduire les risques liés aux courriels, messages et sites frauduleux.',
    body: [
      'Vérifiez attentivement l’adresse de l’expéditeur et méfiez-vous des messages qui exigent une action urgente.',
      'Évitez d’ouvrir les pièces jointes inattendues et ne communiquez jamais vos mots de passe ou codes de sécurité en réponse à un message suspect.',
      'Activez l’authentification à deux facteurs et maintenez vos appareils ainsi que vos logiciels à jour.',
      'En cas de doute, accédez au service concerné en saisissant vous-même son adresse officielle dans votre navigateur.',
      'Signalez les tentatives suspectes au service ou à l’organisme compétent.'
    ]
  },
  {
    id: 'donnees-publiques',
    seed: 4,
    category: 'Information publique',
    date: '',
    title: 'Comprendre et vérifier les informations publiques',
    summary:
      'La consultation de données publiques exige de vérifier leur origine, leur contexte et leur fiabilité.',
    body: [
      'Une information publiée en ligne doit être examinée en tenant compte de sa source, de sa date et de son contexte.',
      'La présence d’un nom dans un document ne suffit pas, à elle seule, à établir la responsabilité d’une personne.',
      'La présomption d’innocence, la protection de la vie privée et la vérification des sources sont essentielles lors de la diffusion d’informations.'
    ]
  },
  {
    id: 'lutte-fraude',
    seed: 5,
    category: 'Criminalité',
    date: '',
    title: 'Comprendre les mécanismes de la fraude transnationale',
    summary:
      'La fraude transnationale peut impliquer plusieurs pays, des transactions internationales ou des communications numériques.',
    body: [
      'Certaines fraudes impliquent des personnes, des victimes ou des mouvements financiers situés dans plusieurs pays.',
      'La prévention repose notamment sur la vérification des interlocuteurs, la sécurisation des moyens de paiement et le signalement rapide des opérations suspectes.',
      'Les situations concrètes doivent être examinées par les autorités compétentes, à partir d’informations vérifiées.'
    ]
  },
  {
    id: 'securite-numerique',
    seed: 6,
    category: 'Sécurité',
    date: '',
    title: 'Les bonnes pratiques pour renforcer la sécurité numérique',
    summary:
      'Des habitudes simples contribuent à protéger les comptes, les appareils et les informations personnelles.',
    body: [
      'Utilisez des mots de passe uniques et difficiles à deviner pour chacun de vos comptes importants.',
      'Installez les mises à jour de sécurité et activez les protections disponibles sur vos appareils.',
      'Limitez le partage d’informations personnelles et vérifiez les paramètres de confidentialité de vos comptes.',
      'En cas de compromission suspectée, modifiez les identifiants concernés et contactez le service compétent.'
    ]
  }
]
