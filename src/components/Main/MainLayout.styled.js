import styled, { css } from "styled-components";
import { mixins } from "../../styles/mixins";

export const SidebarMobileWrapper = styled.div`
  display: none;

  @media (max-width: 768px) {
    position: absolute;
    display: block;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
    background-color: rgba(0, 0, 0, 0.4);
    z-index: 10;
  }
`;

export const Wrapper = styled.div`
  max-width: 768px;
  height: 100%;
  margin: 0 auto;

  ${mixins.base.wrapperPadding};
  padding-top: 2rem;
`;

export const Content = styled.main`
  background-color: ${({ theme }) => theme.colors.bgPrimary};
  width: 100%;
  overflow-y: scroll;
`;

export const Main = styled.main`
  flex-grow: 1;
  display: grid;
  grid-template-columns: 280px auto;
  grid-template-rows: auto;
  overflow: hidden;
  background-color: ${({ theme }) => theme.colors.bgSecondary};

  aside {
    transition: transform 250ms, opacity 250ms ease-in;
  }

  @media (max-width: 768px) {
    grid-template-columns: auto;

    aside {
      position: absolute;
      top: 64px;
      left: 0;
      width: 280px;
      height: calc(100% - 64px);
    }
  }

  ${({ isSidebarShown }) => {
    return isSidebarShown
      ? css`
          grid-template-columns: 280px auto;

          aside {
            opacity: 1;
            transform: translateX(0);
          }
        `
      : css`
          grid-template-columns: 0 auto;

          aside {
            opacity: 0;
            transform: translateX(-280px);
          }
        `;
  }};
`;
