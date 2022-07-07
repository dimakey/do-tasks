import React from "react";
import { useSelector } from "react-redux";
import { selectTasksByCategory } from "../store/selectors/taskSelectors";
import { Calendar, Clock, DoubleCheck, Inbox, Star } from "akar-icons";

const useSidebarShortcuts = () => {
  const tasksByCategory = useSelector(selectTasksByCategory);

  return [
    {
      title: "Inbox",
      path: "inbox",
      icon: <Inbox />,
      tasks: tasksByCategory.inbox,
    },
    {
      title: "Today",
      path: "today",
      icon: <Calendar />,
      tasks: tasksByCategory.today,
    },
    {
      title: "Featured",
      path: "featured",
      tasks: tasksByCategory.featured,
      icon: <Star />,
    },
    {
      title: "Upcoming",
      path: "upcoming",
      tasks: tasksByCategory.upcoming,
      icon: <Clock />,
    },
    {
      title: "Completed",
      path: "completed",
      tasks: tasksByCategory.completed,
      icon: <DoubleCheck />,
    },
  ];
};

export default useSidebarShortcuts;
