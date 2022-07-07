import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setSidebarVisibility } from "../../store/slices/appSlice";
import IconButton from "../IconButton/IconButton";
import { ThreeLineHorizontal } from "akar-icons";
import { selectSidebarVisibility } from "../../store/selectors/appSelectors";

const SidebarButton = () => {
  const isSidebarShown = useSelector(selectSidebarVisibility);
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(setSidebarVisibility({ isSidebarShown: !isSidebarShown }));
  };

  return (
    <IconButton onClick={handleClick} size="none" variant="text" disableHover>
      <ThreeLineHorizontal />
    </IconButton>
  );
};

export default SidebarButton;
