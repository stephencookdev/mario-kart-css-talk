import React from "react";
import { Code, Step } from "react-presents";
import classNames from "classnames";
import HighlightList from "../misc/HighlightList";
import CustomSlide from "../misc/CustomSlide";
import styles from "./common.scss";

const singleBoxShadow = `div {
  box-shadow: x y blur colour;
}`;
const multipleBoxShadow = `div {
  box-shadow:
    x1 y1 blur1 colour1,
    x2 y2 blur2 colour2;
}`;
const multipleBoxShadowFlat = `div {
  box-shadow:
    x1 y1 0 colour1,
    x2 y2 0 colour2;
}`;
const pixelArtStart = `div {
  box-shadow:
    1px 0 0 colour1,
    2px 0 0 colour2;
}`;
const pixelArt = `div {
  background: red;
  box-shadow:
    /* from bg */  1px 0 0 blue,    2px 0 0 red,
    0 1px 0 blue,  1px 1px 0 red,   2px 1px 0 blue,
    0 2px 0 red,   1px 2px 0 blue,  2px 2px 0 red;
}`;

export default () => (
  <CustomSlide>
    <h1>Box Shadow</h1>

    <Step index={0} exact>
      <div className={classNames(styles.centerWithHeader, styles.displayRight)}>
        <Code value={singleBoxShadow} codeMirrorOptions={{ mode: "css" }} />

        <div
          style={{
            width: "10vh",
            height: "10vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            background: "black",
            boxShadow: "1vh 2vh 2vh #ff4557"
          }}
        >
          div
        </div>
      </div>
    </Step>

    <Step index={1} exact>
      <div className={classNames(styles.centerWithHeader, styles.displayRight)}>
        <Code value={multipleBoxShadow} codeMirrorOptions={{ mode: "css" }} />

        <div
          style={{
            width: "10vh",
            height: "10vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            background: "black",
            boxShadow: "1vh 2vh 2vh #ff4557, 6vh 7vh 2vh #3351c8"
          }}
        >
          div
        </div>
      </div>
    </Step>

    <Step index={2} exact>
      <div className={classNames(styles.centerWithHeader, styles.displayRight)}>
        <Code
          value={multipleBoxShadowFlat}
          codeMirrorOptions={{ mode: "css" }}
        />

        <div
          style={{
            width: "10vh",
            height: "10vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            background: "black",
            boxShadow: "1vh 2vh 0 #ff4557, 6vh 7vh 0 #3351c8"
          }}
        >
          div
        </div>
      </div>
    </Step>

    <Step index={3} exact>
      <div className={classNames(styles.centerWithHeader, styles.displayRight)}>
        <Code value={pixelArtStart} codeMirrorOptions={{ mode: "css" }} />

        <div
          style={{
            width: "10vh",
            height: "10vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            background: "black",
            boxShadow: "10vh 0 #3351c8, 20vh 0 #ff4557"
          }}
        >
          div
        </div>
      </div>
    </Step>

    <Step index={4} exact>
      <div className={classNames(styles.centerWithHeader, styles.displayRight)}>
        <Code value={pixelArt} codeMirrorOptions={{ mode: "css" }} />

        <div style={{ width: "30vh", height: "30vh" }}>
          <div
            style={{
              width: "10vh",
              height: "10vh",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              background: "#ff4557",
              boxShadow: `10vh 0 #3351c8, 20vh 0 #ff4557,
                        0 10vh #3351c8, 10vh 10vh #ff4557, 20vh 10vh #3351c8,
                        0 20vh #ff4557, 10vh 20vh #3351c8, 20vh 20vh #ff4557`
            }}
          >
            div
          </div>
        </div>
      </div>
    </Step>
  </CustomSlide>
);
