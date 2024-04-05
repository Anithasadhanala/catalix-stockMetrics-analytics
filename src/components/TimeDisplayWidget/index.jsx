import "./style.css";
import messages from "./messages.json";

function TimeDisplayWidget() {
  return (
    <div className="time-card">
      <img
        src="/assets/img_1_1953_74cb95.svg"
        className="time-indicator"
      />
      <p className="scope-heading-text-style">{messages["time"]}</p>
    </div>
  );
}

export default TimeDisplayWidget;
