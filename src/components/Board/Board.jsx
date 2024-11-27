import { Overlay } from "../Overlay/Overlay";
import "./Board.css";

export function Board() {
  return (
    <div className="game">
      <div className="board">
        <Overlay />
      </div>
    </div>
  );
}
