import { createSelector } from "@reduxjs/toolkit";
import { fromUnixTime, isAfter, isToday, subDays } from "date-fns";
import { sortTypes } from "../../utils/constants";

export const selectAllTasks = ({ tasks }) => tasks.taskList;
const selectCurrentSortType = ({ tasks }) => tasks.currentSortType;

const selectSortedTasks = createSelector(
  [selectAllTasks, selectCurrentSortType],
  (tasks, sortType) => {
    switch (sortType) {
      case sortTypes.ALPHABETICAL_ASC:
        return [...tasks].sort((a, b) =>
          a.description.localeCompare(b.description)
        );
      case sortTypes.ALPHABETICAL_DESC:
        return [...tasks].sort((a, b) =>
          b.description.localeCompare(a.description)
        );
      case sortTypes.DATE_DUE_ASC:
        return [...tasks].sort((a, b) => a.dateDue - b.dateDue);
      case sortTypes.DATE_DUE_DESC:
        return [...tasks].sort((a, b) => b.dateDue - a.dateDue);
      case sortTypes.PRIORITY_ASC:
        console.log("priority asc");
        return [...tasks].sort((a, b) => a.priority - b.priority);
      case sortTypes.PRIORITY_DESC:
        return [...tasks].sort((a, b) => b.priority - a.priority);
      default:
        return tasks;
    }
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
