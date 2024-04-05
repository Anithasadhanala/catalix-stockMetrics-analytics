import "./style.css";
import messages from "./messages.json";

function VelocityComparisonDisplay() {
  return (
    <div className="vertical-center-stats">
      <div className="metric-info-container">
        <p className="metric-label-container">{messages["average_velocity"]}</p>
        <p className="story-points-label">428.6</p>
      </div>
      <div className="velocity-info-container">
        <p className="metric-label-container">{messages["required_velocity"]}</p>
        <p className="story-points-label">615.0</p>
      </div>
    </div>
  );
}

export default VelocityComparisonDisplay;
