import React from "react";
import * as S from "./Checkbox.styled";
import { completeTask } from "../../store/slices/taskSlice";
import { useDispatch } from "react-redux";

const Checkbox = ({ id, checked }) => {
  const dispatch = useDispatch();

  const handleChange = () => {
    dispatch(completeTask({ id }));
  };

  return (
    <S.CheckboxGroup>
      <S.Checkbox id={id} checked={checked} onChange={handleChange} />
      <label htmlFor={id} />
    </S.CheckboxGroup>
  );
};

export default Checkbox;
