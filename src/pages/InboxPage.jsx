import React from "react";
import { Inbox } from "akar-icons";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import {
  selectAllTasks,
  selectInboxTasks,
} from "../store/selectors/taskSelectors";
import BasePage from "../components/BasePage/BasePage";

const InboxPage = () => {
  const allTasks = useSelector(selectAllTasks);
  const tasks = useSelector(selectInboxTasks);

  const hasTasksMoreThanOne = !!allTasks.length;

  if (!hasTasksMoreThanOne) {
    return <Navigate to="/welcome" />;
  }

  return <BasePage tasks={tasks} title="Inbox" icon={<Inbox />} />;
};

export default InboxPage;
