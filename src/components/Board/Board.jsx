import { useEffect, useState } from "react";
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
  const [animating, setAnimating] = useState(false);

  const moveTile = (tile) => {
    const i16 = numbers.find((n) => n.value === 16).index;
    if (
      ![i16 - 1, i16 + 1, i16 - 4, i16 + 4].includes(tile.index) ||
      animating
    ) {
      return;
    }

    const newNumbers = [...numbers].map((number) => {
      if (number.index !== i16 && number.index !== tile.index) {
        return number;
      } else if (number.value === 16) {
        return { value: 16, index: tile.index };
      }
      return { value: tile.value, index: i16 };
    });
    setAnimating(true);
    setNumbers(newNumbers);
    setTimeout(() => setAnimating(false), 400);
  };

  const handleKeyDown = (e) => {
    const i16 = numbers.find((n) => n.value === 16).index;
    if (e.keyCode === 37 && !(i16 % 4 === 3)) {
      moveTile(numbers.find((n) => n.index === i16 + 1));
    }
    if (e.keyCode === 38 && !(i16 > 11)) {
      moveTile(numbers.find((n) => n.index === i16 + 4));
    }
    if (e.keyCode === 39 && !(i16 % 4 === 0)) {
      moveTile(numbers.find((n) => n.index === i16 - 1));
    }
    if (e.keyCode === 40 && !(i16 < 4)) {
      moveTile(numbers.find((n) => n.index === i16 - 4));
    }
  };

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  });

  return (
    <div className="game">
      <div className="board">
        <Overlay />
        {numbers.map((x, index) => (
          <Tile key={index} number={x} moveTile={moveTile} />
        ))}
      </div>
    </div>
  );
}
