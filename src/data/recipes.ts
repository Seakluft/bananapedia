export interface Recipe {
  id: string;
  name: string;
  difficulty: 'Facile' | 'Moyen';
  time: string;
  ingredients: string[];
  instructions: string[];
  imageUrl: string;
}

export const RECIPES: Recipe[] = [
  {
    id: 'banana-bread',
    name: 'Banana Bread Classique',
    difficulty: 'Facile',
    time: '60 min',
    ingredients: ['3 bananes très mûres', '150g de farine', '100g de sucre', '1 œuf', '50g de beurre fondu', '1 sachet de levure'],
    instructions: [
      'Écrasez les bananes en purée.',
      'Mélangez avec le sucre, l\'œuf et le beurre.',
      'Ajoutez la farine et la levure.',
      'Cuire 45-50 min à 180°C.'
    ],
    imageUrl: 'https://images.unsplash.com/photo-1530610476181-d83430b64dcd?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'smoothie-tropique',
    name: 'Smoothie Tropical',
    difficulty: 'Facile',
    time: '5 min',
    ingredients: ['1 banane', '1/2 mangue', '200ml de lait de coco', 'Quelques glaçons'],
    instructions: [
      'Coupez les fruits en morceaux.',
      'Mixez le tout jusqu\'à obtenir une texture lisse.',
      'Servez bien frais !'
    ],
    imageUrl: 'https://images.unsplash.com/photo-1502741224143-90386d7f8c82?auto=format&fit=crop&q=80&w=800'
  }
];
