import VelocityDisplay from "../VelocityDisplay";
import VelocityComparisonDisplay from "../VelocityComparisonDisplay";
import "./style.css";

function VelocityMetricsView() {
  return (
    <div className="velocity-card">
      <VelocityDisplay />
      <VelocityComparisonDisplay />
    </div>
  );
}

export default VelocityMetricsView;
