import MetricDisplay from "../MetricDisplay";
import "./style.css";

function DisplayDefectMetrics3({ defectMetricsDataList1 }) {
  return (
    <div className="page-metrics-container1">
      {defectMetricsDataList1.map((data, index) => {
        return <MetricDisplay {...data} key={index} />;
      })}
    </div>
  );
}

export default DisplayDefectMetrics3;
