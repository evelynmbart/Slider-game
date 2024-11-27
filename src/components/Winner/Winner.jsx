import "./Winner.css";

export function Winner({ numbers }) {
  if (!numbers.every((n) => n.value === n.index + 1)) {
    return null;
  }
  return (
    <div className="winner">
      <p>You Won!</p>
    </div>
  );
}
