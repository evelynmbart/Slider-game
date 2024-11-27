import "./NewGame.css";

export function NewGame({ reset }) {
  return (
    <div className="button-wrapper">
      <button onClick={reset}>New Game</button>
    </div>
  );
}
