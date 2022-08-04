import React from "react";
import { Button } from "../Button";
import styles from "./JobDetails.module.css"
function JobDetailsFooter (){
    return (
        <div className={styles['footer-container']}>
            <div className={styles["footer-content"]}>
                <div className={styles["position"]}>
                    <h4>Senior Software Engineer</h4>
                    <p>So Digital Inc.</p>
                </div>
                <Button primary>Apply now</Button>
            </div>
        </div>
    )
}

export default JobDetailsFooter;