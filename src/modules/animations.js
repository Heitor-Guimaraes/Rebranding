import { keyframes } from "styled-components";

export const fadeInUp = keyframes`
  from { opacity: 0; transform: translateY(30px); }
  to { opacity: 1; transform: translateY(0); }
`;

export const countUp = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`;

export const pulse = keyframes`
  0%, 100% { box-shadow: 0 8px 32px rgba(99, 102, 241, 0.1); }
  50% { box-shadow: 0 8px 32px rgba(168, 85, 247, 0.25); }
`;
