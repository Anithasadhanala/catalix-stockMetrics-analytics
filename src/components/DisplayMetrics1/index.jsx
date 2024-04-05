import MetricDisplay from "../MetricDisplay";
import "./style.css";

function DisplayMetrics1({ defectMetricsDataList2 }) {
  return (
    <div className="metric-container">
      {defectMetricsDataList2.map((data, index) => {
        return <MetricDisplay {...data} key={index} />;
      })}
    </div>
  );
}

export default DisplayMetrics1;
