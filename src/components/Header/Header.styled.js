import styled from "styled-components";
import { Link } from "react-router-dom";
import { mixins } from "../../styles/mixins";

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.bgHeader};
  width: 100%;
  height: 64px;
  gap: 1rem;
  z-index: 100;
  ${mixins.base.wrapperPadding};

  svg {
    color: #fff;
  }
`;

export const LogoGroup = styled.div`
  display: flex;
`;

export const LogoLink = styled(Link)`
  ${mixins.base.alignCenter};
  text-decoration: none;
`;

export const LogoTitle = styled.span`
  color: ${({ theme }) => theme.colors.white};
  margin: 0 0.5rem;
  ${mixins.typography.h4};
  font-weight: ${mixins.fontWeight.bold};
`;
