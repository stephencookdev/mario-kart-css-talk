import React from "react";
import styles from "../styles.scss";
import main from "../main.html";

const transformHtml = html =>
  console.log(html) ||
  html.replace(/class="([^"]+)"/g, (_, c) => `class="${styles[c]}"`);

export default () => (
  <React.Fragment>
    <div dangerouslySetInnerHTML={{ __html: transformHtml(main) }} />
  </React.Fragment>
);
