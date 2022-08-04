import React from "react";
import { Button } from "./Button";
import styles from "./Header.module.css";

function HeaderSearchForm() {
  return (
    <div className={styles["search-container"]}>
      <div className={styles["search-content"]}>
        <div className={styles['grid-item'] + " item1"}>
          <img src="../desktop/icon-search.svg" alt="" />
          <input
            type="text"
            placeholder="Filter by title, companies, expertise…"
          />
        </div>
        <div className={styles['grid-item'] + " item2"}>
          <img src="../desktop/icon-location.svg" alt="" />
          <input type="text" placeholder="Filter by location…" />
        </div>
        <div className={styles["check-filter"] + " grid item" + " item3"}>
          <div>
            <input type="checkbox" />
            <span className="mx-4">Full Time Only </span>
          </div>
          <Button primary >Search</Button>
        </div>
        <div></div>
      </div>
    </div>
  );
}

export default HeaderSearchForm;
