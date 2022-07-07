import React from "react";
import Select, { components } from "react-select";
import { useTheme } from "styled-components";
import { StyledControl } from "./CustomSelect.styled";
import { Cross } from "akar-icons";

const CustomSelect = ({
  icon,
  options,
  selectValue,
  setSelectValue,
  customComponents,
  ...props
}) => {
  const theme = useTheme();

  const selectTheme = (selectTheme) => ({
    ...selectTheme,
    colors: {
      ...theme.colors,
      danger: theme.colors.red,
      primary: theme.colors.accentPrimary,
      primary25: "red",
      primary50: "green",
      primary75: "blue",
      neutral0: theme.colors.bgPrimary,
      neutral5: theme.colors.bgSecondary,
      neutral10: theme.colors.bgTertiary,
      neutral80: theme.colors.bodyPrimary,
      neutral170: theme.colors.bodyTertiary,
      neutral180: theme.colors.bodySecondary,
      neutral190: theme.colors.bodyPrimary,
    },
  });

  const styles = {
    control: (base, { hasValue, isFocused }) => ({
      padding: hasValue ? "6px 8px" : "6px",
      color: hasValue ? theme.colors.accentPrimary : theme.colors.bodySecondary,
      borderRadius: theme.radius.sm,
      backgroundColor: theme.colors.bgSecondary,
      outline: isFocused ? `2px solid ${theme.colors.accentPrimaryFocus} ` : "",

      "&:hover": {
        backgroundColor: theme.colors.bgSecondary,
        cursor: "pointer",
      },
    }),

    valueContainer: (base, { hasValue }) => ({
      ...base,
      fontSize: "0.875rem",
      padding: hasValue ? "0 0.25rem" : 0,
    }),

    multiValue: (base, state) => ({
      ...base,
      backgroundColor: theme.colors.bgPrimary,
    }),

    placeholder: (base, { selectProps }) => {
      return {
        ...base,
        color: theme.colors.bodyTertiary,
        padding: selectProps.placeholder ? "0 0.25rem" : 0,
        display: selectProps.placeholder ? "block" : "none",
      };
    },

    menu: (base) => ({
      ...base,
      minWidth: 120,
      width: "auto",
      right: 0,
    }),

    clearIndicator: (base) => ({
      ...base,
      padding: 0,
    }),

    indicatorsContainer: (base) => ({
      ...base,
    }),

    indicatorSeparator: () => ({
      display: "none",
    }),

    dropdownIndicator: () => ({
      display: "none",
    }),

    option: (base, state) => {
      return {
        ...base,
        fontSize: "0.875rem",
        color: theme.colors.bodyPrimary,
        backgroundColor: state.isSelected
          ? theme.colors.bgSecondary
          : state.isFocused
          ? theme.colors.bgSecondary
          : undefined,

        ":active": {
          backgroundColor: theme.colors.bgTertiary,
        },
      };
    },
  };

  const Control = ({ children, ...props }) => (
    <components.Control {...props}>
      <StyledControl>
        {icon}
        {children}
      </StyledControl>
    </components.Control>
  );

  const ClearIndicator = (props) => {
    return (
      <components.ClearIndicator {...props}>
        <Cross size={12} strokeWidth={2} />
      </components.ClearIndicator>
    );
  };

  const MultiValueRemove = (props) => (
    <components.MultiValueRemove {...props}>
      <Cross size={8} strokeWidth={4} />
    </components.MultiValueRemove>
  );

  return (
    <Select
      placeholder=""
      isSearchable={false}
      theme={selectTheme}
      components={{
        ...customComponents,
        Control,
        ClearIndicator,
        MultiValueRemove,
      }}
      styles={styles}
      options={options}
      {...props}
    />
  );
};

export default CustomSelect;
