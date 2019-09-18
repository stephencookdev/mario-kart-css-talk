import React from "react";
import CustomSlide from "../misc/CustomSlide";
import styles from "./common.scss";

export default () => (
  <CustomSlide title={true}>
    <div className={styles.hugeText}>
      <q className={styles.quote}>
        <span className={styles.quoteHighlight}>
          A negative [animation-delay] is valid.
        </span>{" "}
        Similar to a delay of 0s, it means that the animation executes
        immediately, but is automatically progressed by the absolute value of
        the delay, as if the animation had started the specified time in the
        past, and so it appears to start partway through its active duration.
      </q>
    </div>
  </CustomSlide>
);
