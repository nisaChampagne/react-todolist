import React from "react";
import Badges from "./Badges";
import Second from "./Modal";


export default function BothOptions() {
  return (
    <div className="App">
      <h1>React-Popup</h1>
      <Badges />
      <br />
      <hr />
      <h1>React-Modal</h1>
      <Second />
    </div>
  );
}
