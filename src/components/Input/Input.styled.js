import styled from "styled-components";
import { mixins } from "../../styles/mixins";

export const Input = styled.input`
  padding: 0.5rem 1rem;

  &:focus {
    ${mixins.base.inputFocus};
  }
`;
