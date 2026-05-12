import styled from "styled-components";
import { fadeInUp, countUp, pulse } from "./animations";

export const Container = styled.div`
  position: relative;
  z-index: 1;
`;

export const Header = styled.header`
  background: linear-gradient(135deg, #0a0e27 0%, #16213e 100%);
  padding: 40px 20px; 
  text-align: center;
  border-bottom: 2px solid #00ffff;
  position: relative; 
  z-index: 2;
  box-shadow: 0 0 20px rgba(0, 255, 255, 0.2);
  overflow: hidden;
  
  h1 { 
    margin: 0 0 8px 0; 
    font-size: 48px;
    font-weight: 700;
    letter-spacing: 1px;
    position: relative;
    z-index: 1;
    color: #ffff00;
    text-shadow: 0 0 10px rgba(255, 255, 0, 0.5);
  }

  .header-subtitle {
    font-size: 13px;
    font-weight: 600;
    color: #00ffff;
    margin: 0;
    position: relative;
    z-index: 1;
    letter-spacing: 1px;
    text-transform: uppercase;
  }
`;

export const Nav = styled.nav`
  background: linear-gradient(90deg, #0a0e27 0%, #16213e 100%);
  backdrop-filter: blur(10px);
  padding: 16px 20px;
  display: flex; 
  justify-content: center; 
  gap: 16px;
  border-bottom: 2px solid #00ffff;
  border-top: 2px solid #ff00ff;
  z-index: 2;
  flex-wrap: wrap;
  box-shadow: 0 0 20px rgba(0, 255, 255, 0.2);
  
  span { 
    cursor: pointer; 
    font-weight: 700; 
    padding: 12px 24px;
    border-radius: 4px; 
    transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
    color: #00ffff;
    background: rgba(0, 255, 255, 0.05);
    border: 2px solid #00ffff;
    font-size: 14px;
    text-transform: uppercase;
    letter-spacing: 1px;
    text-shadow: 0 0 5px #00ffff;
    
    &:hover { 
      background: rgba(255, 0, 255, 0.15);
      border-color: #ff00ff;
      color: #ffff00;
      box-shadow: 
        0 0 10px #00ffff,
        0 0 20px #ff00ff,
        inset 0 0 10px rgba(255, 0, 255, 0.2);
      transform: scale(1.05);
      text-shadow: 0 0 10px #ff00ff;
    }
  }
`;

export const Hero = styled.section`
  text-align: center; 
  padding: 80px 20px 60px;
  position: relative; 
  z-index: 2;
  background: linear-gradient(180deg, rgba(0, 255, 255, 0.05) 0%, rgba(255, 0, 255, 0.03) 100%);
  border-bottom: 2px solid #ff00ff;
  
  h2 { 
    font-size: 56px; 
    margin: 0 0 20px 0; 
    color: #ffff00;
    font-weight: 900;
    letter-spacing: 2px;
    text-shadow: 
      0 0 10px #ffff00,
      0 0 20px #ff00ff,
      0 0 30px #00ffff;
    line-height: 1.2;
    text-transform: uppercase;
  }
  
  p { 
    font-size: 18px; 
    color: #00ffff; 
    margin: 0; 
    font-weight: 600;
    max-width: 700px;
    margin: 0 auto;
    line-height: 1.6;
    text-shadow: 0 0 5px #00ffff;
    letter-spacing: 0.5px;
  }
  
  > div {
    margin-top: 30px;
    display: flex;
    justify-content: center;
    gap: 12px;
    flex-wrap: wrap;
    
    span {
      display: inline-block;
      background: rgba(255, 0, 255, 0.1);
      padding: 10px 18px;
      border-radius: 0;
      font-size: 14px;
      font-weight: 700;
      color: #ffff00;
      border: 2px solid #ff00ff;
      text-shadow: 0 0 5px #ff00ff;
      box-shadow: 0 0 10px rgba(255, 0, 255, 0.3);
      transition: all 0.3s ease;
      text-transform: uppercase;
      letter-spacing: 1px;
      
      &:hover {
        background: rgba(255, 0, 255, 0.2);
        box-shadow: 0 0 20px rgba(255, 0, 255, 0.5);
        transform: scale(1.05);
      }
    }
  }
`;

export const Controls = styled.div`
  display: flex; 
  justify-content: center; 
  align-items: center;
  gap: 16px; 
  margin: 40px 20px; 
  flex-wrap: wrap; 
  position: relative; 
  z-index: 2;
  padding: 20px;
  background: rgba(0, 255, 255, 0.02);
  border-top: 2px solid #00ffff;
  border-bottom: 2px solid #ff00ff;
`;

export const FilterBtn = styled.button`
  padding: 12px 24px; 
  border: 3px solid #00ffff;
  background: rgba(0, 255, 255, 0.05);
  color: #00ffff;
  cursor: pointer; 
  font-weight: 700; 
  border-radius: 0;
  transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
  font-size: 14px;
  font-family: 'Courier New', monospace;
  backdrop-filter: blur(10px);
  text-transform: uppercase;
  letter-spacing: 1px;
  text-shadow: 0 0 5px #00ffff;
  box-shadow: 0 0 10px rgba(0, 255, 255, 0.2);
  
  ${({ $active }) => $active && `
    background: linear-gradient(135deg, rgba(255, 0, 255, 0.3), rgba(0, 255, 255, 0.2));
    border-color: #ff00ff;
    color: #ffff00;
    box-shadow: 0 0 20px rgba(255, 0, 255, 0.6);
    text-shadow: 0 0 10px #ff00ff;
  `}
  
  &:hover { 
    border-color: #ff00ff;
    background: rgba(255, 0, 255, 0.2);
    box-shadow: 0 0 20px rgba(255, 0, 255, 0.5);
    transform: scale(1.05);
    color: #ffff00;
  }
  &:active { transform: scale(0.98); }
`;

export const SearchInput = styled.input`
  padding: 12px 20px; 
  border: 3px solid #00ffff;
  border-radius: 0; 
  font-size: 15px;
  font-family: 'Courier New', monospace; 
  transition: all 0.3s ease;
  background: rgba(0, 255, 255, 0.05);
  color: #00ffff;
  backdrop-filter: blur(10px);
  text-transform: uppercase;
  letter-spacing: 1px;
  box-shadow: 0 0 10px rgba(0, 255, 255, 0.2);
  
  &::placeholder { 
    color: #00ffff88; 
    text-shadow: 0 0 3px #00ffff;
  }
  
  &:focus { 
    outline: none;
    box-shadow: 0 0 20px rgba(0, 255, 255, 0.5), 0 0 40px rgba(255, 0, 255, 0.3);
    border-color: #ff00ff;
    background: rgba(255, 0, 255, 0.1);
    color: #ffff00;
  }
`;

export const GridCards = styled.div`
  display: grid; 
  grid-template-columns: repeat(3, 1fr);
  gap: 32px; 
  padding: 40px; 
  position: relative; 
  z-index: 2;
  max-width: 1400px; 
  margin: 0 auto;
  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 768px) { 
    grid-template-columns: 1fr; 
    padding: 24px; 
    gap: 24px;
  }
`;

export const Card = styled.div`
  background: linear-gradient(135deg, #16213e 0%, #0f3460 100%);
  backdrop-filter: blur(10px);
  border: 3px solid #00ffff;
  border-radius: 0;
  overflow: hidden; 
  cursor: pointer;
  box-shadow: 
    0 0 20px rgba(0, 255, 255, 0.3),
    inset 0 0 20px rgba(0, 255, 255, 0.1),
    0 0 40px rgba(255, 0, 255, 0.2);
  transition: all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
  position: relative;
  
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: repeating-linear-gradient(
      0deg,
      rgba(255, 0, 255, 0.03) 0px,
      rgba(255, 0, 255, 0.03) 2px,
      transparent 2px,
      transparent 4px
    );
    pointer-events: none;
    z-index: 1;
    animation: scanlines 0.15s linear infinite;
  }
  
  @keyframes scanlines {
    0% { transform: translateY(0); }
    100% { transform: translateY(4px); }
  }
  
  &:hover { 
    transform: translateY(-12px) scale(1.02);
    border-color: #ff00ff;
    box-shadow: 
      0 0 30px rgba(255, 0, 255, 0.6),
      0 0 60px rgba(0, 255, 255, 0.3),
      inset 0 0 20px rgba(255, 0, 255, 0.2);
  }
  &:active { transform: translateY(-4px); }
`;

export const CardImg = styled.img`
  width: 100%; 
  height: 220px; 
  object-fit: cover; 
  display: block;
  transition: filter 0.4s ease;
  ${Card}:hover & { 
    filter: brightness(1.1) saturate(1.2);
  }
`;

export const CardBody = styled.div`
  padding: 24px;
  position: relative;
  z-index: 2;
  
  h3 { 
    margin: 0 0 12px 0; 
    font-size: 22px; 
    color: #ffff00;
    display: flex; 
    justify-content: space-between; 
    align-items: center;
    font-weight: 700;
    text-shadow: 0 0 5px #ffff00;
    text-transform: uppercase;
    letter-spacing: 1px;
  }
  
  p { 
    margin: 0 0 12px 0; 
    font-size: 15px; 
    color: #00ffff; 
    line-height: 1.6;
    text-shadow: 0 0 3px #00ffff;
  }
  
  small { 
    color: #ff00ff; 
    font-weight: 700;
    display: block;
    margin-top: 12px;
    text-shadow: 0 0 3px #ff00ff;
    text-transform: uppercase;
  }
`;

export const Star = styled.span`
  cursor: pointer; 
  font-size: 22px; 
  transition: all 0.3s ease;
  &:hover { 
    transform: scale(1.3) rotate(15deg);
    filter: drop-shadow(0 0 8px #a855f7);
  }
`;

export const Modal = styled.div`
  position: fixed; 
  top: 0; 
  left: 0; 
  width: 100%; 
  height: 100%;
  background: rgba(0, 0, 0, 0.8);
  display: ${({ $open }) => ($open ? "flex" : "none")};
  align-items: center; 
  justify-content: center; 
  z-index: 1000;
  backdrop-filter: blur(8px);
`;

export const ModalBox = styled.div`
  background: linear-gradient(135deg, #16213e 0%, #0f3460 100%);
  backdrop-filter: blur(20px);
  border: 3px solid #00ffff;
  border-radius: 0; 
  padding: 40px; 
  max-width: 650px;
  max-height: 85vh; 
  overflow-y: auto; 
  animation: ${fadeInUp} 0.4s ease;
  box-shadow: 
    0 0 40px rgba(0, 255, 255, 0.4),
    0 0 80px rgba(255, 0, 255, 0.2);
  
  h2 { 
    margin: 0 0 20px 0; 
    color: #ffff00; 
    font-size: 35px;
    border-bottom: 2px solid #ff00ff;
    padding-bottom: 16px;
    font-weight: 900;
    text-shadow: 0 0 10px #ffff00;
    text-transform: uppercase;
    letter-spacing: 1px;
  }
  
  img { 
    width: 100%; 
    max-height: 320px; 
    border-radius: 0; 
    margin: 20px 0;
    box-shadow: 0 0 30px rgba(0, 255, 255, 0.3);
    border: 2px solid #00ffff;
  }
  
  p { 
    color: #00ffff; 
    line-height: 1.8; 
    margin: 16px 0; 
    font-size: 15px;
    text-shadow: 0 0 3px #00ffff;
  }
  
  strong { 
    color: #ffff00; 
    font-weight: 900;
    text-shadow: 0 0 5px #ffff00;
  }
  
  button { 
    margin-top: 24px; 
    padding: 12px 28px; 
    background: linear-gradient(135deg, #ff00ff, #00ffff);
    color: #000000; 
    border: none; 
    border-radius: 0;
    cursor: pointer;
    font-weight: 900; 
    font-size: 15px; 
    transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
    font-family: 'Courier New', monospace;
    text-transform: uppercase;
    letter-spacing: 1px;
    box-shadow: 0 0 20px rgba(255, 0, 255, 0.5);
    
    &:hover { 
      transform: scale(1.05);
      box-shadow: 0 0 40px rgba(255, 0, 255, 0.7);
    }
    &:active { transform: scale(0.98); }
  }
`;

export const GamesList = styled.div`
  background: linear-gradient(135deg, rgba(0, 255, 255, 0.08), rgba(255, 0, 255, 0.08));
  backdrop-filter: blur(10px);
  padding: 20px; 
  border-radius: 0; 
  margin: 20px 0;
  border: 2px solid #00ffff;
  box-shadow: 0 0 20px rgba(0, 255, 255, 0.2);
  
  h4 { 
    margin: 0 0 12px 0; 
    color: #ffff00; 
    font-size: 18px; 
    font-weight: 700;
    text-shadow: 0 0 5px #ffff00;
    text-transform: uppercase;
  }
  
  ul { 
    margin: 0; 
    padding-left: 24px; 
    list-style-type: disc;
  }
  
  li { 
    color: #00ffff; 
    margin: 8px 0; 
    font-weight: 500;
    text-shadow: 0 0 3px #00ffff;
  }
`;

export const Footer = styled.footer`
  background: linear-gradient(135deg, #0a0e27 0%, #16213e 50%, #0f3460 100%);
  backdrop-filter: blur(10px);
  border-top: 3px solid #ff00ff;
  position: relative;
  z-index: 2;
  overflow: hidden;
  box-shadow: 
    0 0 30px rgba(255, 0, 255, 0.3),
    inset 0 1px 0 rgba(255, 0, 255, 0.2);

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: repeating-linear-gradient(
      0deg,
      rgba(255, 0, 255, 0.02) 0px,
      rgba(255, 0, 255, 0.02) 2px,
      transparent 2px,
      transparent 4px
    );
    pointer-events: none;
    animation: scanlines 0.15s linear infinite;
  }

  @keyframes scanlines {
    0% { transform: translateY(0); }
    100% { transform: translateY(4px); }
  }
`;

export const FooterContent = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  padding: 60px 40px 40px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 40px;
  position: relative;
  z-index: 1;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
    padding: 40px 30px 30px;
    gap: 30px;
  }

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
    padding: 30px 20px 20px;
    gap: 30px;
  }
`;

export const FooterSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;

  h4 {
    font-size: 16px;
    color: #ffff00;
    margin: 0 0 16px 0;
    font-weight: 900;
    text-shadow: 0 0 10px #ffff00;
    text-transform: uppercase;
    letter-spacing: 1px;
    border-bottom: 2px solid #ff00ff;
    padding-bottom: 8px;
  }

  p {
    font-size: 14px;
    color: #00ffff;
    margin: 0;
    line-height: 1.6;
    text-shadow: 0 0 3px #00ffff;
  }
`;

export const FooterLink = styled.a`
  color: #00ffff;
  text-decoration: none;
  font-size: 14px;
  font-weight: 600;
  transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
  text-shadow: 0 0 3px #00ffff;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 8px;
  text-transform: uppercase;
  letter-spacing: 0.5px;

  &:hover {
    color: #ffff00;
    text-shadow: 0 0 10px #ff00ff;
    transform: translateX(4px);
  }
`;

export const FooterSocials = styled.div`
  display: flex;
  gap: 16px;
  margin-top: 8px;
  flex-wrap: wrap;
`;

export const FooterSocialIcon = styled.a`
  font-size: 24px;
  transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
  filter: drop-shadow(0 0 5px rgba(255, 0, 255, 0.5));
  cursor: pointer;
  text-decoration: none;

  &:hover {
    font-size: 28px;
    filter: drop-shadow(0 0 15px rgba(255, 0, 255, 0.8));
    transform: translateY(-4px);
  }
`;

export const FooterBottom = styled.div`
  position: relative;
  z-index: 1;
  text-align: center;
  padding: 24px 20px;
  border-top: 2px solid #00ffff;
  color: #00ffff;
  font-weight: 600;
  font-size: 13px;
  text-shadow: 0 0 5px #00ffff;
  text-transform: uppercase;
  letter-spacing: 1px;
  background: rgba(10, 14, 39, 0.5);

  p {
    margin: 0;
  }
`;

export const StatsSection = styled.section`
  position: relative; 
  z-index: 2;
  padding: 60px 40px;
  max-width: 1400px; 
  margin: 40px auto;
  @media (max-width: 768px) { 
    padding: 40px 20px;
  }
`;

export const StatsGrid = styled.div`
  display: grid; 
  grid-template-columns: repeat(4, 1fr);
  gap: 24px;
  @media (max-width: 1200px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`;

export const StatCard = styled.div`
  background: linear-gradient(135deg, rgba(0, 255, 255, 0.08), rgba(255, 0, 255, 0.08));
  backdrop-filter: blur(10px);
  border: 2px solid #00ffff;
  border-radius: 0; 
  padding: 32px;
  text-align: center;
  animation: ${countUp} 0.6s ease forwards, ${pulse} 2s ease-in-out infinite;
  animation-delay: ${props => props.$delay || 0}s, 0s;
  box-shadow: 0 0 20px rgba(0, 255, 255, 0.2);
  
  &:hover {
    border-color: #ff00ff;
    box-shadow: 0 0 30px rgba(255, 0, 255, 0.4);
  }
  
  h3 { 
    margin: 0 0 8px 0;
    font-size: 44px;
    color: #ffff00;
    font-weight: 900;
    text-shadow: 0 0 10px #ffff00;
    text-transform: uppercase;
  }
  
  p { 
    margin: 0;
    color: #00ffff;
    font-weight: 700;
    text-shadow: 0 0 5px #00ffff;
    text-transform: uppercase;
    letter-spacing: 1px;
  }
`;

export const RatingStars = styled.div`
  display: flex;
  justify-content: center;
  gap: 6px;
  margin-top: 12px;
`;

export const StarButton = styled.button`
  background: none;
  border: none;
  font-size: 28px;
  cursor: pointer;
  transition: all 0.2s ease;
  filter: drop-shadow(0 0 5px rgba(255, 0, 255, 0.5));
  
  &:hover {
    transform: scale(1.4) rotate(15deg);
    filter: drop-shadow(0 0 15px rgba(255, 0, 255, 0.8));
  }
  
  &:active {
    transform: scale(1.15);
  }
`;

export const FeaturesSection = styled.section`
  position: relative;
  z-index: 2;
  padding: 80px 20px;
  background: linear-gradient(135deg, rgba(0, 255, 255, 0.05), rgba(255, 0, 255, 0.05));
  max-width: 1400px;
  margin: 60px auto;
  border-radius: 0;
  border: 2px solid #00ffff;
  box-shadow: 0 0 30px rgba(0, 255, 255, 0.2);
`;

export const SectionTitle = styled.h2`
  text-align: center;
  font-size: 44px;
  font-weight: 900;
  margin: 0 0 50px 0;
  color: #ffff00;
  text-shadow: 0 0 10px #ffff00, 0 0 20px #ff00ff;
  text-transform: uppercase;
  letter-spacing: 2px;
`;

export const FeaturesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 32px;
  padding: 0 20px;
  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 600px) {
    grid-template-columns: 1fr;
    gap: 24px;
    padding: 0;
  }
`;

export const FeatureCard = styled.div`
  background: linear-gradient(135deg, rgba(0, 255, 255, 0.08), rgba(255, 0, 255, 0.08));
  backdrop-filter: blur(10px);
  border: 2px solid #00ffff;
  border-radius: 0;
  padding: 40px 28px;
  text-align: center;
  transition: all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
  box-shadow: 0 0 20px rgba(0, 255, 255, 0.2);
  
  &:hover {
    transform: translateY(-12px);
    box-shadow: 0 0 40px rgba(255, 0, 255, 0.5);
    border-color: #ff00ff;
  }
  
  .icon {
    font-size: 48px;
    margin-bottom: 16px;
    display: inline-block;
    filter: drop-shadow(0 0 10px rgba(255, 0, 255, 0.5));
  }
  
  h3 {
    font-size: 22px;
    font-weight: 700;
    color: #ffff00;
    margin: 0 0 12px 0;
    text-shadow: 0 0 5px #ffff00;
    text-transform: uppercase;
    letter-spacing: 1px;
  }
  
  p {
    font-size: 15px;
    color: #00ffff;
    margin: 0;
    line-height: 1.6;
    text-shadow: 0 0 3px #00ffff;
  }
`;
