import React from "react";

function ColorText({ color }) {
  return (
    <h1 style={{ color: color }}>
      This text is {color}
    </h1>
  );
}

function App() {
  const colors = ["red", "blue", "green", "purple", "orange"];

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <ColorText color={colors[0]} />
      <ColorText color={colors[1]} />
      <ColorText color={colors[2]} />
      <ColorText color={colors[3]} />
      <ColorText color={colors[4]} />
    </div>
  );
}

export default App;