import styled from "styled-components";
import { mixins } from "../../styles/mixins";

export const AddTaskForm = styled.form`
  ${mixins.base.alignCenter};
  background-color: ${({ theme }) => theme.colors.bgSecondary};
  border-radius: ${({ theme }) => theme.radius.md};
  // transition: background 0.15s ease-in-out;

  @media (max-width: 768px) {
    margin: 0.5rem 0;
  }

  &:focus-within {
    background-color: ${({ theme }) => theme.colors.bgPrimary};
    ${mixins.base.inputFocus};
  }

  input:focus {
    outline: none;
  }
`;

export const AddTaskInput = styled.input`
  background-color: transparent;
  min-width: 160px;
  flex-grow: 1;
  padding: 0.75rem 1rem;
  ${mixins.typography.h4};

  @media (max-width: 768px) {
    padding: 0.5rem 0.75rem;
  }
`;

export const Select = styled.div`
  margin-right: 0.5rem;
  flex-shrink: 0;
  display: none;

  ${AddTaskForm}:focus-within & {
    display: block;
  }
`;

export const AddTaskButton = styled.div`
  display: none;
  margin-right: 0.5rem;

  ${AddTaskForm}:focus-within & {
    display: flex;
    align-items: center;
  }
`;
