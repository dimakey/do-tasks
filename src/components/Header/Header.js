import React from "react";
import * as S from "./Header.styled";
import { ReactComponent as LogoIcon } from "../../assets/logo.svg";
import ToggleThemeButton from "../ToggleButton/ToggleThemeButton";
import HeaderSearch from "./HeaderSearch";
import SidebarButton from "./SidebarButton";

const Header = () => {
  return (
    <S.Header>
      <S.LogoGroup>
        <SidebarButton />
        <S.LogoLink to="/">
          <S.LogoTitle>do.tasks</S.LogoTitle>
          <LogoIcon />
        </S.LogoLink>
      </S.LogoGroup>
      <HeaderSearch />
      <ToggleThemeButton />
    </S.Header>
  );
};

export default Header;
