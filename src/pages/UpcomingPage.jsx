import { useSelector } from "react-redux";
import { selectUpcomingTasks } from "../store/selectors/taskSelectors";
import { Clock } from "akar-icons";
import React from "react";
import BasePage from "../components/BasePage/BasePage";

const UpcomingPage = () => {
  const tasks = useSelector(selectUpcomingTasks);

  return <BasePage tasks={tasks} title="Upcoming" icon={<Clock />} />;
};

export default UpcomingPage;
