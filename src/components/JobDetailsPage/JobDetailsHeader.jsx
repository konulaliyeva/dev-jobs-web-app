import React from "react";
import { Button } from "../Utilities/Button";
import styles from "./JobDetails.module.css";


function JobDetailsHeader({ job }) {
    console.log(job)
  return (
    <div className={styles["header-container"]}>
      <div className={styles["header-content"]}>
        <div className={styles["company-info"]}>
          <div className={styles["company-logo"]} style={{background:`${job.logoBackground}`}}>
            <img
              className={styles["company-img"]}
              src={ process.env.REACT_APP_ROOT_URL + job.logo}
              alt=""
            />
          </div>
          <div className={styles["company-title"]}>
            <h4>{job.company}</h4>
            <a href="#">{job.website}</a>
          </div>
        </div>
        <Button as="a" href={job.website} className="mx-5" style={{textDecoration:'none'}}>Company Site</Button>
      </div>
    </div>
  );
}

export default JobDetailsHeader;
