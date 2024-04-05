import MetricDisplayWidget from "../MetricDisplayWidget";
import "./style.css";

function DynamicMetricDisplay({ possibleDynamicContentBoxArguments }) {
  return (
    <div className="metric-display-container">
      {possibleDynamicContentBoxArguments.map((data, index) => {
        return <MetricDisplayWidget {...data} key={index} />;
      })}
    </div>
  );
}

export default DynamicMetricDisplay;
