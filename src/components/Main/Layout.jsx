import { useDispatch, useSelector } from "react-redux";
import { selectSidebarVisibility } from "../../store/selectors/appSelectors";
import { setSidebarVisibility } from "../../store/slices/appSlice";
import * as S from "./MainLayout.styled";
import Sidebar from "../Sidebar/Sidebar";
import { Outlet } from "react-router-dom";
import React from "react";

const Layout = () => {
  const dispatch = useDispatch();
  const isSidebarShown = useSelector(selectSidebarVisibility);

  const handleClick = () => {
    dispatch(setSidebarVisibility({ isSidebarShown: false }));
  };

  return (
    <S.Main isSidebarShown={isSidebarShown}>
      <Sidebar />
      {isSidebarShown && <S.SidebarMobileWrapper onClick={handleClick} />}

      <S.Content>
        <S.Wrapper>
          <Outlet />
        </S.Wrapper>
      </S.Content>
    </S.Main>
  );
};

export default Layout;
