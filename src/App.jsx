import React, { useState } from "react";
import "./global.css";
import { consoles } from "./modules/data";
import {
  Container,
  Header,
  Nav,
  Hero,
  Controls,
  FilterBtn,
  SearchInput,
  GridCards,
  Card,
  CardImg,
  CardBody,
  Star,
  Modal,
  ModalBox,
  GamesList,
  Footer,
  FooterContent,
  FooterSection,
  FooterLink,
  FooterSocials,
  FooterSocialIcon,
  FooterBottom,
  StatsSection,
  StatsGrid,
  StatCard,
  RatingStars,
  StarButton,
  FeaturesSection,
  SectionTitle,
  FeaturesGrid,
  FeatureCard,
} from "./modules/styles";

export default function App() {
  const [filter, setFilter] = useState("All");
  const [search, setSearch] = useState("");
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [favorites, setFavorites] = useState({});
  const [ratings, setRatings] = useState({});

  const filteredConsoles = consoles.filter((console) => {
    const matchesFilter = filter === "All" || console.brand === filter;
    const matchesSearch = console.name.toLowerCase().includes(search.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  const selectedConsole = selectedIndex !== null ? consoles[selectedIndex] : null;

  const toggleFavorite = (index, event) => {
    event.stopPropagation();
    setFavorites((prev) => ({ ...prev, [index]: !prev[index] }));
  };

  const setRating = (index, stars, event) => {
    event.stopPropagation();
    setRatings((prev) => ({ ...prev, [index]: stars }));
  };

  const totalGames = consoles.reduce((acc, c) => acc + c.games.length, 0);
  const avgYear = Math.round(consoles.reduce((acc, c) => acc + c.year, 0) / consoles.length);

  return (
    <Container>
      <Header>
        <h1>🎮 RETRO GAMES</h1>
        <p className="header-subtitle">A Journey Through Gaming History</p>
      </Header>

      <Nav>
        <span>↗ HOME</span>
        <span>▼ CONSOLES</span>
        <span>◉ HISTÓRIA</span>
        <span>✦ SOBRE</span>
      </Nav>

      <Hero>
        <h2>CLÁSSICOS INESQUECÍVEIS</h2>
        <p>Explore a história dos maiores consoles de videogame e reviva a nostalgia dos jogos que marcaram época</p>
        <div>
          <span>🎮 Multiplayer</span>
          <span>🏆 Clássicos Premiados</span>
          <span>📅 Desde 1977</span>
        </div>
      </Hero>

      <StatsSection>
        <StatsGrid>
          <StatCard $delay={0}>
            <h3>{consoles.length}</h3>
            <p>Consoles Icônicos</p>
          </StatCard>
          <StatCard $delay={0.1}>
            <h3>{totalGames}</h3>
            <p>Jogos Clássicos</p>
          </StatCard>
          <StatCard $delay={0.2}>
            <h3>{consoles[0].year - consoles[consoles.length - 1].year}+</h3>
            <p>Anos de História</p>
          </StatCard>
          <StatCard $delay={0.3}>
            <h3>{consoles.length * 4}</h3>
            <p>Horas de Diversão</p>
          </StatCard>
        </StatsGrid>
      </StatsSection>

      <Controls>
        {["All", "Nintendo", "Sega", "Atari", "Sony"].map((brand) => (
          <FilterBtn
            key={brand}
            $active={filter === brand}
            onClick={() => setFilter(brand)}
          >
            {brand === "All" ? "✦ TODOS" : brand}
          </FilterBtn>
        ))}
        <SearchInput
          placeholder="🔍 Buscar console..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </Controls>

      <GridCards>
        {filteredConsoles.map((console, index) => (
          <Card key={index} onClick={() => setSelectedIndex(index)}>
            <CardImg src={console.image} alt={console.name} />
            <CardBody>
              <h3>
                {console.name}
                <Star
                  onClick={(e) => toggleFavorite(index, e)}
                  title={favorites[index] ? "Remover dos favoritos" : "Adicionar aos favoritos"}
                >
                  {favorites[index] ? "❤️" : "🤍"}
                </Star>
              </h3>
              <p>{console.desc}</p>
              <RatingStars>
                {[1, 2, 3, 4, 5].map((star) => (
                  <StarButton
                    key={star}
                    onClick={(e) => setRating(index, star, e)}
                    title={`Avaliar ${star} estrela${star > 1 ? 's' : ''}`}
                  >
                    {star <= (ratings[index] || 0) ? "⭐" : "☆"}
                  </StarButton>
                ))}
              </RatingStars>
              <small>🗓️ {console.year}</small>
            </CardBody>
          </Card>
        ))}
      </GridCards>

      <FeaturesSection>
        <SectionTitle>Por Que Retro Games?</SectionTitle>
        <FeaturesGrid>
          <FeatureCard>
            <div className="icon">🎯</div>
            <h3>Histórico Inovador</h3>
            <p>Descubra como cada console revolucionou a indústria de games e conquistou gerações</p>
          </FeatureCard>
          <FeatureCard>
            <div className="icon">💎</div>
            <h3>Títulos Lendários</h3>
            <p>Acesse informações dos games mais icônicos que definiram diferentes épocas do gaming</p>
          </FeatureCard>
          <FeatureCard>
            <div className="icon">🏅</div>
            <h3>Avaliações & Favoritos</h3>
            <p>Salve seus consoles preferidos e avalie cada um de acordo com sua experiência pessoal</p>
          </FeatureCard>
          <FeatureCard>
            <div className="icon">🔍</div>
            <h3>Busca Inteligente</h3>
            <p>Filtre por fabricante ou pesquise o console que você está procurando instantaneamente</p>
          </FeatureCard>
          <FeatureCard>
            <div className="icon">📱</div>
            <h3>Responsivo</h3>
            <p>Explore a coleção em qualquer dispositivo com uma experiência otimizada e fluida</p>
          </FeatureCard>
          <FeatureCard>
            <div className="icon">⚡</div>
            <h3>Performance Ultra</h3>
            <p>Navegação rápida e animações suaves para uma experiência imersiva e agradável</p>
          </FeatureCard>
        </FeaturesGrid>
      </FeaturesSection>

      <Modal $open={selectedIndex !== null}>
        {selectedConsole && (
          <ModalBox>
            <h2>{selectedConsole.name}</h2>
            <img src={selectedConsole.image} alt={selectedConsole.name} />

            <p><strong>Fabricante:</strong> {selectedConsole.brand}</p>
            <p><strong>Lançamento:</strong> {selectedConsole.year}</p>
            <p>{selectedConsole.desc}</p>

            <GamesList>
              <h4>🎮 Jogos Icônicos</h4>
              <ul>
                {selectedConsole.games.map((game, idx) => (
                  <li key={idx}>{game}</li>
                ))}
              </ul>
            </GamesList>

            <button onClick={() => setSelectedIndex(null)}>✕ Fechar</button>
          </ModalBox>
        )}
      </Modal>

      <Footer>
        <FooterContent>
          <FooterSection>
            <h4>🎮 Sobre</h4>
            <p>Retro Games é uma plataforma dedicada a preservar e celebrar a história dos videogames clássicos que revolucionaram a indústria.</p>
          </FooterSection>

          <FooterSection>
            <h4>⚡ Links Rápidos</h4>
            <FooterLink href="#home">↗ Home</FooterLink>
            <FooterLink href="#consoles">▼ Consoles</FooterLink>
            <FooterLink href="#history">◉ História</FooterLink>
            <FooterLink href="#about">✦ Sobre</FooterLink>
          </FooterSection>

          <FooterSection>
            <h4>🎯 Categorias</h4>
            <FooterLink href="#nintendo">Nintendo</FooterLink>
            <FooterLink href="#sega">Sega</FooterLink>
            <FooterLink href="#atari">Atari</FooterLink>
            <FooterLink href="#sony">Sony</FooterLink>
          </FooterSection>

          <FooterSection>
            <h4>📱 Redes Sociais</h4>
            <FooterSocials>
              <FooterSocialIcon href="https://twitter.com" target="_blank" rel="noopener noreferrer" title="Twitter">𝕏</FooterSocialIcon>
              <FooterSocialIcon href="https://instagram.com" target="_blank" rel="noopener noreferrer" title="Instagram">📷</FooterSocialIcon>
              <FooterSocialIcon href="https://youtube.com" target="_blank" rel="noopener noreferrer" title="YouTube">▶</FooterSocialIcon>
              <FooterSocialIcon href="https://discord.com" target="_blank" rel="noopener noreferrer" title="Discord">💬</FooterSocialIcon>
            </FooterSocials>
          </FooterSection>
        </FooterContent>

        <FooterBottom>
          <p>© 2026 RETRO GAMES | Gaming Through the Ages ✧ Designed with 🎮 by Retro Developers</p>
        </FooterBottom>
      </Footer>
    </Container>
  );
}
