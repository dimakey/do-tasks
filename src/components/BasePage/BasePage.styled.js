import styled from "styled-components";
import { mixins } from "../../styles/mixins";

export const Header = styled.div``;

export const Headline = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  margin-bottom: 1rem;
`;

export const Title = styled.h1`
  margin-right: auto;
  ${mixins.typography.h1};
`;

export const Subtitle = styled.span`
  ${mixins.typography.h1};
  flex-grow: 1;
  font-weight: ${mixins.fontWeight.regular};
  margin: 0 0.5rem;
  color: ${({ theme }) => theme.colors.bodyTertiary};
`;

export const TaskList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin-top: 1rem;
`;

export const TitleIcon = styled.div`
  ${mixins.base.alignCenter};
  flex: 0 0 auto;
  background-color: ${({ theme }) => theme.colors.bgSecondary};
  width: 48px;
  height: 48px;
  margin-right: 0.75rem;

  border-radius: ${({ theme }) => theme.radius.xlg};

  svg {
    width: 32px;
    height: 32px;
    color: ${({ theme }) => theme.colors.accentPrimary};
  }

  @media (max-width: 425px) {
    width: 40px;
    height: 40px;
    margin-right: 0.5rem;

    svg {
      width: 24px;
      height: 24px;
    }
  }
`;
