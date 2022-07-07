import React, { useRef } from "react";
import { Reoverlay } from "reoverlay";
import { StyledModalContainer } from "./Modal.styled";
import "reoverlay/lib/ModalWrapper.css";

const ModalWrapper = ({ children, wrapperClassName, animation, onClose }) => {
  const wrapperElement = useRef(null);

  const handleClose = (event) => {
    onClose(event);
  };

  const handleClickOutside = (event) => {
    if (event.target === wrapperElement.current) {
      handleClose(event);
    }
  };

  return (
    <div
      ref={wrapperElement}
      role="dialog"
      className={`reOverlay__modalWrapper -ro-${animation} ${wrapperClassName}`}
      onClick={handleClickOutside}
    >
      <StyledModalContainer>{children}</StyledModalContainer>
    </div>
  );
};

ModalWrapper.defaultProps = {
  children: null,
  wrapperClassName: "",
  animation: "fade",
  onClose: () => Reoverlay.hideModal(),
};

export default ModalWrapper;
