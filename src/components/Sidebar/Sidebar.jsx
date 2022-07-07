import React, { useEffect } from "react";
import { Reoverlay } from "reoverlay";
import { NavLink } from "react-router-dom";
import Button from "../Button/Button";
import IconButton from "../IconButton/IconButton";

import { useDispatch, useSelector } from "react-redux";
import { setSidebarVisibility } from "../../store/slices/appSlice";
import { selectAllTags } from "../../store/selectors/tagsSelectors";
import { selectSidebarVisibility } from "../../store/selectors/appSelectors";
import TagModal from "../Modal/TagModal/TagModal";

import TaskModal from "../Modal/TaskModal/TaskModal";
import useMediaQuery from "../../hooks/useMediaQuery";
import useSidebarShortcuts from "../../hooks/useSidebarShortcuts";
import * as S from "./Sidebar.styled";
import { Edit, Plus } from "akar-icons";
import { ReactComponent as PlusIcon } from "../../assets/icons/plus.svg";

const Sidebar = () => {
  const allTags = useSelector(selectAllTags);
  const dispatch = useDispatch();
  const matches = useMediaQuery("(max-width: 768px)");
  const sidebarShortcuts = useSidebarShortcuts();
  const isSidebarShown = useSelector(selectSidebarVisibility);

  const handleMenuItemClick = () => {
    if (matches && isSidebarShown) {
      dispatch(setSidebarVisibility({ isSidebarShown: false }));
    }
  };

  useEffect(() => {
    if (matches && isSidebarShown) {
      dispatch(setSidebarVisibility({ isSidebarShown: false }));
    }
  }, [matches]);

  // Show editing Modal window
  const handleAddTagClick = () => {
    Reoverlay.showModal(TagModal);
  };

  const handleEditTagClick = (evt, id) => {
    evt.preventDefault();
    Reoverlay.showModal(TagModal, { tagID: id });
  };

  const handleAddTaskButton = () => {
    Reoverlay.showModal(TaskModal);
  };

  return (
    <S.Sidebar>
      <S.Menu>
        <S.MenuTitle> Shortcuts </S.MenuTitle>
        <S.MenuList>
          {sidebarShortcuts.map(({ path, icon, title, tasks }, index) => (
            <S.MenuItem key={index}>
              <NavLink to={path} onClick={handleMenuItemClick}>
                <S.MenuItemIcon>{icon}</S.MenuItemIcon>
                <S.MenuItemText>{title}</S.MenuItemText>
                <S.MenuItemCount>{tasks.length}</S.MenuItemCount>
              </NavLink>
            </S.MenuItem>
          ))}
        </S.MenuList>

        <S.MenuTitle>
          <span>Tags ({allTags.length})</span>
          <IconButton
            variant="text"
            circle
            size="sm"
            onClick={handleAddTagClick}
          >
            <Plus />
          </IconButton>
        </S.MenuTitle>
        <S.MenuList>
          {allTags.map(({ id, title }) => (
            <S.MenuItem key={id}>
              <NavLink to={`/tag/${id}`} onClick={handleMenuItemClick}>
                <S.MenuItemTextTag>{title}</S.MenuItemTextTag>
                <S.MenuItemButton>
                  <Edit
                    size={16}
                    onClick={(evt) => handleEditTagClick(evt, id)}
                    aria-label="Edit tag"
                  />
                </S.MenuItemButton>
              </NavLink>
            </S.MenuItem>
          ))}
        </S.MenuList>
      </S.Menu>

      <S.StickyButton>
        <Button icon={<PlusIcon />} onClick={handleAddTaskButton}>
          Add a task
        </Button>
      </S.StickyButton>
    </S.Sidebar>
  );
};

export default Sidebar;
