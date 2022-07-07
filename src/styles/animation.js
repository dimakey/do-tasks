import { keyframes } from "styled-components";

export const clickAnimation = keyframes`
 0% { transform: scale(1); }
 50% { transform: scale(1.25) }
 75% { transform: scale(0.9) }
 100% { transform: scale(1) }
`;

export const sidebarAnimation = keyframes`
  0% {
    opacity: 0;
    transform: translateX(0);
    }
  75% {
    opacity: 0.75;
    transform: translateX(-300px);
  }
  100% {
    opacity: 1;
    transform: translateX(-280px):
    }
`;
