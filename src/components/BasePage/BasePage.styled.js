import styled, { css } from "styled-components";
import { mixins } from "../../styles/mixins";

// --- Constants for better maintainability (No more "magic numbers") ---
const ICON_CONTAINER_SIZE = {
  desktop: "48px",
  mobile: "40px",
};

const ICON_SVG_SIZE = {
  desktop: "32px",
  mobile: "24px",
};


// --- Base Styles for Reusability (DRY Principle) ---
const BaseHeadlineText = css`
  ${mixins.typography.h1};
`;


// --- Styled Components (Grouped under a namespace for clarity) ---

// Using a namespace 'S' (for Styles) is a common pattern to avoid naming
// conflicts and make it clear in the JSX that you're using a styled component.
export const S = {
  // Renamed from Header for clarity. 'Wrapper' or 'Container' is more descriptive
  // for a top-level element.
  Wrapper: styled.div`
    /* This component can hold styles for the entire component block */
  `,

  Headline: styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 1rem;
  `,

  // Extend a base style to keep Title and Subtitle related and DRY.
  Title: styled.h1`
    ${BaseHeadlineText};
    margin-right: auto; /* Pushes subsequent elements to the right */
  `,

  // Using a <p> tag is more semantically correct for a subtitle than a <span>.
  Subtitle: styled.p`
    ${BaseHeadlineText};
    flex-grow: 1;
    font-weight: ${mixins.fontWeight.regular};
    margin: 0 0.5rem;
    color: ${({ theme }) => theme.colors.bodyTertiary};
  `,

  TaskList: styled.ul`
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    margin-top: 1rem;
  `,

  TitleIcon: styled.div`
    ${mixins.base.alignCenter};
    flex: 0 0 auto; /* Prevents the icon from shrinking or growing */

    background-color: ${({ theme }) => theme.colors.bgSecondary};
    border-radius: ${({ theme }) => theme.radius.xlg};
    margin-right: 0.75rem;

    width: ${ICON_CONTAINER_SIZE.desktop};
    height: ${ICON_CONTAINER_SIZE.desktop};

    svg {
      color: ${({ theme }) => theme.colors.accentPrimary};
      width: ${ICON_SVG_SIZE.desktop};
      height: ${ICON_SVG_SIZE.desktop};
    }

    @media (max-width: 425px) {
      margin-right: 0.5rem;
      width: ${ICON_CONTAINER_SIZE.mobile};
      height: ${ICON_CONTAINER_SIZE.mobile};

      svg {
        width: ${ICON_SVG_SIZE.mobile};
        height: ${ICON_SVG_SIZE.mobile};
      }
    }
  `,
};