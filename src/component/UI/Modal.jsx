import React from "react";
import ReactDOM from "react-dom";
import styleModal from "./Modal.module.css";
const Backdrop = (props) => {
  console.log(props);
  return <div className={styleModal.backdrop} onClick={props.onClick}></div>;
};
const ModalOverlay = (props) => {
  return (
    <div className={styleModal.modal}>
      <div className={styleModal.content}>{props.children}</div>
    </div>
  );
};
const portalElement = document.getElementById("overlays");

const Modal = props => {
  return (
    <>
      {ReactDOM.createPortal(
        <Backdrop onClose={props.onClose} onClick = {props.onClick}/>,
        portalElement
      )}
      {ReactDOM.createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        portalElement
      )}
    </>
  );
};

export { Modal };
