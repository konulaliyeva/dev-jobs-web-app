import React from "react";
import { Button } from "../Button";
import styles from "./JobDetails.module.css"
function JobDetailsHeader(){
    return (
        <div className={styles["header-container"]}>
            <div className={styles["header-content"]}>
                <div className={styles["company-info"]} >
                   <div className={styles["company-logo"]}>
                       <img className={styles["company-img"]} src="../assets/logos/scoot.svg" alt="" />
                   </div>
                   <div className={styles["company-title"]}>
                       <h4>Scoot</h4>
                        <a href="#">scoot.com</a>
                   </div>
                </div>
                <Button className="mx-5">Company Site</Button>
            </div>

        </div>
    )
}

export default JobDetailsHeader;