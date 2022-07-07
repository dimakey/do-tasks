import styled from "styled-components";
import { mixins } from "../../styles/mixins";

export const StyledModalContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.bgPrimary};
  border-radius: ${({ theme }) => theme.radius.md};
  ${mixins.shadow.small};
`;

export const ModalHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem;
  border-bottom: 1px solid ${({ theme }) => theme.colors.bgSecondary};
`;

export const ModalBody = styled.div`
  display: flex;
  flex-direction: column;
  width: 400px;
  padding: 1rem;
`;

export const ModalFooter = styled.div`
  padding: 1rem;
  border-top: 1px solid ${({ theme }) => theme.colors.bgSecondary};
`;

export const ButtonGroup = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 0.75rem;
`;

export const ModalTitle = styled.h2`
  ${mixins.typography.h2};
  color: ${({ theme }) => theme.colors.bodyPrimary};
`;
