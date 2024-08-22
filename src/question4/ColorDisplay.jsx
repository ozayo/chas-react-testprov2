import { useContext } from "react";
import { ColorContext } from "./colorContext";

export default function ColorDisplay() {
  const { color } = useContext(ColorContext);

  return (
    <div>
      <p>{color ? `Din favoritfärg är: ${color}` : "Ingen färg vald"}</p>
    </div>
  );
}