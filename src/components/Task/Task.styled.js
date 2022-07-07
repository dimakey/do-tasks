import styled from "styled-components";
import { priorityOptions } from "../../utils/constants";
import { mixins } from "../../styles/mixins";

export const Task = styled.li`
  display: flex;
  align-items: flex-start;
  border: 1px solid ${({ theme }) => theme.colors.bgSecondary};
  border-radius: ${({ theme }) => theme.radius.md};
  padding: 0.5rem 1rem;

  @media (max-width: 768px) {
    padding: 0.25rem 0.75rem;
  }

  @media (max-width: 425px) {
    font-size: 0.925rem;
    line-height: 1.25rem;
  }

  &:hover {
    ${mixins.shadow.tiny};
    cursor: pointer;
  }
`;

export const TaskGroup = styled.div`
  display: flex;
  flex-grow: 1;
  flex-direction: column;
  margin: 0 0.75rem;
`;

export const TaskDescription = styled.p`
  flex-grow: 1;
  margin-top: 0.35rem;

  del {
    color: ${({ theme }) => theme.colors.bodyTertiary};
  }
`;

export const TaskOptionList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  font-size: 0.75rem;
  margin-top: 0.5rem;
  gap: 0.5rem;
  color: ${({ theme }) => theme.colors.bodySecondary};

  @media (max-width: 425px) {
    margin-top: 0.25rem;
    row-gap: 0.15rem;
  }
`;

export const TaskDateOption = styled.li`
  ${mixins.base.alignCenter};

  svg {
    margin-right: 0.25rem;
  }
`;

// convert icon color from priority
const toPriorityColor = (priority) =>
  priorityOptions.find((p) => p.value === priority).color;

export const TaskPriorityOption = styled(TaskDateOption)`
  color: ${({ priority }) => toPriorityColor(priority)};

  svg {
    //color: ${({ priority }) => toPriorityColor(priority)};
  }
`;

export const TaskTagList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
`;

export const TaskTag = styled(TaskDateOption)``;
