import "./Overlay.css";

export const Overlay = () =>
  new Array(16)
    .fill()
    .map((_, index) => <div key={index} className="overlay" />);
