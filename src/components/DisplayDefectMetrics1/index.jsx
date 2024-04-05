import MetricDisplay1 from "../MetricDisplay1";
import "./style.css";

function DisplayDefectMetrics1({ defectMetricsPercentages }) {
  return (
    <div className="metric-value-container1">
      {defectMetricsPercentages.map((data, index) => {
        return <MetricDisplay1 {...data} key={index} />;
      })}
    </div>
  );
}

export default DisplayDefectMetrics1;
