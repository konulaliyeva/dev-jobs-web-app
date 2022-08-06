import React, { useEffect, useState } from "react";
import "./SwitchButton.css";
import ReactSwitch from "react-switch";
function SwitchButton({toggleTheme, theme}) {
 

  return (
    <div className="switch-btn-container">
      <img className="mx-2" src="../desktop/icon-sun.svg" alt="" />
      <ReactSwitch onChange={toggleTheme} checked={theme==="dark"}/>

      <img className="mx-2" src="../desktop/icon-moon.svg" alt="" />
    </div>
  );
}
export default SwitchButton;
