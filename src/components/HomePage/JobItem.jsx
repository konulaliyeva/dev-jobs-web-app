import React from "react";
import styles from "./JobItem.module.css";
import { Link} from "react-router-dom";
function JobItem({ companyData }) {
 
  return (
    <>
      <div className="container">
        <div className="row" >
          {companyData.map((data) => {
            return (
              <Link to={`/vacancy/${data.id}`}
                key={data.id}
                style={{textDecoration:'none'}}
                className={
                  styles["job-item-container"] + " col-sm-12 col-md-4 mb-2 mx-4"
                }
              >
                <div
                  className={styles["job-item-img"]}
                  style={{ background: `${data.logoBackground}` }}
                >
                  <img src={data.logo} alt="" />
                </div>
                <div className={styles["job-item-time"]}>
                  <p>{data.postedAt}</p>
                  <p className={styles["dot"]}>.</p>
                  <p className="px-3">{data.contract}</p>
                </div>
                <div className={styles["job-item-title"]}>
                  <h3>{data.position}</h3>
                  <p>{data.company}</p>
                </div>
                <div className={styles["link"]}>
                  <p href="#">{data.location}</p>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </>
  );
}
export default JobItem;
