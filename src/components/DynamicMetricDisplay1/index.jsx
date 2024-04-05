import MetricDisplayWidget from "../MetricDisplayWidget";
import "./style.css";

function DynamicMetricDisplay1({ possibleDynamicContentBoxArguments1 }) {
  return (
    <div className="metric-display-container">
      {possibleDynamicContentBoxArguments1.map((data, index) => {
        return <MetricDisplayWidget {...data} key={index} />;
      })}
    </div>
  );
}

export default DynamicMetricDisplay1;
