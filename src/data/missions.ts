export interface Mission { id: string; icon: 'handshake' | 'share' | 'search' | 'shield' | 'graduation' | 'scale'; title: string; short: string; long: string }

export const missions: Mission[] = [
  { id: 'cooperation', icon: 'handshake', title: 'Coopération policière internationale', short: 'Faciliter le dialogue entre services de pays différents.', long: 'Les infractions ignorent les frontières. La coopération repose sur la confiance, des procédures partagées et le respect des cadres juridiques nationaux.' },
  { id: 'echange', icon: 'share', title: 'Échange d’informations', short: 'Transmettre l’information utile, au bon service, de façon sécurisée.', long: 'Un échange efficace suppose des formats communs, des canaux protégés et des règles claires sur qui peut consulter quoi.' },
  { id: 'consultation', icon: 'search', title: 'Consultation d’informations publiques', short: 'Rendre certaines informations accessibles au public, avec prudence.', long: 'Publier une information peut aider à retrouver une personne ou à prévenir un danger. Cela impose de protéger les droits des personnes concernées.' },
  { id: 'criminalite', icon: 'shield', title: 'Lutte contre la criminalité transnationale', short: 'Fraude, cybercriminalité, trafics : des enjeux qui dépassent un seul pays.', long: 'Les réseaux criminels exploitent les écarts entre législations. Une réponse coordonnée réduit ces angles morts.' },
  { id: 'formation', icon: 'graduation', title: 'Formation et appui technique', short: 'Partager méthodes et bonnes pratiques entre professionnels.', long: 'La formation couvre l’analyse, la preuve numérique, l’éthique et la protection des données.' },
  { id: 'droits', icon: 'scale', title: 'Respect du droit et des personnes', short: 'Garantir que la coopération reste proportionnée et encadrée.', long: 'Présomption d’innocence, protection des données et contrôle des demandes sont des garde-fous indispensables.' },
]

export const stats = [
  { value: '190', label: 'pays représentés' },
  { value: '24/7', label: 'disponibilité  du portail' },
  { value: '14', label: 'profils' },
  { value: '6', label: 'axes de mission présentés' },
]
