import { useSelector } from "react-redux";
import { selectCompletedTasks } from "../store/selectors/taskSelectors";
import { DoubleCheck } from "akar-icons";
import React from "react";
import BasePage from "../components/BasePage/BasePage";

const CompletedPage = () => {
  const tasks = useSelector(selectCompletedTasks);

  return (
    <BasePage
      tasks={tasks}
      title="Completed"
      icon={<DoubleCheck />}
      options={{ hasAddTaskInput: false }}
    />
  );
};

export default CompletedPage;
