import styled, { css } from "styled-components";
import { mixins } from "../../styles/mixins";

const buttonSize = ({ size }) => {
  switch (size) {
    case "none":
      return css`
        padding: 0;
      `;
    case "sm":
      return css`
        padding: 0.25rem 0.75rem;
        font-size: 0.875rem;

        svg {
          width: 16px;
          height: 16px;
        }
      `;
    case "md":
      return css`
        padding: 0.4rem 0.8rem;
        font-size: 1rem;

        svg {
          width: 20px;
          height: 20px;
        }
      `;
    case "lg":
      return css`
        padding: 0.8rem 1.6rem;
        font-size: 1.25rem;

        svg {
          width: 24px;
          height: 24px;
        }
      `;
    default:
      return;
  }
};
const buttonVariants = ({ variant, color, theme }) => {
  const fromColorProp = (colorProp) => {
    switch (colorProp) {
      case "danger":
      case "error":
        return {
          color: theme.colors.danger,
          colorHover: theme.colors.dangerDark,
        };
      case "success":
        return {
          color: theme.colors.accentPrimary,
          colorHover: theme.colors.accentPrimaryDark,
        };
      case "secondary":
        return {
          text: theme.colors.bodySecondary,
          color: theme.colors.bgSecondary,
          colorHover: theme.colors.bgTertiary,
        };
      case "primary":
      default:
        return {
          color: theme.colors.accentPrimary,
          colorHover: theme.colors.accentPrimaryDark,
        };
    }
  };

  switch (variant) {
    case "outline":
      return css`
        background-color: transparent;
        color: ${fromColorProp(color)?.text || fromColorProp(color).color};
        border: 2px solid ${fromColorProp(color).color};

        &:hover {
          border-color: ${fromColorProp(color).colorHover};
          color:  ${
            fromColorProp(color)?.text || fromColorProp(color).colorHover
          };};
        }
      `;

    case "text":
      return css`
        background-color: transparent;
        color: ${fromColorProp(color)?.text || fromColorProp(color).color};

        &:hover {
          color: ${fromColorProp(color)?.text || fromColorProp(color).color};
          background-color: ${theme.colors.bgSecondary};
        }

        &:active {
          background-color: ${theme.colors.bgTertiary};
        }
      `;

    case "filled":
    default:
      return css`
        background-color: ${fromColorProp(color).color};
        color: ${fromColorProp(color)?.text || "#fff"};

        &:hover {
          background-color: ${fromColorProp(color).colorHover};
          box-shadow: none;
        }

        &:active {
        }
      `;
  }
};

export const Button = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: white;
  border: 2px solid transparent;
  border-radius: ${({ theme }) => theme.radius.sm};
  cursor: pointer;
  white-space: nowrap;

  &:focus {
    ${mixins.base.inputFocus};
  }

  svg {
    margin-right: 0.5rem;
    stroke-width: 1.5;
  }

  /* Button Size */
  ${(props) => buttonSize(props)}

  /* Button Variants */
  ${(props) => buttonVariants(props)}
  
  ${({ disableHover }) =>
    disableHover &&
    css`
      &:active,
      &:hover {
        background-color: transparent;
      }
    `}
  
  /* Disabled state */
  ${({ disabled }) =>
    disabled &&
    css`
      background-color: ${({ theme }) => theme.colors.bgSecondary};
      border-color: ${({ theme }) => theme.colors.bgSecondary};
      color: ${({ theme }) => theme.colors.bodySecondary};
      box-shadow: initial;

      opacity: 0.5;
      cursor: not-allowed;

      &:hover,
      &:active {
        background-color: ${({ theme }) => theme.colors.bgSecondary};
        border-color: ${({ theme }) => theme.colors.bgSecondary};
        color: ${({ theme }) => theme.colors.bodySecondary};
      }
    `}
`;

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
    }
  }}}
`;
