import DisplayDefectMetrics4 from "../DisplayDefectMetrics4";
import DisplayDefectMetricsList1 from "../DisplayDefectMetricsList1";
import DisplayDefectMetrics2 from "../DisplayDefectMetrics2";
import "./style.css";

function DefectMetricsDisplay1({ defectMetricsList, possibleDefectMetricsDataList1, defectMetricsDataList }) {
  return (
    <div className="metrics-container">
      <DisplayDefectMetrics4 defectMetricsList={defectMetricsList} />
      <DisplayDefectMetricsList1 possibleDefectMetricsDataList1={possibleDefectMetricsDataList1} />
      <DisplayDefectMetrics2 defectMetricsDataList={defectMetricsDataList} />
    </div>
  );
}

export default DefectMetricsDisplay1;
