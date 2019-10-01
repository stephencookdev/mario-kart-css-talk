import React, { useState } from "react";
import { ContentSlide } from "react-presents";
import classNames from "classnames";
import styles from "./styles.scss";

export default ({ children, title }) => {
  const [darkMode, setDarkMode] = useState(!!localStorage.getItem("darkMode"));
  window.toggleDarkMode = () => {
    if (darkMode) {
      localStorage.removeItem("darkMode");
    } else {
      localStorage.setItem("darkMode", 1);
    }
    setDarkMode(!darkMode);
  };

  return (
    <ContentSlide
      className={classNames(styles["custom-slide"], {
        [styles["title-slide"]]: title,
        "light-mode": !darkMode
      })}
    >
      {children}
    </ContentSlide>
  );
};
