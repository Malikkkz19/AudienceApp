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
        <h1 className="audience">Аудитория 219</h1>
        <div className="image">
          <img src="./girl.jpeg" alt="" />
        </div>
        <button className="button_close">
          <IoClose
            size={30}
            className="button_close_icon"
            onClick={() => setActive(false)}
          />
        </button>

        <div className="description">
          <p>
            <b>Учебная группа:</b> <span className="group_number">611/11</span>
          </p>
          <p>
            <b>Дежурный:</b>
            <span className="group_duty">Низамидинов М.Ф.</span>
          </p>
          <p>
            <b>Вид аудитории:</b>
            <span className="group_type_aud">Лабораторный</span>
          </p>
          <p>
            <b>Количество посадочных мест:</b>
            <span className="group_amount">18</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Modal;
