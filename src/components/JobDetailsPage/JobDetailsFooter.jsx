import React from "react";
import { Button } from "../Utilities/Button";
import styles from "./JobDetails.module.css"
function JobDetailsFooter ({job}){
    return (
        <div className={styles['footer-container']}>
            <div className={styles["footer-content"]}>
                <div className={styles["position"]}>
                    <h4>{job.position}</h4>
                    <p>So Digital Inc.</p>
                </div>
                <Button as="a" href={job.apply} primary style={{textDecoration:'none'}}>Apply now</Button>
            </div>
        </div>
    )
}

export default JobDetailsFooter;