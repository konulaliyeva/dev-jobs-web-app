import React from "react";
import styles from "./Header.module.css";
import SwitchButton from "./SwitchButton";
function Header(){
    return (
        
        <div className={styles['header-container']}>
            <div className={styles['header-linearity-1']}></div>
            <div className={styles['header-linearity-2']}></div>
            <div className={styles['header-content']}>
                <p>devjobs</p>
                <SwitchButton />
            </div>
            <div className={styles['header-linearity-3']}></div>

        </div>
        

    )
}

export default Header;