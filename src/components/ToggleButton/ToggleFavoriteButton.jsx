import React from "react";
import { useDispatch } from "react-redux";
import { editTask } from "../../store/slices/taskSlice";
import IconButton from "../IconButton/IconButton";
import useToggle from "../../hooks/useToggle";
import { ReactComponent as StarFill } from "../../assets/icons/star-fill.svg";
import { ReactComponent as StarOutline } from "../../assets/icons/star-outline.svg";

const ToggleFavoriteButton = ({ taskID, isOn }) => {
  const [toggle, setToggle] = useToggle(isOn);
  const dispatch = useDispatch();

  const handleToggle = () => {
    setToggle();
    dispatch(editTask({ id: taskID, isFeatured: !toggle })); // dispatch(true)
  };

  return (
    <IconButton variant="text" size="sm" circle onClick={handleToggle}>
      {toggle ? <StarFill /> : <StarOutline />}
    </IconButton>
  );
};

export default ToggleFavoriteButton;
