import React from "react";
import "./InputModal.css";
import { IoClose } from "react-icons/io5";

const InputModal = ({ active, setActive }) => {
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
        <h1 className="audience">Аудитория 219</h1>

        <button className="button_close">
          <IoClose
            size={30}
            className="button_close_icon"
            onClick={() => setActive(false)}
          />
        </button>
        <div className="input_wrapper">
          <button className="auto_input">
            <span className="auto_text">Автоматический ввод</span>
          </button>
          <button className="manual_input">Ручной ввод</button>
        </div>
      </div>
      ;
    </div>
  );
};

export default InputModal;
