import { useState } from "react";
import "../../App.css";
import { Overlay } from "../Overlay/Overlay";
import { Tile } from "../Tile/Tile";
import "./Board.css";

export function Board() {
  const shuffle = () =>
    new Array(16)
      .fill()
      .map((_, index) => index + 1)
      .sort(() => Math.random() - 0.5)
      .map((x, index) => ({ value: x, index }));

  const [numbers, setNumbers] = useState(shuffle());

  return (
    <div className="game">
      <div className="board">
        <Overlay />
        {numbers.map((x, index) => (
          <Tile key={index} number={x} />
        ))}
      </div>
    </div>
  );
}
