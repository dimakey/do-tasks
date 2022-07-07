import React from "react";
import * as S from "../Button/Button.styled";

const IconButton = ({ children, ...props }) => {
  return <S.IconButton {...props}>{children}</S.IconButton>;
};

export default IconButton;
