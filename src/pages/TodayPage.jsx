import { useSelector } from "react-redux";
import { selectTodayTasks } from "../store/selectors/taskSelectors";
import { Calendar } from "akar-icons";
import React from "react";
import BasePage from "../components/BasePage/BasePage";

const TodayPage = () => {
  const tasks = useSelector(selectTodayTasks);
  // select today date
  return <BasePage tasks={tasks} title="Today" icon={<Calendar />} />;
};

export default TodayPage;
