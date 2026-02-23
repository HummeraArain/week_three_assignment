import { useState } from "react";
import ColorText from "./ColorText";

function App() {

  const colors = ["red", "blue", "green", "purple"];
  const [index, setIndex] = useState(0);

  const changeColor = () => {
    setIndex((index + 1) % colors.length);
  };

  return (
    <>
      <ColorText color={colors[index]} />
      <button onClick={changeColor}>Change Color</button>
    </>
  );
}

export default App;