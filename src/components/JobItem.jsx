import React from "react";
import styles from "./JobItem.module.css";
import { Link } from "react-router-dom";
function JobItem({ companyData }) {
  const handleClickButton = (id) =>{
    let vacancy = companyData.find(vacancy=>vacancy.id===id);
    console.log(vacancy)
  }
  return (
    <>
      <div className="container">
        <div className="row" >
          {companyData.map((data) => {
            console.log(data);
            return (
              <Link Link to="/vacancy" 
                key={data.id}
                onClick={()=>handleClickButton(data.id)}
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
                  <a href="#">{data.location}</a>
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
