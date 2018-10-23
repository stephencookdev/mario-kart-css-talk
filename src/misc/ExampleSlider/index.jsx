import React from "react";
import styles from "./styles.scss";

export default ({ timingFunction }) => (
  <figure className={styles.container}>
    <div className={styles.box}>
      <div
        className={styles.actualSlider}
        style={{ animationTimingFunction: timingFunction }}
      />
      <div className={styles.exampleSlider} />
    </div>

    <figcaption>{timingFunction}</figcaption>
  </figure>
);
