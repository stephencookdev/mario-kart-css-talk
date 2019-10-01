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
    /* First frame of spritesheet */
    /* from bg */    1px 0 0 blue,    2px 0 0 red,
    0 1px 0 blue,    1px 1px 0 red,   2px 1px 0 blue,
    0 2px 0 red,     1px 2px 0 blue,  2px 2px 0 red,

    /* Second frame of spritesheet */
    0 3px 0 blue,    1px 3px 0 red,   2px 3px 0 blue,
    0 5px 0 red,     1px 5px 0 blue,  2px 5px 0 red,
    0 4px 0 blue,    1px 4px 0 red,   2px 4px 0 blue;
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
            className={styles.boxShadowDiv}
            style={{
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

    <Step index={5} exact>
      <div className={classNames(styles.centerWithHeader, styles.displayRight)}>
        <Code value={pixelArtAfter} codeMirrorOptions={{ mode: "css" }} />

        <div
          style={{
            width: "30vh",
            height: "30vh",
            position: "relative"
          }}
        >
          <div
            className={styles.boxShadowDiv}
            style={{
              position: "absolute",
              background: "#ff4557",
              boxShadow: `10vh 0 #3351c8, 20vh 0 #ff4557,
                      0 10vh #3351c8, 10vh 10vh #ff4557, 20vh 10vh #3351c8,
                      0 20vh #ff4557, 10vh 20vh #3351c8, 20vh 20vh #ff4557`
            }}
          >
            :after
          </div>
          <div
            style={{
              width: "10vh",
              height: "10vh",
              position: "absolute",
              opacity: 0.3,
              boxShadow: `0 30vh #3351c8, 10vh 30vh #ff4557, 20vh 30vh #3351c8,
                      0 40vh #ff4557, 10vh 40vh #3351c8, 20vh 40vh #ff4557,
                      0 50vh #3351c8, 10vh 50vh #ff4557, 20vh 50vh #3351c8`
            }}
          />
          <div
            style={{
              width: "30vh",
              height: "30vh",
              border: "2vh dashed green",
              top: "-2vh",
              left: "-2vh",
              boxSizing: "content-box",
              position: "absolute"
            }}
          />
        </div>
      </div>
    </Step>
  </CustomSlide>
);
