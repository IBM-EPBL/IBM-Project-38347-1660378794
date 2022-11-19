import React from "react";

import Area from "./components/Area";
import Bar from "./components/Bar";

import Line from "./components/Line";

import SendMail from "./components/SendMail";

const components = [
  ["Supply", Area],

  ["Demand", Line],
  ["Stock", Bar],
  // ["Bar (Stacked)", BarStacked],
  // ["Bar (Horizontal)", BarHorizontal],
  // ["Bar (Horizontal + Stacked)", BarHorizontalStacked],
  // ["Band", Band],

  // ["Bubble", Bubble],
  // ["Steam", Steam],
  // ["Spark Chart", SparkChart],
  // ["Multiple Axes", MultipleAxes],
  // ["Interaction Modes", InteractionMode],
  // ["Dark Mode", DarkMode],
  // ["Dynamic / Overflow Container", DynamicContainer],
  // ["Custom Styles", CustomStyles],
  // ["Synced Cursors", SyncedCursors],
  // ["Stress Test", StressTest],
];

export default function App() {
  // useLagRadar();

  return (
    <div>
      {components.map(([label, Comp]) => {
        return (
          <div key={label + ""}>
            <h1
              style={{
                marginLeft: "4%",
                paddingLeft: "0.5rem",
                color: "#777",
                fontFamily: "monospace",
                marginBottom: "-9px",
              }}
            >
              {label as any}
            </h1>
            <div>
              <Comp />
            </div>
          </div>
        );
      })}
      <SendMail />
      {/* <div style={{ height: "50rem" }} /> */}
    </div>
  );
}

// const rootElement = document?.getElementById("root");
// ReactDOM.render(<App />, rootElement);
