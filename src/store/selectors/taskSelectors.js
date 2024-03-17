import { createSelector } from "@reduxjs/toolkit";
import { fromUnixTime, isAfter, isToday, subDays } from "date-fns";
import { sortTypes } from "../../utils/constants";

export const selectAllTasks = ({ tasks }) => tasks.taskList;
const selectCurrentSortType = ({ tasks }) => tasks.currentSortType;

const sortFunctions = {
  [sortTypes.ALPHABETICAL_ASC]: (a, b) =>
    a.description.localeCompare(b.description),
  [sortTypes.ALPHABETICAL_DESC]: (a, b) =>
    b.description.localeCompare(a.description),
  [sortTypes.DATE_DUE_ASC]: (a, b) => a.dateDue - b.dateDue,
  [sortTypes.DATE_DUE_DESC]: (a, b) => b.dateDue - a.dateDue,
  [sortTypes.PRIORITY_ASC]: (a, b) => a.priority - b.priority,
  [sortTypes.PRIORITY_DESC]: (a, b) => b.priority - a.priority,
};

const selectSortedTasks = createSelector(
  [selectAllTasks, selectCurrentSortType],
  (tasks, sortType) => {
    const sortFunction = sortFunctions[sortType] || sortTypes.DEFAULT;
    return [...tasks].sort(sortFunction);
  }
);

export const selectAllTasksNotCompleted = createSelector(
  selectSortedTasks,
  (tasks) => tasks.filter((t) => !t.isComplete)
);

export const selectCompletedTasks = createSelector(selectSortedTasks, (tasks) =>
  tasks.filter((t) => t.isComplete)
);

export const selectInboxTasks = selectAllTasksNotCompleted;

export const selectTodayTasks = createSelector(
  selectAllTasksNotCompleted,
  (tasks) => tasks.filter((t) => isToday(fromUnixTime(t.dateDue)))
);

export const selectFeaturedTasks = createSelector(
  selectAllTasksNotCompleted,
  (tasks) => tasks.filter((t) => t.isFeatured)
);

export const selectUpcomingTasks = createSelector(
  selectAllTasksNotCompleted,
  (tasks) => tasks.filter((t) => isAfter(fromUnixTime(t.dateDue), new Date()))
);

export const selectOverdueTasks = createSelector(
  selectAllTasksNotCompleted,
  (tasks) =>
    tasks.filter((t) =>
      isAfter(subDays(new Date(), 1), fromUnixTime(t.dateDue))
    )
);

export const selectTasksByCategory = createSelector(
  [
    selectInboxTasks,
    selectTodayTasks,
    selectFeaturedTasks,
    selectUpcomingTasks,
    selectOverdueTasks,
    selectCompletedTasks,
  ],
  (inbox, today, featured, upcoming, overdue, completed) => ({
    inbox,
    today,
    featured,
    upcoming,
    overdue,
    completed,
  })
);
