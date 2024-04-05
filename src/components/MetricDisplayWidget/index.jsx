import "./style.css";

function MetricDisplayWidget({ metricType, sectionTitle }) {
  return (
    <div className="metric-info-container">
      <p className="metric-label-container">{metricType}</p>
      <p className="story-points-label">{sectionTitle}</p>
    </div>
  );
}

export default MetricDisplayWidget;
