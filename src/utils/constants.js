import { addDays, format } from "date-fns";
import { DATE_FORMAT } from "./date";
import { lightTheme } from "../styles/theme";
import taskDoneImg from "../assets/images/welcome.png";
import errorImg from "../assets/images/404.png";
import noTasksImg from "../assets/images/no-tasks.png";

export const MAX_INPUT_CHARS = 99;
export const MAX_TAGS_CHARS = 25;

export const IMAGES = {
  tasksDone: taskDoneImg,
  noTasksFound: noTasksImg,
  error: errorImg,
};

const currentDate = new Date();
const tomorrowDate = addDays(currentDate, 1);
const nextWeekDate = addDays(currentDate, 7);

export const dueDateOptions = [
  {
    label: "Today",
    value: currentDate,
    formatted: format(currentDate, DATE_FORMAT),
  },
  {
    label: "Tomorrow",
    value: tomorrowDate,
    formatted: format(tomorrowDate, DATE_FORMAT),
  },
  {
    label: "Next week",
    value: nextWeekDate,
    formatted: format(nextWeekDate, DATE_FORMAT),
  },
];

export const sortTypes = {
  DEFAULT: 1,
  ALPHABETICAL_ASC: 2,
  ALPHABETICAL_DESC: 3,
  DATE_DUE_ASC: 4,
  DATE_DUE_DESC: 5,
  PRIORITY_ASC: 6,
  PRIORITY_DESC: 7,
};

export const sortOptions = [
  { value: sortTypes.ALPHABETICAL_ASC, label: "Title Asc" },
  { value: sortTypes.ALPHABETICAL_DESC, label: "Title Desc" },
  { value: sortTypes.DATE_DUE_ASC, label: "Date Asc" },
  { value: sortTypes.DATE_DUE_DESC, label: "Date Desc" },
  { value: sortTypes.PRIORITY_ASC, label: "Priority Asc" },
  { value: sortTypes.PRIORITY_DESC, label: "Priority Desc" },
];

export const priorityTypes = {
  NO_PRIORITY: 0,
  LOW_PRIORITY: 1,
  MID_PRIORITY: 2,
  HIGH_PRIORITY: 3,
};

export const priorityOptions = [
  {
    value: priorityTypes.LOW_PRIORITY,
    label: "Low priority",
    color: lightTheme.colors.info,
  },
  {
    value: priorityTypes.MID_PRIORITY,
    label: "Mid priority",
    color: lightTheme.colors.warning,
  },
  {
    value: priorityTypes.HIGH_PRIORITY,
    label: "High priority",
    color: lightTheme.colors.danger,
  },
];
