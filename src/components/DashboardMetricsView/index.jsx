import TimeDisplayWidget from "../TimeDisplayWidget";
import DynamicMetricDisplay1 from "../DynamicMetricDisplay1";
import "./style.css";

function DashboardMetricsView({ possibleDynamicContentBoxArguments1 }) {
  return (
    <div className="time-metric-container">
      <TimeDisplayWidget />
      <DynamicMetricDisplay1 possibleDynamicContentBoxArguments1={possibleDynamicContentBoxArguments1} />
    </div>
  );
}

export default DashboardMetricsView;
