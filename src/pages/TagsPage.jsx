import React from "react";
import { isEmpty } from "lodash";
import { Navigate } from "react-router-dom";
import BasePage from "../components/BasePage/BasePage";
import useTasksByTagParam from "../hooks/useTasksByTagParam";
import { Tag } from "akar-icons";

const TagsPage = () => {
  const { tasks, tag } = useTasksByTagParam();

  return isEmpty(tag) ? (
    <Navigate to="/inbox" />
  ) : (
    <BasePage tasks={tasks} title={tag.title} icon={<Tag />} />
  );
};

export default TagsPage;
