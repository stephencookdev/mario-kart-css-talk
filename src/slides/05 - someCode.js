import React from "react";
import CustomSlide from "../misc/CustomSlide";
import styles from "./common.scss";

export default () => (
  <CustomSlide title={true}>
    <div className={styles.hugeText}>
      <span className={styles.main}>Live coding</span>
      <br />
      <a href="#/sandbox-01" target="_blank">
        Let's a go!
      </a>
    </div>
  </CustomSlide>
);
