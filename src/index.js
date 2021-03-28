import React from "react";
import ReactDOM from "react-dom";
import { Presentation } from "zlides";

const slides = require("./slides/*.js");
const sandboxes = require("./sandboxes/**/*.*");

ReactDOM.render(
  <Presentation slides={slides} sandboxes={sandboxes} />,
  document.getElementById("mount")
);
document.dispatchEvent(new Event("post-react-render"));

console.log("Some dev shortcuts:");
console.table({
  "toggleDarkMode()": "Change code samples between light/dark mode"
});
