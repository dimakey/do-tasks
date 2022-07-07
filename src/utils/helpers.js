import { fromUnixTime, getUnixTime, isValid, isDate } from "date-fns";
import { fromUnixToHuman } from "./date";
import { priorityOptions } from "./constants";

export const toDateSelect = (date) => {
  if (isValid(date))
    return {
      value: isDate(date) ? date : fromUnixTime(date),
      label: fromUnixToHuman(date),
    };
  return null;
};

export const dateFromState = (unixDateDue) => {
  return {
    value: fromUnixTime(unixDateDue),
    label: fromUnixToHuman(unixDateDue),
  };
};

export const dateToState = (selectDateOption) => {
  return getUnixTime(selectDateOption?.value);
};

export const toPrioritySelect = (priority) =>
  priorityOptions.find((p) => p.value === priority);

export const tagToState = (tags) =>
  tags.map(({ value, label }) => ({ id: value, title: label }));

export const tagFromState = (tags) =>
  tags.map((tag) => ({ value: tag.id, label: tag.title }));
