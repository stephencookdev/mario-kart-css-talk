import React from "react";
import { Presentation as ZlidesPresentation } from "zlides";

const slidesReq = require("./slides/*.js");
const slides = Object.keys(slidesReq).reduce(
  (acc, key) => ({
    ...acc,
    [key]: slidesReq[key].default
  }),
  {}
);

const Presentation = () => {
  return <ZlidesPresentation slides={slides} />;
};

export default Presentation;
