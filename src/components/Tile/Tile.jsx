import "./Tile.css";

export function Tile({ number, moveTile }) {
  return (
    <div
      onClick={() => moveTile(number)}
      className={`number ${number.value === 16 ? "disabled" : ""} slot--${
        number.index
      }`}
    >
      {number.value === 16 ? "" : number.value}
    </div>
  );
}
