import { createGlobalStyle } from "styled-components";

const Global = createGlobalStyle`
  :root {
    box-sizing: border-box;
  }
  
  *,
  :after,
  :before {
    box-sizing: inherit;
    font: inherit;
    // debug only
    // outline: 1px solid rgba(255, 0, 0, 0.15);
  }
  
  ::-webkit-scrollbar {
      width: 4px;
  }

  ::-webkit-scrollbar-thumb {
      background-color: ${({ theme }) => theme.colors.neutral};
      border-radius: 4px;
  }

  ::-webkit-scrollbar-track {
      background-color: transparent;
  }
  
  html, body {
    font-family: 'JetBrains Mono', sans-serif;
    //font-family: 'Anonymous Pro',  sans-serif;
    font-size: 16px;
    line-height: 1.33;
   }
   
   body {
    overflow: hidden;
   }
   
   a { 
    color: ${({ theme }) => theme.colors.accentPrimary};
    text-decoration: none;
    
    &:hover {
      color: ${({ theme }) => theme.colors.accentPrimaryDark};
    }
   }
   
   input, textarea {
    border: none;
    background-color: ${({ theme }) => theme.colors.bgSecondary};
    border-radius: ${({ theme }) => theme.radius.sm};
    color: ${({ theme }) => theme.colors.bodyPrimary};
   }
`;

export default Global;
