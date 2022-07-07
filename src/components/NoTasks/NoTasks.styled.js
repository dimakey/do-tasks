import styled from "styled-components";
import { mixins } from "../../styles/mixins";

export const Wrapper = styled.div`
  ${mixins.base.alignCenter};
  flex-direction: column;
  padding: 1rem;
`;

export const Img = styled.img`
  margin-bottom: 1rem;
  max-width: 280px;
`;

export const Title = styled.h3`
  ${mixins.typography.h3};
  margin-bottom: 0.175rem;
`;

export const SubTitle = styled.p`
  color: ${({ theme }) => theme.colors.bodySecondary};
  text-align: center;
`;
