import DefectMetricsDisplay from "../DefectMetricsDisplay";
import DisplayMetrics1 from "../DisplayMetrics1";
import "./style.css";

function DefectMetricsDashboard({ defectMetricsDataList2, defectMetricsList1 }) {
  return (
    <div className="metrics-container1">
      <DefectMetricsDisplay defectMetricsList1={defectMetricsList1} />
      <DisplayMetrics1 defectMetricsDataList2={defectMetricsDataList2} />
    </div>
  );
}

export default DefectMetricsDashboard;
