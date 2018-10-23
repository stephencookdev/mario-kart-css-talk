import React from "react";
import CustomSlide from "../misc/CustomSlide";
import styles from "./common.scss";

export default () => (
  <CustomSlide title={true}>
    <div className={styles.introImg} />
  </CustomSlide>
);
