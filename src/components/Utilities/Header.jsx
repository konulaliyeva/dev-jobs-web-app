import React from "react";
import styles from "./Header.module.css";
import SwitchButton from "./SwitchButton";

function Header({toggleTheme, theme}){
   
    return (
        
    
            <div className={styles['header-container']} id={theme}>
            <div className={styles['header-linearity-1']}></div>
            <div className={styles['header-linearity-2']}></div>
            <div className={styles['header-content']}>
                <p>devjobs</p>
                <SwitchButton toggleTheme={toggleTheme} theme={theme}/>
            </div>
            <div className={styles['header-linearity-3']}></div>

        </div>
        

    )
}

export default Header;