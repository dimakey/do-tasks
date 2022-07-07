import styled from "styled-components";
import { mixins } from "../../styles/mixins";

export const Option = styled.div`
  ${mixins.base.alignCenter};
`;

export const OptionLabel = styled.div`
  flex-grow: 1;
`;

export const OptionFormatted = styled.div`
  font-size: 0.7rem;
  text-transform: uppercase;
  letter-spacing: 0.05rem;
  color: ${({ theme }) => theme.colors.bodyTertiary};
`;

export const DayPickerStyle = styled.div`
  --rdp-cell-size: 32px;
  --rdp-accent-color: ${({ theme }) => theme.colors.accentPrimary};
  --rdp-background-color: ${({ theme }) => theme.colors.bgSecondary};
  --rdp-outline: 2px solid var(--rdp-accent-color);

  .rdp {
    margin: 0.675rem;
    color: ${({ theme }) => theme.colors.bodyPrimary};
  }

  .rdp-day_today:not(.rdp-day_outside) {
    font-weight: ${mixins.fontWeight.bold};
    border: 2px solid ${({ theme }) => theme.colors.bgSecondary};
  }

  .rdp-caption_label {
    font-size: 0.875rem;
    font-weight: ${mixins.fontWeight.semibold};
    padding: 0;
    color: ${({ theme }) => theme.colors.bodySecondary};
  }

  .rdp-nav_button {
    padding: 0.25rem;
    width: 24px;
    height: 24px;
    border-radius: 8px;
  }

  .rdp-head {
  }

  .rdp-head_cell {
    color: ${({ theme }) => theme.colors.bodyTertiary};
    text-transform: uppercase;
    font-size: 0.65rem;
    letter-spacing: 0.1rem;
    font-weight: ${mixins.fontWeight.semibold};
  }

  .rdp-cell {
  }

  .rdp-tbody {
  }

  .rdp-day {
    font-size: 0.875rem;
    margin: 0.1rem;
  }
`;

export const Divider = styled.div`
  margin-top: 0.25rem;
  padding: 0;
  border-bottom: 1px solid ${({ theme }) => theme.colors.bgTertiary};
`;
