import "./Tile.css";

export function Tile({ number }) {
  return (
    <div
      className={`number ${number.value === 16 ? "disabled" : ""} slot--${
        number.index
      }`}
    >
      {number.value}
    </div>
  );
}
