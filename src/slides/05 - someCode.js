import React from "react";
import { Slide, SandboxLink } from "zlides";

export default () => (
  <Slide title>
    <div className="hugeText">
      <span className="main">Live coding</span>
      <br />
      <SandboxLink to="01 - scenery">Let's a go!</SandboxLink>
    </div>
  </Slide>
);
