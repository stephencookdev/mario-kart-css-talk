import React from "react";
import styles from "../../final-demo-parts/01 - scenery/styles.scss";
import main from "../../final-demo-parts/01 - scenery/index.html";

const transformHtml = html =>
  html.replace(/class="([^"]+)"/g, (_, c) => `class="${styles[c]}"`);

export default () => (
  <React.Fragment>
    <div dangerouslySetInnerHTML={{ __html: transformHtml(main) }} />
  </React.Fragment>
);
