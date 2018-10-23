import React from "react";
import { Code, Step } from "react-presents";
import classNames from "classnames";
import HighlightList from "../misc/HighlightList";
import CustomSlide from "../misc/CustomSlide";
import styles from "./common.scss";
import marioMenu from "../images/mario-menu.gif";

const afterButtonFocus = `button:focus + .menu {
  background: red;
}`;
const radioStyles = `[type=radio] {
  display: none;
}
button:focus + [type=radio] {
  display: block;
}
[type=radio][value=mario]:checked ~ .output:after {
  content: "You picked Mario!";
}`;
const radioMarkup = `<button>Open menu</button>
<div class="menu"></div>
<input type="radio" name="driver" value="mario" />
<input type="radio" name="driver" value="bowser" />
<div class="output"></div>`;
const radioStylesDelayed = `[type=radio] {
  transition: 0.5s linear visibility;
  opacity: 0;
  visibility: hidden;
}
button:focus + [type=radio] {
  opacity: 1;
  visibility: visible;
}`;

export default () => (
  <CustomSlide>
    <h1>Pop-up menu</h1>

    <Step index={0} exact>
      <div className={styles.centerWithHeader}>
        <img src={marioMenu} />
      </div>
    </Step>

    <Step index={1} exact>
      <div className={classNames(styles.centerWithHeader, styles.displayRight)}>
        <Code value={afterButtonFocus} codeMirrorOptions={{ mode: "css" }} />

        <div className={styles.spread}>
          <input
            type="button"
            className={styles.baseDemoButton}
            value="Open menu"
          />
          <div className="menu-example" />
          <style type="text/css">{`
            .menu-example {
              width: 60vh;
              height: 30vh;
              border: 1vh solid #111;
              display: flex;
              justify-content: center;
              align-items: center;
              text-align: center;
              transition: 0.3s ease background-color;
            }
            .menu-example:before {
              color: #eee;
              font-size: 8vh;
              content: "I'm not open...";
            }
            [type=button]:focus + .menu-example {
              background-color: #a0062e;
            }
            [type=button]:focus + .menu-example:before {
              content: "I'm open!";
            }
          `}</style>
        </div>
      </div>
    </Step>

    <Step index={2} exact>
      <div className={classNames(styles.centerWithHeader, styles.displayRight)}>
        <div className={styles.spread}>
          <Code value={radioMarkup} codeMirrorOptions={{ mode: "htmlmixed" }} />
          <Code value={radioStyles} codeMirrorOptions={{ mode: "css" }} />
        </div>

        <div className={styles.spread}>
          <input
            type="button"
            className={styles.baseDemoButton}
            value="Open menu"
          />
          <div>
            <div className="menu-example" />
            <input type="radio" name="driver" value="mario" />
            <input type="radio" name="driver" value="bowser" />
            <div className="output-example" />
          </div>
          <style type="text/css">{`
            .menu-example {
              width: 60vh;
              height: 30vh;
              border: 1vh solid #111;
              display: flex;
              justify-content: center;
              align-items: center;
              text-align: center;
              transition: 0.3s ease background-color;
            }
            [type=radio] {
              display: none;
              position: absolute;
              z-index: 1;
              height: 5vh;
              width: 5vh;
              top: calc(20% - 2.5vh);
              left: 30%;
            }
            [type=radio]:after {
              content: "Bowser";
              font-size: 5vh;
              margin-left: 6vh;
            }
            [type=radio]:first-of-type {
              top: calc(80% - 2.5vh);
            }
            [type=radio]:first-of-type:after {
              content: "Mario";
            }
            [type=button] + div {
              position: relative;
            }
            [type=button]:focus + div .menu-example {
              background-color: #a0062e;
            }
            [type=button]:focus + div [type=radio] {
              display: block;
            }
            .output-example {
              border: .25vh solid #111;
              position: absolute;
              height: 5vh;
              font-size: 3vh;
              bottom: -5vh;
              left: 0;
              width: 100%;
              text-align: center;
            }
            [type=radio][value=mario]:checked ~ .output-example:after {
              content: "You picked Mario!";
            }
            [type=radio][value=bowser]:checked ~ .output-example:after {
              content: "You picked Bowser...";
            }
          `}</style>
        </div>
      </div>
    </Step>

    <Step index={3} exact>
      <div className={classNames(styles.centerWithHeader, styles.displayRight)}>
        <div className={styles.spread}>
          <Code value={radioMarkup} codeMirrorOptions={{ mode: "htmlmixed" }} />
          <Code
            value={radioStylesDelayed}
            codeMirrorOptions={{ mode: "css" }}
          />
        </div>

        <div className={styles.spread}>
          <input
            type="button"
            className={styles.baseDemoButton}
            value="Open menu"
          />
          <div>
            <div className="menu-example" />
            <input type="radio" name="driver" value="mario" />
            <input type="radio" name="driver" value="bowser" />
            <div className="output-example" />
          </div>
          <style type="text/css">{`
            .menu-example {
              width: 60vh;
              height: 30vh;
              border: 1vh solid #111;
              display: flex;
              justify-content: center;
              align-items: center;
              text-align: center;
              transition: 0.3s ease background-color;
            }
            [type=radio] {
              transition: 0.5s linear visibility;
              opacity: 0;
              visibility: hidden;
              position: absolute;
              z-index: 1;
              height: 5vh;
              width: 5vh;
              top: calc(20% - 2.5vh);
              left: 30%;
            }
            [type=radio]:after {
              content: "Bowser";
              font-size: 5vh;
              margin-left: 6vh;
            }
            [type=radio]:first-of-type {
              top: calc(80% - 2.5vh);
            }
            [type=radio]:first-of-type:after {
              content: "Mario";
            }
            [type=button] + div {
              position: relative;
            }
            [type=button]:focus + div .menu-example {
              background-color: #a0062e;
            }
            [type=button]:focus + div [type=radio] {
              opacity: 1;
              visibility: visible;
            }
            .output-example {
              border: .25vh solid #111;
              position: absolute;
              height: 5vh;
              font-size: 3vh;
              bottom: -5vh;
              left: 0;
              width: 100%;
              text-align: center;
            }
            [type=radio][value=mario]:checked ~ .output-example:after {
              content: "You picked Mario!";
            }
            [type=radio][value=bowser]:checked ~ .output-example:after {
              content: "You picked Bowser...";
            }
          `}</style>
        </div>
      </div>
    </Step>
  </CustomSlide>
);
