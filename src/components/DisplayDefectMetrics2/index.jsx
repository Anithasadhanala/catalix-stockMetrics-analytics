import MetricDisplay from "../MetricDisplay";
import "./style.css";

function DisplayDefectMetrics2({ defectMetricsDataList }) {
  return (
    <div className="page-metrics-container">
      {defectMetricsDataList.map((data, index) => {
        return <MetricDisplay {...data} key={index} />;
      })}
    </div>
  );
}

export default DisplayDefectMetrics2;
