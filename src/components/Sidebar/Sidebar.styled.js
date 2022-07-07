import styled from "styled-components";
import IconButton from "../IconButton/IconButton";
import { mixins } from "../../styles/mixins";

export const Sidebar = styled.aside`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  width: 280px;
  background-color: ${({ theme }) => theme.colors.bgSecondary};
  border-top: 1px solid ${({ theme }) => theme.colors.bgPrimary};

  height: 100vh;
  z-index: 100;
`;

export const Menu = styled.div`
  padding: 1rem;
  height: calc(100% - 128px);
  overflow-y: scroll;

  @media (max-width: 768px) {
    height: calc(100% - 64px);
  }
`;

export const StickyButton = styled.div`
  padding: 1rem;
  height: 128px;

  @media (max-width: 768px) {
    height: 64px;
  }

  button {
    width: 100%;
  }
`;

export const MenuTitle = styled.h4`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 0.75rem;
  color: ${({ theme }) => theme.colors.bodyTertiary};
  border-bottom: 1px solid ${({ theme }) => theme.colors.bgTertiary};

  ${mixins.typography.h5};
`;

export const MenuList = styled.ul`
  margin: 1rem 0;

  &:last-child {
    margin-bottom: 0;
  }
`;

export const MenuItem = styled.li`
  &:not(:last-child) {
    margin-bottom: 0.25rem;
  }

  // router NavLink styling
  .active {
    background-color: ${({ theme }) => theme.colors.bgPrimary};

    svg {
      color: ${({ theme }) => theme.colors.accentPrimary};
    }
  }

  a {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0.2rem 0.75rem;
    gap: 0.5rem;
    color: ${({ theme }) => theme.colors.bodyPrimary};
    font-size: 1rem;
    font-weight: ${mixins.fontWeight.semibold};
    text-decoration: none;
    border-radius: ${({ theme }) => theme.radius.md};

    &:hover {
      background-color: ${({ theme }) => theme.colors.bgPrimary};
      cursor: pointer;

      svg {
        color: ${({ theme }) => theme.colors.accentPrimary};
      }
    }

    &:focus {
      ${mixins.base.inputFocus};
    }
  }
`;

export const MenuItemCount = styled.span`
  background-color: ${({ theme }) => theme.colors.bgSecondary};
  color: ${({ theme }) => theme.colors.bodySecondary};
  border-radius: 8px;
  padding: 4px 8px;
  font-size: 0.75rem;
`;

export const MenuItemIcon = styled.div`
  ${mixins.base.alignCenter};
  flex-shrink: 0;

  svg {
    color: ${({ theme }) => theme.colors.bodyTertiary};
  }
`;

export const MenuItemText = styled.p`
  flex-grow: 1;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;

export const MenuItemTextTag = styled(MenuItemText)`
  font-size: 0.875rem;
`;

export const MenuItemButton = styled(IconButton).attrs({
  variant: "text",
  size: "none",
})`
  flex-shrink: 0;
  display: flex;

  svg {
    color: ${({ theme }) => theme.colors.bodyTertiary};
    stroke-width: 1.5;
  }
`;
