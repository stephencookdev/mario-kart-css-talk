import React from "react";
import { Code, Step, Slide } from "zlides";
import yoink from "../images/yoink.gif";

const radioInputs = `<input type="radio" name="option" value="a" /> Option A
<input type="radio" name="option" value="b" /> Option B`;

const htmlSolution = `<input type="radio" name="option" value="a" /> Option A
<input type="radio" name="option" value="b" /> Option B
<div></div>`;
const cssSolution = `[name="option"][value="a"]:checked ~ div {
  background-color: blue;
}
[name="option"][value="b"]:checked ~ div {
  background-color: red;
}`;

export default () => (
  <Slide>
    <h1>Character Select</h1>

    <Step index={0} exact>
      <div className="centerWithHeader">
        <img src={yoink} alt="Yoink" />
      </div>
    </Step>
    <Step index={1} exact>
      <div className="centerWithHeader">
        <Code value={radioInputs} codeMirrorOptions={{ mode: "htmlmixed" }} />
      </div>
    </Step>
    <Step index={2} exact>
      <div className="hugeText centerWithHeader">
        <span className="main">:checked</span>
        {"&"}
        <span className="main">~</span>
      </div>
    </Step>
    <Step index={3} exact>
      <div className="centerWithHeader displayRight">
        <div className="spread">
          <Code
            value={htmlSolution}
            codeMirrorOptions={{ mode: "htmlmixed" }}
          />
          <Code value={cssSolution} codeMirrorOptions={{ mode: "css" }} />
        </div>
        <style type="text/css">{`
          [name="option"][value="a"]:checked ~ div[data-solution-target] {
            background-color: #3351c8;
          }
          [name="option"][value="b"] {
            margin-left: 4vh;
          }
          [name="option"][value="b"]:checked ~ div[data-solution-target] {
            background-color: #ff4557;
          }
          div[data-solution-target] {
            margin: 4vh auto 0;
            border: 5px solid black;
            background: white;
            width: 10vh;
            height: 10vh;
          }
        `}</style>
        <div className="largerFont">
          <input type="radio" name="option" value="a" /> Option A
          <input type="radio" name="option" value="b" /> Option B
          <div data-solution-target />
        </div>
      </div>
    </Step>
  </Slide>
);
