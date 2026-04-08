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

export interface Recipe {
  id: string;
  name: string;
  difficulty: 'Facile' | 'Moyen' | 'Difficile';
  time: string;
  ingredients: string[];
  instructions: string[];
  imageUrl: string;
}

export interface QuizQuestion {
  q: string;
  options: string[];
  a: number;
}
