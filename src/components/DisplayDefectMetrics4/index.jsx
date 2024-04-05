import MetricDisplay1 from "../MetricDisplay1";
import "./style.css";

function DisplayDefectMetrics4({ defectMetricsList }) {
  return (
    <div className="metric-value-container1">
      {defectMetricsList.map((data, index) => {
        return <MetricDisplay1 {...data} key={index} />;
      })}
    </div>
  );
}

export default DisplayDefectMetrics4;
