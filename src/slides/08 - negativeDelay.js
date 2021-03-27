import React from "react";
import { Slide } from "zlides";

export default () => (
  <Slide title={true}>
    <div className="hugeText">
      <q className="quote">
        <span className="quoteHighlight">
          A negative [animation-delay] is valid.
        </span>{" "}
        Similar to a delay of 0s, it means that the animation executes
        immediately, but is automatically progressed by the absolute value of
        the delay, as if the animation had started the specified time in the
        past, and so it appears to start partway through its active duration.
      </q>
    </div>
  </Slide>
);
