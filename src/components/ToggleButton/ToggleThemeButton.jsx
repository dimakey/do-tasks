import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeTheme } from "../../store/slices/appSlice";
import { selectIsDarkTheme } from "../../store/selectors/appSelectors";
import IconButton from "../IconButton/IconButton";
import { Moon, Sun } from "akar-icons";

const ToggleThemeButton = () => {
  const isDark = useSelector(selectIsDarkTheme);
  const dispatch = useDispatch();

  const handleToggle = () => {
    dispatch(changeTheme());
  };

  return (
    <div>
      <IconButton
        onClick={handleToggle}
        variant="text"
        size="none"
        disableHover
      >
        {isDark ? <Sun /> : <Moon />}
      </IconButton>
    </div>
  );
};

export default ToggleThemeButton;
