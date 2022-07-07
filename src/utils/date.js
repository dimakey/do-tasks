import {
  format,
  isDate,
  fromUnixTime,
  isYesterday,
  isToday,
  isTomorrow,
  getUnixTime,
} from "date-fns";

export const DATE_FORMAT = "EE, d MMM";
export const DATE_FORMAT_SHORT = "EE, d";

export const getUnixTimeNull = (date) =>
  isNaN(getUnixTime(date)) ? null : getUnixTime(date);

export const fromUnixToHuman = (date, isShortFormat = false) => {
  try {
    let convertedDate = date;

    if (!isDate(date)) {
      convertedDate = fromUnixTime(date);
    }

    if (isYesterday(convertedDate)) {
      return "Yesterday";
    }

    if (isToday(convertedDate)) {
      return "Today";
    }

    if (isTomorrow(convertedDate)) {
      return "Tomorrow";
    }

    const DATE_TEMPLATE = isShortFormat ? DATE_FORMAT_SHORT : DATE_FORMAT;
    return format(convertedDate, DATE_TEMPLATE);
  } catch {
    return null;
  }
};
