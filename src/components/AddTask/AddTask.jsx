import React, { useEffect, useRef, useState } from "react";
import * as S from "./AddTask.styled";
import { useDispatch } from "react-redux";
import { addTask } from "../../store/slices/taskSlice";
import IconButton from "../IconButton/IconButton";
import { Plus } from "akar-icons";
import { MAX_INPUT_CHARS } from "../../utils/constants";
import DateSelect from "../CustomSelect/DateSelect";
import { dateToState, toDateSelect } from "../../utils/helpers";
import usePageOptions from "../../hooks/usePageOptions";

const AddTask = () => {
  const [description, setDescription] = useState("");
  const [selectDate, setSelectDate] = useState(null);
  const [isDisabled, setDisabled] = useState(true);

  // get default page options
  const pageOptions = usePageOptions();

  const inputRef = useRef(null);
  const dispatch = useDispatch();

  // Default BasePage Options set a date
  useEffect(() => {
    setSelectDate(toDateSelect(pageOptions?.date));
  }, []);

  const handleChange = (e) => {
    setDescription(e.target.value);
    setDisabled(!Boolean(e.target.value));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (description.trim()) {
      dispatch(
        addTask({
          description: description.trim(),
          dateDue: dateToState(selectDate),
          tags: pageOptions.tag,
          isFeatured: pageOptions.isFeatured,
        })
      );
    }

    setDescription("");
    setSelectDate(toDateSelect(pageOptions.date));
    setDisabled(true);
  };

  return (
    <S.AddTaskForm onSubmit={handleSubmit}>
      <S.AddTaskInput
        type="text"
        value={description}
        onChange={handleChange}
        placeholder="Add a task ..."
        maxLength={MAX_INPUT_CHARS}
        ref={inputRef}
      />
      <S.Select>
        <DateSelect
          selectValue={selectDate}
          setSelectValue={setSelectDate}
          inputRef={inputRef}
        />
      </S.Select>

      <S.AddTaskButton>
        <IconButton
          circle
          size="none"
          isDisabled={isDisabled}
          disabled={isDisabled}
        >
          <Plus />
        </IconButton>
      </S.AddTaskButton>
    </S.AddTaskForm>
  );
};

export default AddTask;
