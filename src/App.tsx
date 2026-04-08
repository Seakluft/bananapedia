import { useState, useEffect } from 'react';
import './App.css';
import { BANANA_DATA, BananaSpecies } from './data/bananas';
import { RECIPES } from './data/recipes';

// --- COMPOSANTS ---

function BananaCard({ species, isFavorite, onToggleFavorite }: { 
  species: BananaSpecies, 
  isFavorite: boolean, 
  onToggleFavorite: (id: string) => void 
}) {
  return (
    <div className="banana-card">
      <div className="card-image-container">
        <img src={species.imageUrl} alt={species.name} className="card-image" />
        <button 
          className={`favorite-btn ${isFavorite ? 'active' : ''}`}
          onClick={() => onToggleFavorite(species.id)}
        >
          {isFavorite ? '❤️' : '🤍'}
        </button>
        <span className="usage-badge">{species.usage}</span>
      </div>
      <div className="card-content">
        <h2>{species.name}</h2>
        <span className="scientific-name">{species.scientificName}</span>
        <p>{species.description}</p>
        <div className="info-row">
          <div className="info-item"><strong>Origine</strong>{species.origin}</div>
          <div className="info-item"><strong>Goût</strong>{species.taste}</div>
        </div>
      </div>
    </div>
  );
}

function RecipeCard({ recipe }: { recipe: any }) {
  return (
    <div className="recipe-card">
      <div className="card-image-container"><img src={recipe.imageUrl} alt={recipe.name} className="card-image" /></div>
      <div className="recipe-content">
        <h3>{recipe.name}</h3>
        <p>⏱ {recipe.time} | {recipe.difficulty}</p>
        <h4 style={{ margin: '1rem 0 0.5rem' }}>Ingrédients :</h4>
        <ul style={{ paddingLeft: '1.2rem', fontSize: '0.9rem' }}>
          {recipe.ingredients.map((ing: string, i: number) => <li key={i}>{ing}</li>)}
        </ul>
      </div>
    </div>
  );
}

const QUIZ_QUESTIONS = [
  {
    q: "Botaniquement, la banane est une...",
    options: ["Baie", "Graine", "Noix", "Herbe"],
    a: 0
  },
  {
    q: "Quelle banane a un goût de crème glacée à la vanille ?",
    options: ["Cavendish", "Blue Java", "Red Dacca", "Plantain"],
    a: 1
  },
  {
    q: "Le bananier est-il un arbre ?",
    options: ["Oui", "Non, c'est une herbe géante", "Seulement certaines espèces"],
    a: 1
  }
];

function Quiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);

  const handleAnswer = (index: number) => {
    if (index === QUIZ_QUESTIONS[currentQuestion].a) setScore(score + 1);
    if (currentQuestion < QUIZ_QUESTIONS.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResult(true);
    }
  };

  if (showResult) return (
    <div className="quiz-container">
      <h2>Résultat du Banana Quiz 🍌</h2>
      <p className="quiz-score">Votre score : {score} / {QUIZ_QUESTIONS.length}</p>
      <button className="btn-primary" onClick={() => {setCurrentQuestion(0); setScore(0); setShowResult(false)}}>Rejouer</button>
    </div>
  );

  return (
    <div className="quiz-container">
      <p style={{ color: '#888', fontWeight: 700 }}>Question {currentQuestion + 1} / {QUIZ_QUESTIONS.length}</p>
      <h3>{QUIZ_QUESTIONS[currentQuestion].q}</h3>
      <div style={{ marginTop: '2rem' }}>
        {QUIZ_QUESTIONS[currentQuestion].options.map((opt, i) => (
          <button key={i} className="quiz-option" onClick={() => handleAnswer(i)}>{opt}</button>
        ))}
      </div>
    </div>
  );
}

// --- APP PRINCIPALE ---

function App() {
  const [activeTab, setActiveTab] = useState<'encyclopedia' | 'recipes' | 'quiz'>('encyclopedia');
  const [searchTerm, setSearchTerm] = useState('');
  const [favorites, setFavorites] = useState<string[]>([]);
  const [showOnlyFavorites, setShowOnlyFavorites] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem('banana-favorites');
    if (saved) setFavorites(JSON.parse(saved));
  }, []);

  const toggleFavorite = (id: string) => {
    const next = favorites.includes(id) ? favorites.filter(f => f !== id) : [...favorites, id];
    setFavorites(next);
    localStorage.setItem('banana-favorites', JSON.stringify(next));
  };

  const filteredBananas = BANANA_DATA.filter(b => {
    const search = b.name.toLowerCase().includes(searchTerm.toLowerCase()) || b.description.toLowerCase().includes(searchTerm.toLowerCase());
    return search && (showOnlyFavorites ? favorites.includes(b.id) : true);
  });

  return (
    <div className="app">
      <header>
        <h1>Bananapedia 🍌</h1>
        <p>L'univers complet des bananes</p>
      </header>

      <div className="app-container">
        <nav className="nav-tabs">
          <button className={`nav-btn ${activeTab === 'encyclopedia' ? 'active' : ''}`} onClick={() => setActiveTab('encyclopedia')}>Encyclopédie</button>
          <button className={`nav-btn ${activeTab === 'recipes' ? 'active' : ''}`} onClick={() => setActiveTab('recipes')}>Recettes</button>
          <button className={`nav-btn ${activeTab === 'quiz' ? 'active' : ''}`} onClick={() => setActiveTab('quiz')}>Mini-Jeu</button>
        </nav>

        {activeTab === 'encyclopedia' && (
          <>
            <div className="search-container"><input type="text" placeholder="Rechercher..." className="search-input" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} /></div>
            <div className="filters-container">
              <button className={`filter-btn ${!showOnlyFavorites ? 'active' : ''}`} onClick={() => setShowOnlyFavorites(false)}>Toutes</button>
              <button className={`filter-btn ${showOnlyFavorites ? 'active' : ''}`} onClick={() => setShowOnlyFavorites(true)}>Favoris ({favorites.length})</button>
            </div>
            <div className="banana-grid">
              {filteredBananas.map(b => <BananaCard key={b.id} species={b} isFavorite={favorites.includes(b.id)} onToggleFavorite={toggleFavorite} />)}
            </div>
          </>
        )}

        {activeTab === 'recipes' && (
          <div className="recipe-grid">
            {RECIPES.map(r => <RecipeCard key={r.id} recipe={r} />)}
          </div>
        )}

        {activeTab === 'quiz' && <Quiz />}
      </div>

      <footer>
        <p>© 2026 Bananapedia - Tout sur la banane.</p>
      </footer>
    </div>
  );
}

export default App;
