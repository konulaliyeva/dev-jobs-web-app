import React from "react";
import { Button } from "../Utilities/Button";
import styles from "../Utilities/Header.module.css";

function HeaderSearchForm({ handleSearchInput,state }) {
  return (
    <div className={styles["search-container"]}>
      <div className={styles["search-content"]}>
        <div className={styles["grid-item"] + " item1"}>
          <img src="./desktop/icon-search.svg" alt="" />
          <input
            type="text"
            placeholder="Filter by title, companies.."
            name="title"
            value={state.lastName}
            onChange={handleSearchInput}          />
        </div>
        <div className={styles["grid-item"] + " item2"}>
          <img src="./desktop/icon-location.svg" alt="" />
          <input
            type="text"
            placeholder="Filter by location…"
            name="location"
            value={state.location}
            onChange={handleSearchInput}
          />
        </div>
        <div className={styles["check-filter"] + " grid item" + " item3"}>
          <div>
            <input type="checkbox" />
            <span className="mx-4">Full Time Only </span>
          </div>
          <Button primary>
            Search
          </Button>
        </div>
        <div></div>
      </div>
    </div>
  );
}

export default HeaderSearchForm;
