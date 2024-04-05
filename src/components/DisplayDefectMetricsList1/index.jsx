import DisplayDefectMetrics from "../DisplayDefectMetrics";
import "./style.css";

function DisplayDefectMetricsList1({ possibleDefectMetricsDataList1 }) {
  return (
    <div className="metric-data-container">
      {possibleDefectMetricsDataList1.map((data, index) => {
        return <DisplayDefectMetrics {...data} key={index} />;
      })}
    </div>
  );
}

export default DisplayDefectMetricsList1;
