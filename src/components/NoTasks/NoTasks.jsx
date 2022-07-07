import React from "react";
import * as S from "./NoTasks.styled";

const NoTasks = ({ subtitle, title, src }) => {
  return (
    <S.Wrapper>
      <S.Img src={src} alt={title} />
      <S.Title>{title}</S.Title>
      <S.SubTitle>{subtitle}</S.SubTitle>
    </S.Wrapper>
  );
};

NoTasks.defaultProps = {
  title: "Nothing found",
  subtitle: "We can't find anything",
};

export default NoTasks;
