import React from "react";
import { Step } from "react-presents";
import classNames from "classnames";
import HighlightList from "../misc/HighlightList";
import CustomSlide from "../misc/CustomSlide";
import styles from "./common.scss";
import choosing from "../images/choosing.gif";
import styling from "../images/styling.gif";
import hammerCup from "../images/hammer-cup.gif";

export default () => (
  <CustomSlide>
    <h1>CSS: Summary</h1>

    <div className={classNames(styles.centerWithHeader, styles.sidebyside)}>
      <HighlightList
        items={["Selecting elements in DOM", "Style what is captured"]}
      />

      <div className={styles.fixedImageContainer}>
        <Step index={1} exact>
          <img src={choosing} />
        </Step>

        <Step index={2} exact>
          <img src={styling} />
        </Step>

        <Step index={3} exact>
          <img src={hammerCup} />
        </Step>
      </div>
    </div>
  </CustomSlide>
);
