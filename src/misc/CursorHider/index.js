import { useState, useEffect } from "react";
import styles from "./styles.scss";

const HIDE_WAIT = 1000;

const useMousePosition = () => {
  const [[x, y], setPosition] = useState([null, null]);
  useEffect(() => {
    const mouseMove = e => {
      if (x !== e.clientX || y !== e.clientY) {
        setPosition([e.clientX, e.clientY]);
      }
    };
    document.addEventListener("mousemove", mouseMove);

    return () => document.removeEventListener("mousemove", mouseMove);
  });

  return [x, y];
};

const CursorHider = () => {
  const [x, y] = useMousePosition();
  const [[oldX, oldY], setOldPosition] = useState([x, y]);
  if (oldX !== x || oldY !== y) {
    document.body.classList.remove(styles.hideCursor);
    setOldPosition([x, y]);
  }

  useEffect(() => {
    const timeoutHandle = setTimeout(
      () => document.body.classList.add(styles.hideCursor),
      HIDE_WAIT
    );

    return () => clearTimeout(timeoutHandle);
  });

  return null;
};

export default CursorHider;
