import { css } from "styled-components";

const fontWeight = {
  regular: 400,
  semibold: 500,
  bold: 600,
  extraBold: 700,
};

const mediaBreakpoints = {
  mobile: "425px",
  tablet: "768px",
  desktop: "1440px",
};

const typography = {
  h1: css`
    font-size: 1.75rem;
    font-weight: ${fontWeight.bold};

    @media (max-width: 768px) {
      font-size: 1.5rem;
    }

    @media (max-width: 425px) {
      font-size: 1.25rem;
    }
  `,
  h2: css`
    font-size: 1.5rem;
    font-weight: ${fontWeight.bold};
  `,
  h3: css`
    font-size: 1.25rem;
    font-weight: ${fontWeight.bold};
  `,
  h4: css`
    font-size: 1.15rem;
    font-weight: ${fontWeight.semibold};

    @media (max-width: 425px) {
      font-size: 1rem;
    }
  `,
  h5: css`
    font-size: 0.875rem;
    font-weight: ${fontWeight.regular};
  `,
};

const base = {
  wrapperPadding: css`
    padding: 1rem;

    @media (max-width: 768px) {
      padding: 0.75rem;
    }
  `,
  alignCenter: css`
    display: flex;
    align-items: center;
    justify-content: center;
  `,

  inputFocus: css`
    outline: 2px solid hsla(145, 63%, 42%, 0.6);
  `,
};

const shadow = {
  tiny: css`
    box-shadow: rgba(17, 17, 26, 0.1) 0 1px 0;
  `,
  small: css`
    box-shadow: 0 4px 4px rgba(0, 0, 0, 0.05), 0 20px 31px rgba(0, 0, 0, 0.05),
      0 0 15px 5px rgba(0, 0, 0, 0.02);
  `,
};

const others = {};

export const mixins = {
  typography,
  mediaBreakpoints,
  base,
  shadow,
  others,
  fontWeight,
};
