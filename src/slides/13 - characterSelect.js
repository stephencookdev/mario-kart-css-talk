import React from "react";
import { Code, Step } from "react-presents";
import CustomSlide from "../misc/CustomSlide";
import styles from "./common.scss";
import yoink from "../images/yoink.gif";

const someCss = `.a + .b {
  /* select the .b immediately after .a */
}

.a ~ .b {
  /* select any sibling .b after .a */
}

[type="checkbox"]:checked {
  /* any checkbox that has been checked */
}`;

export default () => (
  <CustomSlide>
    <h1>Character Select</h1>

    <div className={styles.centerWithHeader}>
      <Step index={0} exact>
        <img src={yoink} alt="Yoink" />
      </Step>
      <Step index={1} exact>
        <Code value={someCss} codeMirrorOptions={{ mode: "css" }} />
      </Step>
    </div>
  </CustomSlide>
);
