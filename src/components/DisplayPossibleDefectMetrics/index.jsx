import MetricDisplay1 from "../MetricDisplay1";
import "./style.css";

function DisplayPossibleDefectMetrics({ possibleDefectMetricsDataList }) {
  return (
    <div className="metric-value-container2">
      {possibleDefectMetricsDataList.map((data, index) => {
        return <MetricDisplay1 {...data} key={index} />;
      })}
    </div>
  );
}

export default DisplayPossibleDefectMetrics;
