import React from "react";
import { useSelector } from "react-redux";
import { ModalContainer } from "reoverlay";
import { selectIsDarkTheme } from "./store/selectors/appSelectors";
import { ThemeProvider } from "styled-components";
import { darkTheme, lightTheme } from "./styles/theme";
import { Reset } from "styled-reset";
import Global from "./styles/global";
import Header from "./components/Header/Header";
import MainLayout from "./components/Main/MainLayout";
import * as S from "./App.styled";

const App = () => {
  const isDark = useSelector(selectIsDarkTheme);

  return (
    <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
      <Reset />
      <Global />

      <S.SiteWrapper>
        <Header />
        <MainLayout />
      </S.SiteWrapper>

      <ModalContainer />
    </ThemeProvider>
  );
};

export default App;
