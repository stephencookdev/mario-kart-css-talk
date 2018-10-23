import React from "react";
import { Code, Step } from "react-presents";
import classNames from "classnames";
import HighlightList from "../misc/HighlightList";
import CustomSlide from "../misc/CustomSlide";
import styles from "./common.scss";
import wasd from "../images/wasd.jpg";

const inputValue = `input[value="a"] {
  border-color: red;
}
input[value="d"] {
  border-color: green;
}`;
const inputWithValue = `<input
  type="text"
  value="foo"
/>`;
const cheatInputValue = `myInput.addEventListener("change", e => {
  e.setAttribute("value", e.target.value);
})`;
const inputValid = `<input
  type="text"
  pattern="^correct!*$"
/>`;
const inputValidStyles = `input:valid {
  border-color: green;
}
input:invalid {
  border-color: red;
}`;
const inputValidRequired = `<input
  type="text"
  pattern="^correct!*$"
  required
/>`;
const inputValidPlaceholder = `<input
  type="text"
  pattern="^correct!*$"
  placeholder="fill me"
/>`;
const inputValidStylesPlaceholder = `input:valid {
  border-color: green;
}
input:invalid {
  border-color: red;
}
input:placeholder-shown {
  border-color: gray;
}`;
const inputValidWasd = `<input
  type="text"
  pattern=".*d$"
  placeholder="foo"
/>`;

export default () => (
  <CustomSlide>
    <h1>Interactivity</h1>

    <Step index={0} exact>
      <div className={styles.centerWithHeader}>
        <img src={wasd} />
      </div>
    </Step>

    <Step index={1} exact>
      <div className={classNames(styles.centerWithHeader, styles.displayRight)}>
        <Code value={inputValue} codeMirrorOptions={{ mode: "css" }} />

        <input className={styles.baseDemoInput} />
      </div>
    </Step>

    <Step index={2} exact>
      <div className={classNames(styles.centerWithHeader, styles.displayRight)}>
        <Code
          value={inputWithValue}
          codeMirrorOptions={{ mode: "htmlmixed" }}
        />

        <input className={styles.baseDemoInput} defaultValue="foo" />
      </div>
    </Step>

    <Step index={3} exact>
      <div className={styles.centerWithHeader}>
        <Code
          value={cheatInputValue}
          codeMirrorOptions={{ mode: "javascript" }}
        />
      </div>
    </Step>

    <Step index={4} exact>
      <div className={classNames(styles.hugeText, styles.centerWithHeader)}>
        <span className={styles.main}>:valid</span>
        {"&"}
        <span className={styles.main}>:invalid</span>
      </div>
    </Step>

    <Step index={5} exact>
      <div className={classNames(styles.centerWithHeader, styles.displayRight)}>
        <div className={styles.spread}>
          <Code value={inputValid} codeMirrorOptions={{ mode: "htmlmixed" }} />
          <Code value={inputValidStyles} codeMirrorOptions={{ mode: "css" }} />
        </div>

        <style type="text/css">{`
          input:valid {
            border-color: green;
          }
          input:invalid {
            border-color: red;
          }
        `}</style>

        <input className={styles.baseDemoInput} pattern="^correct!*$" />
      </div>
    </Step>

    <Step index={6} exact>
      <div className={classNames(styles.centerWithHeader, styles.displayRight)}>
        <div className={styles.spread}>
          <Code
            value={inputValidRequired}
            codeMirrorOptions={{ mode: "htmlmixed" }}
          />
          <Code value={inputValidStyles} codeMirrorOptions={{ mode: "css" }} />
        </div>

        <style type="text/css">{`
          input:valid {
            border-color: green;
          }
          input:invalid {
            border-color: red;
          }
        `}</style>

        <input
          className={styles.baseDemoInput}
          pattern="^correct!*$"
          required
        />
      </div>
    </Step>

    <Step index={7} exact>
      <div className={classNames(styles.centerWithHeader, styles.displayRight)}>
        <div className={styles.spread}>
          <Code
            value={inputValidPlaceholder}
            codeMirrorOptions={{ mode: "htmlmixed" }}
          />
          <Code
            value={inputValidStylesPlaceholder}
            codeMirrorOptions={{ mode: "css" }}
          />
        </div>

        <style type="text/css">{`
          input:valid {
            border-color: green;
          }
          input:invalid {
            border-color: red;
          }
          input:placeholder-shown {
            border-color: gray;
          }
        `}</style>

        <input
          className={styles.baseDemoInput}
          pattern="^correct!*$"
          placeholder="fill me"
        />
      </div>
    </Step>

    <Step index={8} exact>
      <div className={classNames(styles.centerWithHeader, styles.displayRight)}>
        <div className={styles.spread}>
          <Code
            value={inputValidWasd}
            codeMirrorOptions={{ mode: "htmlmixed" }}
          />
          <Code
            value={inputValidStylesPlaceholder}
            codeMirrorOptions={{ mode: "css" }}
          />
        </div>

        <style type="text/css">{`
          input:valid {
            border-color: green;
          }
          input:invalid {
            border-color: red;
          }
          input:placeholder-shown {
            border-color: gray;
          }
        `}</style>

        <div className={styles.spread}>
          <input
            className={styles.baseDemoInput}
            pattern=".*d$"
            placeholder="foo"
          />
          <div className={styles.wasd}>
            <div className={styles.wasdW}>W</div>
            <div className={styles.wasdA}>A</div>
            <div className={styles.wasdS}>S</div>
            <div className={styles.wasdD}>D</div>
          </div>
        </div>
      </div>
    </Step>
  </CustomSlide>
);
