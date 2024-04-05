import "./style.css";
import messages from "./messages.json";

function DynamicContentDisplay() {
  return (
    <div className="time-card">
      <img
        src="/assets/img_1_1975_948752.svg"
        className="scope-image-container"
      />
      <p className="scope-heading-text-style">{messages["scope"]}</p>
    </div>
  );
}

export default DynamicContentDisplay;
