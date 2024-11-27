import "./Overlay.css";

export function Overlay() {
  new Array(16)
    .fill()
    .map((_, index) => <div key={index} className="overlay" />);
}
