import React from "react";
import styles from "../../final-demo-parts/02 - animation/styles.scss";
import main from "../../final-demo-parts/02 - animation/index.html";

const transformHtml = html =>
  html.replace(/class="([^"]+)"/g, (_, c) => `class="${styles[c]}"`);

export default () => (
  <React.Fragment>
    <div dangerouslySetInnerHTML={{ __html: transformHtml(main) }} />
  </React.Fragment>
);
