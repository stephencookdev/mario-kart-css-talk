import React from "react";
import styles from "../../final-demo-parts/03 - spriteAnimation/styles.scss";
import main from "../../final-demo-parts/03 - spriteAnimation/index.html";

const transformHtml = html =>
  html.replace(/class="([^"]+)"/g, (_, c) => `class="${styles[c]}"`);

export default () => (
  <React.Fragment>
    <div dangerouslySetInnerHTML={{ __html: transformHtml(main) }} />
  </React.Fragment>
);
