import React from "react";
import { Route } from "react-router-dom";
import { Presentation, PresenterModePlugin, Slide, DropDownNav } from "react-presents";

const slides = require("./slides/*.js");

export default () => (
  <Presentation>
    <PresenterModePlugin />

    {Object.keys(slides).map(name => (
      <Slide component={slides[name].default} key={name} />
    ))}
  </Presentation>
);
