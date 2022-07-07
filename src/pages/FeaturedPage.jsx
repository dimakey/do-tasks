import { useSelector } from "react-redux";
import { selectFeaturedTasks } from "../store/selectors/taskSelectors";
import { Star } from "akar-icons";
import React from "react";
import BasePage from "../components/BasePage/BasePage";

const FeaturedPage = () => {
  const tasks = useSelector(selectFeaturedTasks);

  return <BasePage tasks={tasks} title="Featured" icon={<Star />} />;
};

export default FeaturedPage;
