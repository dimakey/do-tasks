import * as S from "./BasePage.styled";
import SortSelect from "../CustomSelect/SortSelect";
import AddTask from "../AddTask/AddTask";
import NoTasks from "../NoTasks/NoTasks";
import React from "react";
import Task from "../Task/Task";
import { IMAGES } from "../../utils/constants";

const TaskList = ({ tasks, options }) => {
  return (
    <S.TaskList>
      {tasks.map((t) => (
        <Task key={t.id} {...t} />
      ))}
    </S.TaskList>
  );
};

const BasePage = ({ title, tasks, icon, options }) => {
  const { hasSort, hasTasksCount, hasAddTaskInput, isSearchPage } = options;

  const hasTasksMoreThanOne = tasks.length > 1;
  const hasNoTasks = !!tasks.length;

  return (
    <>
      <S.Header>
        <S.Headline>
          <S.TitleIcon>{icon}</S.TitleIcon>
          <S.Title> {title} </S.Title>
          {hasTasksCount && <S.Subtitle> {tasks.length} </S.Subtitle>}
          {hasTasksMoreThanOne && hasSort && <SortSelect />}
        </S.Headline>

        {hasAddTaskInput && <AddTask />}
      </S.Header>

      {!hasNoTasks && (
        <NoTasks
          title={
            isSearchPage
              ? "We couldn't find anything"
              : "Your task list is empty!"
          }
          subtitle={
            isSearchPage
              ? "You might have the wrong task name"
              : "Create a few and get them done."
          }
          src={isSearchPage ? IMAGES.noTasksFound : IMAGES.tasksDone}
        />
      )}

      <TaskList tasks={tasks} />
    </>
  );
};

BasePage.defaultProps = {
  options: {
    hasTag: true,
    hasTasksCount: true,
    hasAddTaskInput: true,
    hasSort: true,
    isSearchPage: false,
  },
};

export default BasePage;
