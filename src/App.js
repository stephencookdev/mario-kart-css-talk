import React from "react";
import { HashRouter, Route } from "react-router-dom";
import Presentation from "./Presentation";
import Sandbox from "./misc/Sandbox/wrappers";
import Sandbox01 from "./misc/Sandbox/wrappers/final/01 - scenery";
import Sandbox02 from "./misc/Sandbox/wrappers/final/02 - animation";
import Sandbox03 from "./misc/Sandbox/wrappers/final/03 - spriteAnimation";
import Sandbox04 from "./misc/Sandbox/wrappers/final/04 - interactivity";
require("codemirror/mode/css/css");
require("codemirror/mode/htmlmixed/htmlmixed");

export default () => (
  <HashRouter>
    <React.Fragment>
      <Route path="/([0-9]+/[0-9]+)?" exact component={Presentation} />
      <Route path="/sandbox" exact component={Sandbox} />
      <Route path="/sandbox-01" exact component={Sandbox01} />
      <Route path="/sandbox-02" exact component={Sandbox02} />
      <Route path="/sandbox-03" exact component={Sandbox03} />
      <Route path="/sandbox-04" exact component={Sandbox04} />
    </React.Fragment>
  </HashRouter>
);
