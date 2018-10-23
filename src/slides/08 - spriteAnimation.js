import React from "react";
import { Code, Step } from "react-presents";
import classNames from "classnames";
import ExampleMario from "../misc/ExampleMario";
import CustomSlide from "../misc/CustomSlide";
import styles from "./common.scss";

const pixelArt = `div {
  background: red;
  box-shadow:
    /* from bg */  1px 0 0 blue,    2px 0 0 red,
    0 1px 0 blue,  1px 1px 0 red,   2px 1px 0 blue,
    0 2px 0 red,   1px 2px 0 blue,  2px 2px 0 red;
}`;
const pixelArtAfter = `div {
  width: 3px;
  height: 3px;
  overflow: hidden;
}
div:after {
  content: '';
  display: block;
  background: red;
  box-shadow:
    /* from bg */  1px 0 0 blue,    2px 0 0 red,
    0 1px 0 blue,  1px 1px 0 red,   2px 1px 0 blue,
    0 2px 0 red,   1px 2px 0 blue,  2px 2px 0 red;
}`;

export default () => (
  <CustomSlide>
    <h1>Sprite Animation</h1>

    <Step index={0} exact>
      <div className={styles.centerWithHeader}>
        <ExampleMario />
      </div>
    </Step>

    <Step index={1} exact>
      <div className={styles.centerWithHeader}>
        <ExampleMario showAll={true} />
      </div>
    </Step>

    <Step index={2} exact>
      <div className={styles.centerWithHeader}>
        <ExampleMario
          occlude={false}
          styleOverride={{
            animationDuration: "3s",
            animationTimingFunction: "linear"
          }}
        />
      </div>
    </Step>

    <Step index={3} exact>
      <div className={classNames(styles.centerWithHeader, styles.sidebyside)}>
        <ExampleMario
          occlude={false}
          styleOverride={{
            animationDuration: "3s",
            animationTimingFunction: "linear"
          }}
        />

        <ExampleMario
          occlude={false}
          styleOverride={{
            animationDuration: "3s",
            animationTimingFunction: "steps(5)"
          }}
        />

        <ExampleMario
          styleOverride={{
            animationDuration: "3s"
          }}
        />
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
              background: "red",
              boxShadow: `10vh 0 blue, 20vh 0 red,
                      0 10vh blue, 10vh 10vh red, 20vh 10vh blue,
                      0 20vh red, 10vh 20vh blue, 20vh 20vh red`
            }}
          >
            div
          </div>
        </div>
      </div>
    </Step>

    <Step index={5} exact>
      <div className={classNames(styles.centerWithHeader, styles.displayRight)}>
        <Code value={pixelArtAfter} codeMirrorOptions={{ mode: "css" }} />

        <div
          style={{
            width: "30vh",
            height: "30vh",
            border: "2vh dashed green",
            boxSizing: "content-box",
            overflow: "hidden"
          }}
        >
          <div
            style={{
              width: "10vh",
              height: "10vh",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              background: "red",
              boxShadow: `10vh 0 blue, 20vh 0 red,
                      0 10vh blue, 10vh 10vh red, 20vh 10vh blue,
                      0 20vh red, 10vh 20vh blue, 20vh 20vh red`
            }}
          >
            :after
          </div>
        </div>
      </div>
    </Step>
  </CustomSlide>
);
