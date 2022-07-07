import styled from "styled-components";
import { mixins } from "../../styles/mixins";

// Icon in react-select
export const StyledControl = styled.div`
  ${mixins.base.alignCenter};

  svg {
    flex-shrink: 0;
  }
`;
