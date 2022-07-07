import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Reoverlay } from "reoverlay";
import { selectAllTasks } from "../../../store/selectors/taskSelectors";
import { addTask, deleteTask, editTask } from "../../../store/slices/taskSlice";
import { getUnixTimeNull } from "../../../utils/date";
import {
  tagFromState,
  tagToState,
  toDateSelect,
  toPrioritySelect,
} from "../../../utils/helpers";
import ModalWrapper from "../ModalWrapper";
import {
  ButtonGroup,
  ModalBody,
  ModalFooter,
  ModalHeader,
  ModalTitle,
} from "../Modal.styled";
import * as S from "./TaskModal.styled";

import Button from "../../Button/Button";
import IconButton from "../../IconButton/IconButton";

import { Cross, TrashCan } from "akar-icons";
import PrioritySelect from "../../CustomSelect/PrioritySelect";
import DateSelect from "../../CustomSelect/DateSelect";
import TagSelect from "../../CustomSelect/TagSelect";
import usePageOptions from "../../../hooks/usePageOptions";

const TaskModal = ({ taskID }) => {
  const [description, setDescription] = useState("");
  const [selectDate, setSelectDate] = useState(null);
  const [selectPriority, setSelectPriority] = useState(null);
  const [selectTags, setSelectTags] = useState([]);
  const descriptionRef = useRef(null);

  const dispatch = useDispatch();
  const pageOptions = usePageOptions();

  const closeModal = () => Reoverlay.hideModal();

  // Get all tasks and select it by ID
  const tasks = useSelector(selectAllTasks);

  const handleDescription = (e) => {
    setDescription(e.target.value);
  };

  const handleSubmit = () => {
    if (!taskID) {
      // add a task,
      if (description.trim()) {
        dispatch(
          addTask({
            dateDue: getUnixTimeNull(selectDate?.value),
            description: description.trim(),
            priority: selectPriority?.value,
            tags: tagToState(selectTags),
            isFeatured: pageOptions.isFeatured,
          })
        );
      }
    } else {
      // editing task
      dispatch(
        editTask({
          id: taskID,
          dateDue: getUnixTimeNull(selectDate?.value),
          description: description.trim(),
          priority: selectPriority?.value,
          tags: tagToState(selectTags),
        })
      );
    }

    closeModal();
  };

  const handleTaskDelete = () => {
    dispatch(deleteTask({ id: taskID }));
    closeModal();
  };

  const handleCtrlEnter = (e) => {
    if (e.ctrlKey && e.key === "Enter") {
      handleSubmit();
    }
  };

  useEffect(() => {
    if (taskID) {
      const taskById = tasks.find((t) => t.id === taskID);
      setDescription(taskById.description);
      setSelectDate(toDateSelect(taskById.dateDue));
      setSelectPriority(toPrioritySelect(taskById.priority));
      setSelectTags(tagFromState(taskById.tags));
    } else {
      // default options based on current page
      setSelectDate(toDateSelect(pageOptions?.date));
      // setSelectTags(tagFromState(pageOptions?.tags));
    }

    descriptionRef.current.focus();
  }, []);

  return (
    <ModalWrapper>
      <ModalHeader>
        <ModalTitle>{taskID ? "Edit a task" : "Add a task"}</ModalTitle>
        <IconButton
          type="button"
          variant="text"
          circle
          size="sm"
          onClick={closeModal}
        >
          <Cross />
        </IconButton>
      </ModalHeader>

      <ModalBody>
        <S.TaskTextArea
          value={description}
          onChange={handleDescription}
          placeholder="Task description..."
          onKeyDown={handleCtrlEnter}
          ref={descriptionRef}
        />

        <S.SelectGroup>
          <DateSelect
            selectValue={selectDate}
            setSelectValue={setSelectDate}
            placeholder="Pick a date"
          />
          <PrioritySelect
            selectValue={selectPriority}
            setSelectValue={setSelectPriority}
            placeholder="Pick a priority"
          />
          <TagSelect
            selectValue={selectTags}
            setSelectValue={setSelectTags}
            placeholder="Select tags"
          />
        </S.SelectGroup>
      </ModalBody>
      <ModalFooter>
        <ButtonGroup>
          {taskID && (
            <Button
              variant="text"
              color="danger"
              size="sm"
              icon={<TrashCan />}
              onClick={handleTaskDelete}
            >
              Delete
            </Button>
          )}

          <Button
            type="button"
            variant="filled"
            color="secondary"
            size="sm"
            style={{ marginLeft: "auto" }}
            onClick={closeModal}
          >
            Cancel
          </Button>

          <Button type="submit" size="sm" onClick={handleSubmit}>
            {taskID ? "Save" : "Add"}
          </Button>
        </ButtonGroup>
      </ModalFooter>
    </ModalWrapper>
  );
};

export default TaskModal;
