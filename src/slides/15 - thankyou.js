import React from "react";
import { Slide } from "zlides";
import mario from "../images/mario.gif";

export default () => (
  <Slide>
    <h1>Mario, please &mdash; no more CSS</h1>

    <div className="centerWithHeader">
      <img src={mario} />
    </div>
  </Slide>
);
