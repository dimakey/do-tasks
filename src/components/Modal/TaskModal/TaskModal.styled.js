import styled from "styled-components";
import { mixins } from "../../../styles/mixins";

export const SelectGroup = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 0.75rem;
  gap: 0.75rem;
`;

export const TaskTextArea = styled.textarea`
  padding: 0.75rem;
  resize: none;

  &:focus {
    ${mixins.base.inputFocus};
  }
`;
