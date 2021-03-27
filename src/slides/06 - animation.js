import React from "react";
import { Code, Step, Slide } from "zlides";
import boring from "../images/boring.gif";
import ExampleSlider from "../misc/ExampleSlider";
import styles from "./styles.scss";

const fromToKeyframes = `div {
  animation-duration: 3s;
  animation-iteration-count: infinite;
  animation-name: my-cool-animation;
}

@keyframes my-cool-animation {
  from {
    opacity: 0;
    transform: rotate(180deg);
  }
  to {
    opacity: 1;
    transform: rotate(0deg);
  }
}`;
const stepAnimation = `div {
  animation-duration: 3s;
  animation-iteration-count: infinite;
  animation-name: my-cool-animation;
  animation-timing-function: steps(4);
}

@keyframes my-cool-animation {
  from {
    opacity: 0;
    transform: rotate(180deg);
  }
  to {
    opacity: 1;
    transform: rotate(0deg);
  }
}`;

export default () => (
  <Slide>
    <h1>Animation</h1>

    <Step index={0} exact>
      <div className="centerWithHeader">
        <img src={boring} />
      </div>
    </Step>

    <Step index={1} exact>
      <div className="centerWithHeader displayRight">
        <Code value={fromToKeyframes} codeMirrorOptions={{ mode: "css" }} />

        <style type="text/css">
          {`@keyframes my-cool-animation {
            from {
              opacity: 0;
              transform: rotate(180deg);
            }
            to {
              opacity: 1;
              transform: rotate(0deg);
            }
          }`}
        </style>
        <div
          className={styles.boxShadowDiv}
          style={{
            animationDuration: "3s",
            animationName: "my-cool-animation",
            animationIterationCount: "infinite"
          }}
        >
          div
        </div>
      </div>
    </Step>

    <Step index={2} exact>
      <div className="centerWithHeader displayRight">
        <Code
          value={stepAnimation}
          codeMirrorOptions={{ mode: "css" }}
          highlightLines={[[4, 4]]}
        />

        <style type="text/css">
          {`@keyframes my-cool-animation {
            from {
              opacity: 0;
              transform: rotate(180deg);
            }
            to {
              opacity: 1;
              transform: rotate(0deg);
            }
          }`}
        </style>
        <div
          className={styles.boxShadowDiv}
          style={{
            animationDuration: "3s",
            animationName: "my-cool-animation",
            animationIterationCount: "infinite",
            animationTimingFunction: "steps(4)"
          }}
        >
          div
        </div>
      </div>
    </Step>

    <Step index={3} exact>
      <div className="centerWithHeader sidebyside">
        <ExampleSlider timingFunction="linear" />
        <ExampleSlider timingFunction="steps(4)" />
      </div>
    </Step>
  </Slide>
);
