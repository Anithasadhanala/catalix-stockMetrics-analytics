import DisplayDefectMetrics1 from "../DisplayDefectMetrics1";
import DefectMetricsDashboard from "../DefectMetricsDashboard";
import "./style.css";

function QualityMetricsDashboard({ defectMetricsPercentages, defectMetricsDataList2, defectMetricsList1 }) {
  return (
    <div className="metrics-container">
      <DisplayDefectMetrics1 defectMetricsPercentages={defectMetricsPercentages} />
      <DefectMetricsDashboard defectMetricsDataList2={defectMetricsDataList2} defectMetricsList1={defectMetricsList1} />
    </div>
  );
}

export default QualityMetricsDashboard;
