import React from "react";
import ReactDOM from "react-dom";
import Card from "./Card";
import classes from "./Modal.module.css";

function Overlay({ onClose, children }) {
  return ReactDOM.createPortal(
    <div className={classes.overlay} onClick={onClose}></div>,
    document.getElementById("overlay")
  );
}

function Content({ message, onClose, onConfirm }) {
  function confirmHandler() {
    onConfirm();
    onClose();
  }

  return ReactDOM.createPortal(
    <Card className={classes.modal}>
      <h3 className={classes.title}>{message}</h3>
      <div className={classes.actions}>
        <button className={classes.cancel} onClick={onClose}>
          Cancel
        </button>
        <button className={classes.confirm} onClick={confirmHandler}>
          Confirm
        </button>
      </div>
    </Card>,
    document.getElementById("modal")
  );
}

function Modal({ onClose, onConfirm, message }) {
  return (
    <>
      <Overlay onClose={onClose} />
      <Content message={message} onConfirm={onConfirm} onClose={onClose} />
    </>
  );
}

export default Modal;
