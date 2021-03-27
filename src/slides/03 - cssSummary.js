import React from "react";
import { Step, Slide, HighlightList } from "zlides";
import choosing from "../images/choosing.gif";
import styling from "../images/styling.gif";
import hammerCup from "../images/hammer-cup.gif";

export default () => (
  <Slide>
    <h1>CSS: Summary</h1>

    <div className="centerWithHeader sidebyside">
      <HighlightList
        items={["Selecting elements in DOM", "Style what is captured"]}
      />

      <div className="fixedImageContainer">
        <Step index={1} exact>
          <img src={choosing} />
        </Step>

        <Step index={2} exact>
          <img src={styling} />
        </Step>

        <Step index={3} exact>
          <img src={hammerCup} />
        </Step>
      </div>
    </div>
  </Slide>
);
