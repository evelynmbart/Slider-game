import { Overlay } from "../Overlay/Overlay";
import "./Board/Board.css";

export function Board() {
  return (
    <div className="game">
      <div className="board">board</div>
      <Overlay />
    </div>
  );
}
