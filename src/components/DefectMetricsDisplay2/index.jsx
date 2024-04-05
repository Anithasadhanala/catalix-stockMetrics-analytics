import DisplayDefectMetricsList from "../DisplayDefectMetricsList";
import DisplayPossibleDefectMetrics from "../DisplayPossibleDefectMetrics";
import DisplayDefectMetrics3 from "../DisplayDefectMetrics3";
import DisplayDefectMetrics5 from "../DisplayDefectMetrics5";
import DisplayMetrics from "../DisplayMetrics";
import "./style.css";

function DefectMetricsDisplay2({ possibleDefectMetricsDataList, defectMetricsDataList1, listOfDefectMetricsData, possibleDefectMetricsArguments, defectMetricsDataSet }) {
  return (
    <div className="metrics-container">
      <DisplayDefectMetricsList possibleDefectMetricsArguments={possibleDefectMetricsArguments} />
      <DisplayPossibleDefectMetrics possibleDefectMetricsDataList={possibleDefectMetricsDataList} />
      <DisplayDefectMetrics3 defectMetricsDataList1={defectMetricsDataList1} />
      <DisplayDefectMetrics5 listOfDefectMetricsData={listOfDefectMetricsData} />
      <DisplayMetrics defectMetricsDataSet={defectMetricsDataSet} />
    </div>
  );
}

export default DefectMetricsDisplay2;
