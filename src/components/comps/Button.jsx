import React from "react";
import styles from "./styles.module.css";

const Button = (props) => {
  const { inner, onClick } = props;

  return (
    <button className={styles.button} onClick={onClick}>
      {inner}
    </button>
  );
};

export default Button;
