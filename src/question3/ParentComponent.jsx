import ChildComponent from "./ChildComponent";
import { useState } from "react";

export default function ParentComponent() {
  const [color, setColor] = useState("");

  function handleColor(color) {
    setColor(color);
  }

  return (
    <div>
      <p>{color ? `Din favoritfärg är: ${color}` : "Favoritfärg inte vald"}</p>
      <ChildComponent handleColor={handleColor} />
    </div>
  );
}