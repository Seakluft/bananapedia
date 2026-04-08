import { useState, useEffect } from 'react';
import './App.css';
import { BANANA_DATA, BananaSpecies } from './data/bananas';

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
          title={isFavorite ? "Retirer des favoris" : "Ajouter aux favoris"}
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
          <div className="info-item">
            <strong>Origine</strong>
            {species.origin}
          </div>
          <div className="info-item">
            <strong>Goût</strong>
            {species.taste}
          </div>
        </div>

        <div className="fun-fact">
          <strong>Le saviez-vous ?</strong>
          <p>{species.funFact}</p>
        </div>
      </div>
    </div>
  );
}

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [favorites, setFavorites] = useState<string[]>([]);
  const [showOnlyFavorites, setShowOnlyFavorites] = useState(false);

  // Charger les favoris depuis le localStorage au démarrage
  useEffect(() => {
    const savedFavorites = localStorage.getItem('banana-favorites');
    if (savedFavorites) {
      setFavorites(JSON.parse(savedFavorites));
    }
  }, []);

  const toggleFavorite = (id: string) => {
    const newFavorites = favorites.includes(id)
      ? favorites.filter(favId => favId !== id)
      : [...favorites, id];
    
    setFavorites(newFavorites);
    localStorage.setItem('banana-favorites', JSON.stringify(newFavorites));
  };

  const filteredBananas = BANANA_DATA.filter(banana => {
    const matchesSearch = banana.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         banana.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFavorite = showOnlyFavorites ? favorites.includes(banana.id) : true;
    return matchesSearch && matchesFavorite;
  });

  return (
    <div className="app">
      <header>
        <h1>Bananapedia 🍌</h1>
        <p>L'encyclopédie interactive des bananes du monde entier</p>
      </header>

      <div className="app-container">
        <div className="search-container">
          <input 
            type="text" 
            placeholder="Rechercher une espèce (ex: Blue Java, Rouge...)" 
            className="search-input"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        <div className="filters-container">
          <button 
            className={`filter-btn ${!showOnlyFavorites ? 'active' : ''}`}
            onClick={() => setShowOnlyFavorites(false)}
          >
            Toutes les bananes
          </button>
          <button 
            className={`filter-btn ${showOnlyFavorites ? 'active' : ''}`}
            onClick={() => setShowOnlyFavorites(true)}
          >
            Mes Favoris ❤️ ({favorites.length})
          </button>
        </div>

        <div className="banana-grid">
          {filteredBananas.length > 0 ? (
            filteredBananas.map(banana => (
              <BananaCard 
                key={banana.id} 
                species={banana} 
                isFavorite={favorites.includes(banana.id)}
                onToggleFavorite={toggleFavorite}
              />
            ))
          ) : (
            <p style={{ textAlign: 'center', gridColumn: '1/-1', padding: '4rem' }}>
              {showOnlyFavorites 
                ? "Vous n'avez pas encore de bananes favorites. 🍌" 
                : "Aucune banane ne correspond à votre recherche. 🍌😢"}
            </p>
          )}
        </div>

        <section className="cultivation-section">
          <h2 style={{ textAlign: 'center', color: 'var(--banana-brown)' }}>Le Cycle de Vie du Bananier</h2>
          <div className="cultivation-grid">
            <div className="step-card">
              <span className="step-icon">🌱</span>
              <h3>Le Rejet</h3>
              <p>Le bananier n'est pas un arbre mais une herbe. Il se multiplie par des rejets qui poussent à partir du rhizome souterrain.</p>
            </div>
            <div className="step-card">
              <span className="step-icon">🌿</span>
              <h3>Croissance</h3>
              <p>En 9 mois, le bananier atteint sa taille adulte. Ses feuilles géantes captent l'énergie du soleil tropical.</p>
            </div>
            <div className="step-card">
              <span className="step-icon">🌺</span>
              <h3>La Fleur</h3>
              <p>Un bourgeon violet massif apparaît. Sous chaque pétale, de minuscules fleurs se transforment en bananes sans pollinisation.</p>
            </div>
            <div className="step-card">
              <span className="step-icon">🍌</span>
              <h3>La Récolte</h3>
              <p>Une fois le régime mûr, le pied mère meurt, laissant la place à un nouveau rejet pour recommencer le cycle.</p>
            </div>
          </div>
        </section>
      </div>

      <footer>
        <div className="app-container">
          <p>© 2026 Bananapedia - Développé avec amour pour les bananes.</p>
          <p style={{ fontSize: '0.8rem', opacity: 0.6 }}>Données collectées à des fins encyclopédiques.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
