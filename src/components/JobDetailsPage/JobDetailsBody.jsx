import React from "react";
import { Button } from "../Button";
import styles from "./JobDetails.module.css";
function JobDetailsBody() {
  return (
    <div className={styles["wrapper"]}>
      <div className={styles["content-container"]}>
        <div className={styles["content-heading"] + " pb-4"}>
          <div className={styles["content-titles"]}>
            <div className={styles["content-time"]}>
              <p>1w ago</p>
              <p>|</p>
              <p>Part time</p>
            </div>
            <h3 className={styles["title"]}>Senior Software Engineer</h3>
            <p className={styles["location"]}>United Kingdom</p>
          </div>
          <Button primary>Apply</Button>
        </div>
        <div className={styles["about-job"] + " pb-4"}>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nobis
            corporis labore iusto dignissimos voluptatum. Dolorum corrupti dolor
            eos qui commodi a deleniti architecto. Iste consequuntur, nam
            expedita excepturi fugit eos.
          </p>
        </div>
        <div className={styles["about-job"]+" pb-4"}>
          <h4 className={styles['section-title']}>Requirements</h4>
          <p >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
            reprehenderit excepturi perferendis rerum? Dignissimos praesentium
            quisquam ex, optio quaerat eaque non libero ipsum veritatis ipsam
            debitis. Quo unde dicta odit.
          </p>
          <ul>
            <li>nese</li>
            <li>nese</li>
            <li>nese</li>
            <li>nese</li>
          </ul>
        </div>
        <div className={styles["about-job"]}>
          <h4 className={styles['section-title']}>What You Will Do</h4>
          <p >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
            reprehenderit excepturi perferendis rerum? Dignissimos praesentium
            quisquam ex, optio quaerat eaque non libero ipsum veritatis ipsam
            debitis. Quo unde dicta odit.
          </p>
          <ol type="1">
            <li>nese</li>
            <li>nese</li>
            <li>nese</li>
            <li>nese</li>
          </ol>
        </div>
      </div>
    </div>
  );
}

export default JobDetailsBody;
