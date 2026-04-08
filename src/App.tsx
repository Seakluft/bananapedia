import { useState } from 'react';
import './App.css';
import { BANANA_DATA, BananaSpecies } from './data/bananas';

function BananaCard({ species }: { species: BananaSpecies }) {
  return (
    <div className="banana-card">
      <div className="card-image-container">
        <img src={species.imageUrl} alt={species.name} className="card-image" />
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

  const filteredBananas = BANANA_DATA.filter(banana => 
    banana.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    banana.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

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

        <div className="banana-grid">
          {filteredBananas.length > 0 ? (
            filteredBananas.map(banana => (
              <BananaCard key={banana.id} species={banana} />
            ))
          ) : (
            <p style={{ textAlign: 'center', gridColumn: '1/-1', padding: '2rem' }}>
              Aucune banane ne correspond à votre recherche. 🍌😢
            </p>
          )}
        </div>
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
