import "./style.css";

function DisplayDefectMetrics({ defectArrivalRateValue }) {
  return <p className="metric-data-display vertical-margin-top">{defectArrivalRateValue}</p>;
}

export default DisplayDefectMetrics;
