import React from "react";
import styles from "./SwitchButton.module.css";

function SwitchButton() {
  return (
    <div className={styles["switch-btn-container"]}>
      <img className="mx-2" src="../desktop/icon-sun.svg" alt="" />
      
      <img src="../desktop/icon-moon.svg" alt="" />
    </div>
  );
}
export default SwitchButton;
