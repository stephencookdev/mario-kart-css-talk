import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

ReactDOM.render(<App />, document.getElementById("mount"));
document.dispatchEvent(new Event("post-react-render"));

console.log("Some dev shortcuts:");
console.table({
  "toggleDarkMode()": "Change code samples between light/dark mode"
});
