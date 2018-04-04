import * as React from "react";
import ReactDOM from "react-dom";
import { Manager, Target, Popper } from "react-popper";

ReactDOM.render(
  <div
    style={{
      width: 500,
      height: 500,
      margin: "0 auto",
      paddingTop: 250,
      textAlign: "center"
    }}
  >
    <Manager>
      <Target>
        {({ targetProps }) => <div {...targetProps}>Target Box</div>}
      </Target>
      <Popper placement="top">
        {({ popperProps }) => <div {...popperProps}>Popper Content</div>}
      </Popper>
    </Manager>
  </div>,
  document.getElementById("root")
);
