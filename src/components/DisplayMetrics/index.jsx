import MetricDisplay from "../MetricDisplay";
import "./style.css";

function DisplayMetrics({ defectMetricsDataSet }) {
  return (
    <div className="page-metrics-container">
      {defectMetricsDataSet.map((data, index) => {
        return <MetricDisplay {...data} key={index} />;
      })}
    </div>
  );
}

export default DisplayMetrics;
