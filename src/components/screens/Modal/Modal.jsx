import React, { useState } from "react";
import "./Modal.css";
import { IoClose } from "react-icons/io5";

const Modal = ({ active, setActive }) => {
  return (
    <div
      className={active ? "modal active" : "modal"}
      onClick={() => setActive(false)}
    >
      <div
        className="modal__content"
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <h1>Аудитория 219</h1>
        <div className="image">
          <img></img>
        </div>
        <button className="button_close">
          <IoClose size={30} />
        </button>
      </div>
    </div>
  );
};

export default Modal;
