import React from "react";
import { Reoverlay } from "reoverlay";
import TaskModal from "../Modal/TaskModal/TaskModal";
import * as S from "./Task.styled";
import Checkbox from "../Checkbox/Checkbox";
import { Calendar, Flag, Tag } from "akar-icons";
import { fromUnixToHuman } from "../../utils/date";
import ToggleFavoriteButton from "../ToggleButton/ToggleFavoriteButton";
import { priorityOptions } from "../../utils/constants";

const Task = ({
  id,
  description,
  dateDue,
  isComplete,
  isFeatured,
  priority,
  tags,
}) => {
  const handleTaskClick = () => {
    Reoverlay.showModal(TaskModal, { taskID: id });
  };

  return (
    <S.Task>
      <Checkbox id={id} checked={isComplete} />
      <S.TaskGroup onClick={handleTaskClick}>
        <S.TaskDescription>
          {isComplete ? <del>{description}</del> : description}
        </S.TaskDescription>

        {(dateDue || priority || tags) && (
          <S.TaskOptionList>
            {dateDue && (
              <S.TaskDateOption>
                <Calendar strokeWidth={1.5} size={16} />
                {fromUnixToHuman(dateDue, false)}
              </S.TaskDateOption>
            )}
            {tags && (
              <>
                {tags.map(({ id, title }) => (
                  <S.TaskTag key={id}>
                    <Tag strokeWidth={1.5} size={16} />
                    {title}
                  </S.TaskTag>
                ))}
              </>
            )}
            {Boolean(priority) && (
              <S.TaskPriorityOption priority={priority}>
                <Flag strokeWidth={1.5} size={16} />
                {priorityOptions[priority - 1].label}
              </S.TaskPriorityOption>
            )}
          </S.TaskOptionList>
        )}
      </S.TaskGroup>

      <ToggleFavoriteButton taskID={id} isOn={isFeatured} />
    </S.Task>
  );
};

export default Task;
