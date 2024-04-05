import MetricDisplay1 from "../MetricDisplay1";
import "./style.css";

function DisplayDefectMetrics5({ listOfDefectMetricsData }) {
  return (
    <div className="metric-value-container">
      {listOfDefectMetricsData.map((data, index) => {
        return <MetricDisplay1 {...data} key={index} />;
      })}
    </div>
  );
}

export default DisplayDefectMetrics5;
