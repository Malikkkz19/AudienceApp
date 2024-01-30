import React, { useState } from "react";
import styles from "./Button.module.css";

const Button = ({ audience, setActive }) => {
  return (
    <div
      className={styles.wrapper}
      onClick={() => {
        setActive(true);
      }}
    >
      <button className={styles.main}>
        <button className={styles.up}>
          <b className="font-bold text-3xl opacity-60">219</b>
        </button>
        <button className={styles.down}></button>
      </button>
    </div>
  );
};

export default Button;
