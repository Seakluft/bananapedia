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
    id: 'manzano',
    name: 'Manzano (Banane Pomme)',
    scientificName: 'Musa acuminata x balbisiana (AAB)',
    origin: 'Amérique Centrale et du Sud',
    description: 'Petite banane trapue avec une peau fine qui devient noire à maturité complète.',
    taste: 'Saveur complexe rappelant la pomme et la fraise.',
    usage: 'dessert',
    imageUrl: 'https://images.unsplash.com/photo-1481349518771-20055b2a7b24?auto=format&fit=crop&q=80&w=800',
    funFact: 'Elle est très appréciée pour sa texture ferme même lorsqu\'elle est très mûre.'
  },
  {
    id: 'goldfinger',
    name: 'Goldfinger',
    scientificName: 'Musa FHIA-01',
    origin: 'Honduras',
    description: 'Hybride créé pour résister aux maladies. Très polyvalente.',
    taste: 'Légèrement acide et rafraîchissante.',
    usage: 'both',
    imageUrl: 'https://images.unsplash.com/photo-1528825871115-3581a5387919?auto=format&fit=crop&q=80&w=401',
    funFact: 'C\'est la première banane de type "Gros Michel" résistante créée par l\'homme.'
  },
  {
    id: 'praying-hands',
    name: 'Praying Hands',
    scientificName: 'Musa ABB Group',
    origin: 'Indonésie',
    description: 'Ses fruits fusionnent entre eux, ressemblant à deux mains jointes en prière.',
    taste: 'Goût vanillé avec une texture de pomme de terre cuite.',
    usage: 'both',
    imageUrl: 'https://images.unsplash.com/photo-1588102372579-340cc53630f7?auto=format&fit=crop&q=80&w=800',
    funFact: 'Une main entière de bananes doit être séparée au couteau car les fruits sont soudés.'
  },
  {
    id: 'fehi',
    name: 'Fe\'i (Banane Orange)',
    scientificName: 'Musa troglodytarum',
    origin: 'Polynésie',
    description: 'Ses régimes poussent vers le ciel plutôt que vers le sol.',
    taste: 'Acidulée, elle est presque toujours consommée cuite.',
    usage: 'cooking',
    imageUrl: 'https://images.unsplash.com/photo-1629828854005-0e1f7278377f?auto=format&fit=crop&q=80&w=800',
    funFact: 'Sa sève violette était autrefois utilisée comme colorant naturel.'
  }
];
