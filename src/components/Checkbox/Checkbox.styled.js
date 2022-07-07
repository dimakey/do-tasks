import styled, { css } from "styled-components";
import { clickAnimation } from "../../styles/animation";
import { priorityTypes } from "../../utils/constants";
import { mixins } from "../../styles/mixins";

const checkmarkColor = (color) => css`
  margin-bottom: 2px;
  transform: rotate(45deg);
  height: 12px;
  width: 6px;
  border-bottom: 2px solid ${color};
  border-right: 2px solid ${color};
`;

export const Checkbox = styled.input.attrs({ type: "checkbox" })`
  appearance: none;
  margin: 0;
  font: inherit;
  color: green;
  cursor: pointer;
  width: 18px;
  height: 18px;
  background-color: transparent;
  border: 2px solid ${({ theme }) => theme.colors.accentPrimary};
  border-radius: ${({ theme }) => theme.radius.sm};
  display: grid;
  place-content: center;

  &::after {
    content: "";
    ${checkmarkColor(({ theme }) => theme.colors.bodyTertiary)};
    opacity: 0;
  }

  &:hover::after {
    content: "";
    ${checkmarkColor(({ theme }) => theme.colors.bodyTertiary)};
    transition: 250ms opacity ease-in-out;
    opacity: 1;
  }

  &:checked {
    border: none;
    background-color: ${({ theme }) => theme.colors.bgTertiary};
    animation-duration: 350ms;
    animation-name: ${clickAnimation};
  }

  &:checked::after {
    content: "";
    ${checkmarkColor(({ theme }) => theme.colors.bgPrimary)};
    opacity: 1;
  }

  &:focus {
    ${mixins.base.inputFocus};
  }

  &:disabled {
    color: gray;
    background-color: ${({ theme }) => theme.colors.bgTertiary};
    cursor: not-allowed;
  }
`;

export const CheckboxGroup = styled.div`
  margin-top: 0.45rem;
`;
