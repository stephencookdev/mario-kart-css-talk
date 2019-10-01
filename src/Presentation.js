import React from "react";
import { Presentation, Slide } from "react-presents";
import CursorHider from "./misc/CursorHider";
import CodeZoomHandler from "./misc/CodeZoomHandler";

const slides = require("./slides/*.js");

export default () => (
  <Presentation disableTheme>
    <CursorHider />
    <CodeZoomHandler />

    {Object.keys(slides)
      .sort((s1, s2) => s1.localeCompare(s2))
      .map(name => (
        <Slide component={slides[name].default} key={name} />
      ))}
  </Presentation>
);
