export type Category =
  | 'Fraude financière'
  | 'Cybercriminalité'
  | 'Trafic illicite'
  | 'Criminalité organisée'
  | 'Blanchiment'

export interface Profile {
  id: string
  firstName: string
  lastName: string
  nationality: string
  country: string
  birthDate: string
  sex: 'F' | 'M'
  height: string
  category: Category
  summary: string
  seed: number
  photo: string
}

export const categories: Category[] = [
  'Fraude financière',
  'Cybercriminalité',
  'Trafic illicite',
  'Criminalité organisée',
  'Blanchiment',
]

const text: Record<Category, string> = {
  'Fraude financière':
    'Profil  lié à une fraude financière.',
  Cybercriminalité:
    'Profil  lié à une infraction informatique.',
  'Trafic illicite':
    'Profil  lié à un trafic de marchandises.',
  'Criminalité organisée':
    'Profil  lié à la criminalité organisée.',
  Blanchiment:
    'Profil lié au blanchiment de capitaux.',
}

const p = (
  n: number,
  firstName: string,
  lastName: string,
  sex: 'F' | 'M',
  nationality: string,
  country: string,
  birthDate: string,
  height: string,
  category: Category,
): Profile => ({
  id: `demo-${String(n).padStart(3, '0')}`,
  firstName,
  lastName,
  sex,
  nationality,
  country,
  birthDate,
  height,
  category,
  summary: text[category],
  seed: n,
  photo: `/images/profiles/profil-${String(n).padStart(3, '0')}.jpg`,
})

export const profiles: Profile[] = [
  p(1, 'Théo', 'Guali', 'M', 'Française', 'France', '26 septembre 1980', '1,75 m', 'Fraude financière'),

  p(2, 'Aurélien', 'Vasquet', 'M', 'Française', 'France', '12 mars 1971', '1,78 m', 'Fraude financière'),

  p(3, 'Ilona', 'Kravtsova', 'F', 'Ukrainienne', 'Pologne', '04 juillet 1967', '1,68 m', 'Cybercriminalité'),

  p(4, 'Tomás', 'Albarrán', 'M', 'Espagnole', 'Mexique', '23 janvier 1971', '1,82 m', 'Trafic illicite'),

  p(5, 'Naledi', 'Mokoena', 'F', 'Sud-africaine', 'Afrique du Sud', '30 septembre 1980', '1,65 m', 'Blanchiment'),

  p(6, 'Kenji', 'Aramaki', 'M', 'Japonaise', 'Singapour', '18 novembre 1974', '1,74 m', 'Cybercriminalité'),

  p(7, 'Fatou', 'Diarrassouba', 'F', 'Ivoirienne', "Côte d'Ivoire", '09 mai 1977', '1,70 m', 'Fraude financière'),

  p(8, 'Matteo', 'Rinaldi', 'M', 'Italienne', 'Italie', '02 février 1976', '1,80 m', 'Criminalité organisée'),

  p(9, 'Sofia', 'Lindqvist', 'F', 'Suédoise', 'Suède', '15 août 1972', '1,72 m', 'Blanchiment'),

  p(10, 'Omar', 'Bensalem', 'M', 'Marocaine', 'Maroc', '27 juin 1973', '1,76 m', 'Trafic illicite'),

  p(11, 'Priya', 'Venkataraman', 'F', 'Indienne', 'Émirats arabes unis', '11 décembre 1976', '1,63 m', 'Fraude financière'),

  p(12, 'Daniella', 'Brenner', 'M', 'Allemande', 'Allemagne', '06 avril 1968', '1,85 m', 'Criminalité organisée'),

  p(13, 'Camila', 'Restrepo', 'F', 'Colombienne', 'Colombie', '21 octobre 1971', '1,67 m', 'Trafic illicite'),

  p(14, 'Dmitri', 'Orlovsky', 'M', 'Polonaise', 'Pologne', '14 juillet 1978', '1,79 m', 'Cybercriminalité'),

  p(15, 'Amara', 'Okonkwo', 'F', 'Nigériane', 'Nigeria', '03 mars 1979', '1,71 m', 'Blanchiment'),

]