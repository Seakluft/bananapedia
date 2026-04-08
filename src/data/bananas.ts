export interface BananaSpecies {
  id: string;
  name: string;
  scientificName: string;
  origin: string;
  description: string;
  taste: string;
  usage: 'dessert' | 'cooking' | 'both';
  imageUrl: string;
  funFact: string;
}

export const BANANA_DATA: BananaSpecies[] = [
  {
    id: 'cavendish',
    name: 'Cavendish',
    scientificName: 'Musa acuminata',
    origin: 'Asie du Sud-Est',
    description: 'La banane la plus exportée au monde. Elle a remplacé la Gros Michel après l\'épidémie de la maladie de Panama.',
    taste: 'Douce et sucrée à maturité.',
    usage: 'dessert',
    imageUrl: 'https://images.unsplash.com/photo-1603833665858-e81b1c7e4460?auto=format&fit=crop&q=80&w=800',
    funFact: 'Toutes les bananes Cavendish sont des clones génétiquement identiques.'
  },
  {
    id: 'blue-java',
    name: 'Blue Java (Banane Glace)',
    scientificName: 'Musa acuminata x balbisiana',
    origin: 'Asie du Sud-Est',
    description: 'Connue pour sa peau bleu argenté avant maturité et sa texture onctueuse.',
    taste: 'Goût de crème pâtissière à la vanille.',
    usage: 'dessert',
    imageUrl: 'https://images.unsplash.com/photo-1528825871115-3581a5387919?auto=format&fit=crop&q=80&w=800',
    funFact: 'On l\'appelle "Ice Cream Banana" en raison de sa texture et de son goût unique.'
  },
  {
    id: 'plantain',
    name: 'Plantain',
    scientificName: 'Musa paradisiaca',
    origin: 'Afrique et Asie',
    description: 'Plus grosse et plus riche en amidon que la banane dessert. Elle se consomme cuite.',
    taste: 'Peu sucrée crue, savoureuse et fondante après cuisson.',
    usage: 'cooking',
    imageUrl: 'https://images.unsplash.com/photo-1590779033100-9f60705a2f3b?auto=format&fit=crop&q=80&w=800',
    funFact: 'Dans de nombreux pays, elle est considérée comme un légume de base plutôt qu\'un fruit.'
  },
  {
    id: 'red-dacca',
    name: 'Red Dacca (Banane Rouge)',
    scientificName: 'Musa acuminata (AAA Group)',
    origin: 'Asie et Afrique de l\'Est',
    description: 'Reconnaissable à sa peau rouge-violacé et sa chair crème orangée.',
    taste: 'Goût de framboise mélangé à la banane classique.',
    usage: 'dessert',
    imageUrl: 'https://images.unsplash.com/photo-1543218191-0abc5504711e?auto=format&fit=crop&q=80&w=800',
    funFact: 'Elle contient plus de bêta-carotène et de vitamine C que les bananes jaunes.'
  },
  {
    id: 'gros-michel',
    name: 'Gros Michel',
    scientificName: 'Musa acuminata (AAA Group)',
    origin: 'Asie du Sud-Est',
    description: 'L\'ancienne reine du marché mondial avant les années 1950.',
    taste: 'Plus riche, plus crémeuse et plus parfumée que la Cavendish.',
    usage: 'dessert',
    imageUrl: 'https://images.unsplash.com/photo-1528825871115-3581a5387919?auto=format&fit=crop&q=80&w=400',
    funFact: 'C\'est cette banane qui a inspiré l\'arôme artificiel de banane des bonbons.'
  },
  {
    id: 'lady-finger',
    name: 'Lady Finger',
    scientificName: 'Musa acuminata (AA Group)',
    origin: 'Asie du Sud-Est / Australie',
    description: 'Petites bananes fines et très sucrées.',
    taste: 'Extrêmement sucrée avec une texture ferme.',
    usage: 'dessert',
    imageUrl: 'https://images.unsplash.com/photo-1571771894821-ad99024177c8?auto=format&fit=crop&q=80&w=800',
    funFact: 'Elles ne brunissent pas aussi vite que les autres bananes une fois coupées.'
  }
];
