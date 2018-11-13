import React from "react";
import { HashRouter, Route } from "react-router-dom";
import Presentation from "./Presentation";
import Sandbox from "./misc/Sandbox/wrappers";
require("codemirror/mode/css/css");
require("codemirror/mode/htmlmixed/htmlmixed");

export default () => (
  <HashRouter>
    <React.Fragment>
      <Route path="/([0-9]+/[0-9]+)?" exact component={Presentation} />
      <Route path="/sandbox" exact component={Sandbox} />
    </React.Fragment>
  </HashRouter>
);
