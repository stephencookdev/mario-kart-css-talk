import React from "react";
import { Step } from "react-presents";
import CustomSlide from "../misc/CustomSlide";
import styles from "./common.scss";
import mario from "../images/mario.gif";

export default () => (
  <CustomSlide>
    <h1>Mario, please &mdash; no more CSS</h1>

    <div className={styles.centerWithHeader}>
      <img src={mario} />
    </div>
  </CustomSlide>
);
