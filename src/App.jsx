import React, { useState } from "react";
import "./App.css";

const consoles = [
  { name: "Atari 2600", brand: "Atari", year: 1977, desc: "O primeiro console de videogame de sucesso comercial", image: "/consoles/atari-2600.png", games: ["Pong", "Space Invaders", "Pac-Man", "Adventure"], era: 1970 },
  { name: "NES", brand: "Nintendo", year: 1983, desc: "Revitalizou a indústria de jogos após a crise de 1983", image: "/consoles/nes.png", games: ["Super Mario Bros", "The Legend of Zelda", "Metroid", "Contra"], era: 1980 },
  { name: "Mega Drive", brand: "Sega", year: 1988, desc: "Trouxe gráficos 16-bit para a era de ouro dos arcades", image: "/consoles/sega-genesis.jpg", games: ["Sonic the Hedgehog", "Shinobi", "Golden Axe", "Streets of Rage"], era: 1980 },
  { name: "PlayStation 1", brand: "Sony", year: 1994, desc: "Revolucionou os jogos com tecnologia 3D em tempo real", image: "/consoles/ps1.jpg", games: ["Final Fantasy VII", "Metal Gear Solid", "Resident Evil", "Tekken"], era: 1990 },
  { name: "Nintendo 64", brand: "Nintendo", year: 1996, desc: "Pioneiro em 3D com controle analógico revolucionário", image: "/consoles/nintendo-64.jpg", games: ["Super Mario 64", "The Legend of Zelda: OoT", "GoldenEye 007"], era: 1990 },
  { name: "Game Boy", brand: "Nintendo", year: 1989, desc: "Dominante nos jogos portáteis por duas décadas", image: "/consoles/game-boy.jpg", games: ["Tetris", "Super Mario Land", "Pokémon Red", "Donkey Kong Land"], era: 1980 },
];

const reviews = [
  { rating: "★★★★★", text: "Uma jornada nostálgica pelo passado dos videogames!", reviewer: "Gamer Retrô" },
  { rating: "★★★★★", text: "Informações detalhadas e bem organizadas de todos os consoles clássicos.", reviewer: "Gaming Historian" },
  { rating: "★★★★☆", text: "Excelente arquivo de consoles. Perfeito para colecionadores!", reviewer: "Console Collector" },
];

export default function App() {
  const [newsletter, setNewsletter] = useState("");
  const [selectedConsole, setSelectedConsole] = useState(null);

  const handleNewsletterSubmit = () => {
    if (newsletter.trim()) {
      alert(`Obrigado! ${newsletter} foi inscrito na newsletter!`);
      setNewsletter("");
    }
  };

  return (
    <div className="container">
      <header className="header">
        <h1>🎮 GAME ARCHIVE</h1>
      </header>

      <nav className="nav">
        <span>HOME</span>
        <span>FEATURED</span>
        <span>HISTORY</span>
        <span>COMMUNITY</span>
      </nav>

      <section className="hero-main">
        <div>
          <h2>Legendary Gaming Systems</h2>
          <p>Explore a evolução dos consoles que moldaram a indústria de videogames</p>
          <button className="cta-button">Explorar Consoles</button>
        </div>
      </section>

      <section className="featured-section">
        <h3>Destaque</h3>
        <div className="featured-grid">
          {consoles.slice(0, 3).map((console, idx) => (
            <div
              key={idx}
              className="featured-card"
              onClick={() => setSelectedConsole(console)}
            >
              <img src={console.image} alt={console.name} className="card-image" />
              <div className="card-content">
                <h4>{console.name}</h4>
                <p>{console.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="stats-section">
        <div className="stats-grid">
          <div className="stat-card">
            <div className="stat-number">50+</div>
            <div className="stat-label">Consoles Catalogados</div>
          </div>
          <div className="stat-card">
            <div className="stat-number">1000+</div>
            <div className="stat-label">Jogos Documentados</div>
          </div>
          <div className="stat-card">
            <div className="stat-number">5M+</div>
            <div className="stat-label">Visitantes Únicos</div>
          </div>
          <div className="stat-card">
            <div className="stat-number">100K+</div>
            <div className="stat-label">Comunidade Ativa</div>
          </div>
        </div>
      </section>

      <section className="timeline-section">
        <h3>Timeline dos Consoles</h3>
        <div className="timeline-container">
          {[
            { year: "1977", name: "Atari 2600", emoji: "🎮" },
            { year: "1983", name: "NES", emoji: "👾" },
            { year: "1988", name: "Mega Drive", emoji: "⚡" },
            { year: "1989", name: "Game Boy", emoji: "📱" },
            { year: "1994", name: "PlayStation", emoji: "🎯" },
            { year: "1996", name: "Nintendo 64", emoji: "🌟" },
          ].map((item, idx) => (
            <div key={idx} className="timeline-item">
              <div className="timeline-dot">{item.emoji}</div>
              <div className="timeline-content">
                <h4>{item.year} - {item.name}</h4>
                <p>Um marco histórico na indústria de videogames que revolucionou a forma como jogamos.</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="compare-section">
        <h3>Comparação</h3>
        <div className="compare-container">
          <div className="compare-card">
            <h4>Era 8-bit</h4>
            <ul className="feature-list">
              <li>Gráficos pixelados</li>
              <li>Gameplay clássico</li>
              <li>Cartuchos físicos</li>
              <li>Multiplayer local</li>
              <li>Grande comunidade nostálgica</li>
            </ul>
          </div>
          <div className="compare-card">
            <h4>Era 3D Moderna</h4>
            <ul className="feature-list">
              <li>Gráficos 3D avançados</li>
              <li>Narrativas complexas</li>
              <li>Mídias diversas</li>
              <li>Multiplayer online</li>
              <li>Experiências imersivas</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="community-section">
        <h3>Comunidade</h3>
        <div className="review-grid">
          {reviews.map((review, idx) => (
            <div key={idx} className="review-card">
              <div className="rating">{review.rating}</div>
              <p className="review-text">"{review.text}"</p>
              <div className="reviewer">— {review.reviewer}</div>
            </div>
          ))}
        </div>
      </section>

      <footer className="footer">
        <h4>📧 Newsletter</h4>
        <p>Receba atualizações sobre novos consoles e histórias de gaming</p>
        <div className="newsletter-form">
          <input
            type="email"
            placeholder="seu@email.com"
            value={newsletter}
            onChange={(e) => setNewsletter(e.target.value)}
            onKeyPress={(e) => e.key === "Enter" && handleNewsletterSubmit()}
          />
          <button onClick={handleNewsletterSubmit}>INSCREVER</button>
        </div>
        <p style={{ marginTop: "30px", fontSize: "0.8em" }}>
          © 2026 Game Archive | Made for Gaming Enthusiasts 🎮
        </p>
      </footer>

      {selectedConsole && (
        <div className="modal" onClick={() => setSelectedConsole(null)}>
          <div className="modal-box" onClick={(e) => e.stopPropagation()}>
            <h2>{selectedConsole.name}</h2>
            <img src={selectedConsole.image} alt={selectedConsole.name} />
            <p><strong>Fabricante:</strong> {selectedConsole.brand}</p>
            <p><strong>Lançamento:</strong> {selectedConsole.year}</p>
            <p>{selectedConsole.desc}</p>
            <div className="games-list">
              <h4>🎮 Jogos Populares</h4>
              <ul>
                {selectedConsole.games.map((game, idx) => (
                  <li key={idx}>{game}</li>
                ))}
              </ul>
            </div>
            <button
              className="modal-close"
              onClick={() => setSelectedConsole(null)}
            >
              FECHAR
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
