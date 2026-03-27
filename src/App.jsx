import React, { useState } from "react";
import styled, { keyframes } from "styled-components";

const blink = keyframes`
  0%, 100% { opacity: 1; }
  50% { opacity: 0.7; }
`;

const slideUp = keyframes`
  from { transform: translateY(20px); opacity: 0; }
  to { transform: translateY(0); opacity: 1; }
`;

const Container = styled.div`
  background: linear-gradient(135deg, #f5e6ca, #e8d3a5);
  min-height: 100vh;
  font-family: Georgia, serif;
  color: #3e2c23;
  position: relative;
  &::before {
    content: "";
    position: fixed;
    top: 0; left: 0;
    width: 100%; height: 100%;
    background: repeating-linear-gradient(0deg, rgba(0, 0, 0, 0.08), rgba(0, 0, 0, 0.08) 1px, transparent 1px, transparent 2px);
    pointer-events: none;
    z-index: 1;
  }
`;

const Header = styled.header`
  background: #6f4e37; color: #f5e6ca;
  padding: 20px; text-align: center;
  border-bottom: 4px dashed #3e2c23;
  position: relative; z-index: 2;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.15);
  h1 { margin: 0; font-size: 2.4em;
    text-shadow: 3px 3px 0 #a67c52;
    animation: ${blink} 2s infinite;
    letter-spacing: 1px;
  }
`;

const Nav = styled.nav`
  background: #a67c52; padding: 12px 20px;
  display: flex; justify-content: center; gap: 24px;
  border-bottom: 2px solid #3e2c23; z-index: 2;
  span { cursor: pointer; font-weight: bold; padding: 6px 12px;
    border-radius: 3px; transition: 0.2s ease;
    &:hover { background: #8b6439; color: #f5e6ca; transform: translateY(-2px); }
  }
`;

const Hero = styled.section`
  text-align: center; padding: 40px 20px;
  position: relative; z-index: 2;
  h2 { font-size: 2.6em; margin: 0 0 12px 0; color: #3e2c23;
    text-shadow: 2px 2px 0 #a67c52;
  }
  p { font-size: 1.1em; color: #6f4e37; margin: 0; font-weight: 500; }
`;

const Controls = styled.div`
  display: flex; justify-content: center; align-items: center;
  gap: 12px; margin: 24px; flex-wrap: wrap; position: relative; z-index: 2;
`;

const FilterBtn = styled.button`
  padding: 8px 16px; border: 2px solid #6f4e37;
  background: ${({ active }) => (active ? "#6f4e37" : "#fff8e7")};
  color: ${({ active }) => (active ? "#fff8e7" : "#3e2c23")};
  cursor: pointer; font-weight: 600; border-radius: 4px;
  transition: all 0.2s ease; font-size: 0.95em;
  &:hover { transform: translateY(-3px); box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2); }
  &:active { transform: translateY(-1px); }
`;

const SearchInput = styled.input`
  padding: 8px 14px; border: 2px solid #6f4e37;
  border-radius: 4px; font-size: 0.95em;
  font-family: Georgia, serif; transition: 0.2s ease;
  &::placeholder { color: #a67c52; }
  &:focus { outline: none;
    box-shadow: 0 0 12px rgba(111, 78, 55, 0.4);
    border-color: #3e2c23;
  }
`;

const GridCards = styled.div`
  display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 24px; padding: 32px; position: relative; z-index: 2;
  max-width: 1400px; margin: 0 auto;
  @media (max-width: 768px) { grid-template-columns: 1fr; padding: 20px; }
`;

const Card = styled.div`
  background: #fff8e7; border: 3px solid #6f4e37;
  border-radius: 6px; overflow: hidden; cursor: pointer;
  box-shadow: 4px 4px 0 #a67c52; transition: all 0.3s ease;
  &:hover { transform: translateY(-8px); box-shadow: 6px 12px 0 #a67c52; border-color: #ff6b6b; }
  &:active { transform: translateY(-4px); }
`;

const CardImg = styled.img`
  width: 100%; height: 200px; object-fit: cover; display: block;
  transition: filter 0.3s ease;
  ${Card}:hover & { filter: brightness(1.1) saturate(1.2); }
`;

const CardBody = styled.div`
  padding: 16px;
  h3 { margin: 0 0 8px 0; font-size: 18px; color: #3e2c23;
    display: flex; justify-content: space-between; align-items: center;
  }
  p { margin: 0 0 8px 0; font-size: 14px; color: #6f4e37; line-height: 1.4; }
  small { color: #a67c52; font-weight: 600; }
`;

const Star = styled.span`
  cursor: pointer; font-size: 1.4em; transition: all 0.2s ease;
  &:hover { transform: scale(1.3); filter: drop-shadow(0 0 4px #ff6b6b); }
`;

const Modal = styled.div`
  position: fixed; top: 0; left: 0; width: 100%; height: 100%;
  background: rgba(0, 0, 0, 0.75);
  display: ${({ open }) => (open ? "flex" : "none")};
  align-items: center; justify-content: center; z-index: 1000;
  backdrop-filter: blur(2px);
`;

const ModalBox = styled.div`
  background: #fff8e7; border: 4px solid #6f4e37;
  border-radius: 8px; padding: 28px; max-width: 600px;
  max-height: 85vh; overflow-y: auto; animation: ${slideUp} 0.3s ease;
  box-shadow: 0 0 40px rgba(0, 0, 0, 0.4);
  h2 { margin: 0 0 16px 0; color: #3e2c23; font-size: 2em;
    border-bottom: 2px solid #a67c52; padding-bottom: 12px;
  }
  img { width: 100%; max-height: 300px; border-radius: 6px; margin: 16px 0;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
  }
  p { color: #6f4e37; line-height: 1.7; margin: 12px 0; font-size: 0.95em; }
  strong { color: #3e2c23; font-weight: 700; }
  button { margin-top: 20px; padding: 10px 20px; background: #6f4e37;
    color: #fff8e7; border: none; border-radius: 4px; cursor: pointer;
    font-weight: 600; font-size: 1em; transition: all 0.2s ease;
    &:hover { background: #3e2c23; transform: translateY(-2px);
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    }
    &:active { transform: translateY(0); }
  }
`;

const GamesList = styled.div`
  background: #f0e6d8; padding: 14px; border-radius: 6px; margin: 16px 0;
  border-left: 5px solid #6f4e37;
  h4 { margin: 0 0 10px 0; color: #3e2c23; font-size: 1em; font-weight: 700; }
  ul { margin: 0; padding-left: 24px; list-style-type: disc; }
  li { color: #6f4e37; margin: 6px 0; font-weight: 500; }
`;

const Footer = styled.footer`
  text-align: center; padding: 18px 20px; background: #3e2c23;
  color: #f5e6ca; position: relative; z-index: 2;
  border-top: 4px dashed #6f4e37; font-weight: 600; font-size: 0.9em;
`;

const consoles = [
  {
    name: "Atari 2600",
    brand: "Atari",
    year: 1977,
    desc: "O primeiro console de videogame de sucesso comercial",
    image: "/consoles/atari-2600.png",
    games: ["Pong", "Space Invaders", "Pac-Man", "Adventure"],
  },
  {
    name: "NES",
    brand: "Nintendo",
    year: 1983,
    desc: "Revitalizou a indústria de jogos após a crise de 1983",
    image: "/consoles/nes.png",
    games: ["Super Mario Bros", "The Legend of Zelda", "Metroid", "Contra"],
  },
  {
    name: "Mega Drive",
    brand: "Sega",
    year: 1988,
    desc: "Trouxe gráficos 16-bit para a era de ouro dos arcades",
    image: "/consoles/sega-genesis.jpg",
    games: ["Sonic the Hedgehog", "Shinobi", "Golden Axe", "Streets of Rage"],
  },
  {
    name: "PlayStation 1",
    brand: "Sony",
    year: 1994,
    desc: "Revolucionou os jogos com tecnologia 3D em tempo real",
    image: "/consoles/ps1.jpg",
    games: ["Final Fantasy VII", "Metal Gear Solid", "Resident Evil", "Tekken"],
  },
  {
    name: "Nintendo 64",
    brand: "Nintendo",
    year: 1996,
    desc: "Pioneiro em 3D com controle analógico revolucionário",
    image: "/consoles/nintendo-64.jpg",
    games: ["Super Mario 64", "The Legend of Zelda: OoT", "GoldenEye 007"],
  },
  {
    name: "Game Boy",
    brand: "Nintendo",
    year: 1989,
    desc: "Dominante nos jogos portáteis por duas décadas",
    image: "/consoles/game-boy.jpg",
    games: ["Tetris", "Super Mario Land", "Pokémon Red", "Donkey Kong Land"],
  },
];

export default function App() {
  const [filter, setFilter] = useState("All");
  const [search, setSearch] = useState("");
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [favorites, setFavorites] = useState({});

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

  return (
    <Container>
      <Header>
        <h1>🎮 Vintage Game Archive</h1>
      </Header>

      <Nav>
        <span>📍 Início</span>
        <span>💾 Consoles</span>
        <span>📜 História</span>
        <span>ℹ️ Sobre</span>
      </Nav>

      <Hero>
        <h2>Sistemas de Jogos Clássicos</h2>
        <p>Viaje pela história dos maiores consoles de videogame</p>
      </Hero>

      <Controls>
        {["All", "Nintendo", "Sega", "Atari", "Sony"].map((brand) => (
          <FilterBtn
            key={brand}
            active={filter === brand}
            onClick={() => setFilter(brand)}
          >
            {brand === "All" ? "🌟 Todos" : brand}
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
                  {favorites[index] ? "⭐" : "☆"}
                </Star>
              </h3>
              <p>{console.desc}</p>
              <small>🗓️ {console.year}</small>
            </CardBody>
          </Card>
        ))}
      </GridCards>

      <Modal open={selectedIndex !== null}>
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

      <Footer>© 2026 Retro Gaming Archive 🎮 | Made with ❤️ for retro gamers</Footer>
    </Container>
  );
}
