import Button from "../Button/Button";

export const IconButton = styled(Button)`
  flex-shrink: 0;
    
  svg {
    margin: 0;
  }
    
  ${({ circle }) =>
    circle &&
    css`
      border-radius: ${({ theme }) => theme.radius.circle};
    `}

  ${({ size }) => {
    switch (size) {
      case "sm":
        return css`
          width: 32px;
          height: 32px;
          padding: 0.2rem;
        `;
      case "md":
        return css`
          width: 40px;
          height: 40px;
          padding: 0.25rem;
        `;
      case "lg":
        return css`
          width: 48px;
          height: 48px;
          padding: 0.5rem;
        `;
      default:
        return;
    }
  }}}
`;
