import "./style.css";
import messages from "./messages.json";

function VelocityDisplay() {
  return (
    <div className="time-card">
      <img
        src="/assets/img_1_1985_ac5581.svg"
        className="scope-image-container"
      />
      <p className="velocity-text-heading">{messages["velocity"]}</p>
    </div>
  );
}

export default VelocityDisplay;
