import React from "react";
import { components } from "react-select";
import { DayPicker } from "react-day-picker";
import CustomSelect from "./CustomSelect";
import { subDays } from "date-fns";
import { fromUnixToHuman } from "../../utils/date";
import { dueDateOptions } from "../../utils/constants";
import * as S from "./DateSelect.styled";
import { Calendar } from "akar-icons";
import "react-day-picker/dist/style.css";

const DateSelect = ({ selectValue, setSelectValue, inputRef, ...props }) => {
  const handleSelectOnChange = (selectedOption) => {
    setSelectValue(selectedOption);

    if (inputRef) {
      /* return focus back to input field */
      inputRef.current.focus();
    }
  };

  const CalendarMenuList = ({ setValue, ...props }) => {
    const disableBeforeDates = { before: subDays(new Date(), 1) };
    const defaultMonth = selectValue?.value;

    const handleSelectDate = (selectedDate) => {
      const selectedCalendarDay = {
        value: selectedDate,
        label: fromUnixToHuman(selectedDate, true),
      };

      setValue(selectedCalendarDay, "select-option");
      setSelectValue(selectedCalendarDay);
    };

    return (
      <>
        <components.MenuList {...props}>
          {props.children}
          <S.Divider />
          <S.DayPickerStyle>
            <DayPicker
              mode="single"
              defaultMonth={defaultMonth}
              selected={selectValue?.value}
              onSelect={handleSelectDate}
              disabled={disableBeforeDates}
              showOutsideDays
            />
          </S.DayPickerStyle>
        </components.MenuList>
      </>
    );
  };

  const formatOptionLabel = ({ _, label, formatted }, { context }) => (
    <S.Option>
      <S.OptionLabel>{label}</S.OptionLabel>
      {context === "menu" && <S.OptionFormatted>{formatted}</S.OptionFormatted>}
    </S.Option>
  );

  return (
    <CustomSelect
      icon={<Calendar size={20} strokeWidth={1} />}
      options={dueDateOptions}
      value={selectValue}
      onChange={handleSelectOnChange}
      isClearable
      maxMenuHeight={500}
      formatOptionLabel={formatOptionLabel}
      customComponents={{ MenuList: CalendarMenuList }}
      {...props}
    />
  );
};

export default DateSelect;
