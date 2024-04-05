import DisplayDefectMetrics from "../DisplayDefectMetrics";
import "./style.css";

function DisplayDefectMetricsList({ possibleDefectMetricsArguments }) {
  return (
    <div className="metric-container1">
      {possibleDefectMetricsArguments.map((data, index) => {
        return <DisplayDefectMetrics {...data} key={index} />;
      })}
    </div>
  );
}

export default DisplayDefectMetricsList;
