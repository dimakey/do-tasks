import styled from "styled-components";
import { mixins } from "../../styles/mixins";

export const SearchForm = styled.form`
  ${mixins.base.alignCenter};
  flex-grow: 1;
  background-color: rgba(255, 255, 255, 0.1);
  color: rgba(255, 255, 255, 0.5);
  max-width: 320px;
  width: 80px;
  padding: 0.25rem 0.5rem;
  height: 36px;
  border-radius: ${({ theme }) => theme.radius.md};
  transition: all 0.15s ease-in;

  svg {
    color: ${({ theme }) => theme.colors.white};
    opacity: 0.4;
  }

  &:focus-within,
  &:focus,
  &:hover {
    background-color: ${({ theme }) => theme.colors.bgPrimary};
    color: ${({ theme }) => theme.colors.bodyTertiary};

    input {
      color: ${({ theme }) => theme.colors.bodyPrimary};
    }

    svg,
    input::placeholder {
      color: ${({ theme }) => theme.colors.bodyTertiary};
      opacity: 0.9;
    }
  }

  input:focus,
  button:focus {
    outline: none;
  }
`;

export const SearchInput = styled.input`
  min-width: 60px;
  flex-grow: 1;
  color: ${({ theme }) => theme.colors.white};
  background: none;
  border: 0;

  &::placeholder {
    color: ${({ theme }) => theme.colors.white};
    opacity: 0.4;
  }
`;

export const SearchIcon = styled.span`
  display: flex;
  align-items: center;
  margin-right: 0.25rem;
`;
