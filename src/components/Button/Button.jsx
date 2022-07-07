import React from "react";
import * as S from "./Button.styled";

const Button = ({ children, icon, ...props }) => {
  return (
    <S.Button {...props}>
      {icon && icon}
      {children}
    </S.Button>
  );
};

Button.defaultProps = {
  size: "md",
};

export default Button;
