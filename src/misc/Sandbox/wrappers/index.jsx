import React from "react";
import liveStyles from "../styles.scss";
import styles from "./styles.scss";
import main from "../main.html";

const transformHtml = html =>
  console.log(html) ||
  html.replace(/class="([^"]+)"/g, (_, c) => `class="${liveStyles[c]}"`);

export default () => (
  <div
    className={styles.body}
    dangerouslySetInnerHTML={{ __html: transformHtml(main) }}
  />
);
