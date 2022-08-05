import React from "react";
import { Button } from "../Utilities/Button";
import styles from "./JobDetails.module.css";
function JobDetailsBody({job}) {
  return (
    <div className={styles["wrapper"]}>
      <div className={styles["content-container"]}>
        <div className={styles["content-heading"] + " pb-4"}>
          <div className={styles["content-titles"]}>
            <div className={styles["content-time"]}>
              <p>{job.postedAt}</p>
              <p>|</p>
              <p>{job.contract}</p>
            </div>
            <h3 className={styles["title"]}>{job.position}</h3>
            <p className={styles["location"]}>{job.location}</p>
          </div>
          <Button as="a" href={job.apply} primary style={{textDecoration:'none'}}>Apply</Button>
        </div>
        <div className={styles["about-job"] + " pb-4"}>
          <p>
          {job.description}
          </p>
        </div>
        <div className={styles["about-job"]+" pb-4"}>
          <h4 className={styles['section-title']}>Requirements</h4>
          <p >
            {job.requirements.content}
          </p>
          <ul>
            {job.requirements.items.map((item, index)=>{
              return <li key={index}>{item}</li>
            })}
          </ul>
        </div>
        <div className={styles["about-job"]}>
          <h4 className={styles['section-title']}>What You Will Do</h4>
          <p >
           {job.role.content}
          </p>
          <ol type="1">
           {job.role.items.map((item, index)=>{
             return <li key={index}>{item}</li>
           })}
          </ol>
        </div>
      </div>
    </div>
  );
}

export default JobDetailsBody;
