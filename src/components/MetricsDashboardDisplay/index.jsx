import Navbar from "../Navbar";
import DashboardLayout from "../DashboardLayout";
import DashboardMetricsView from "../DashboardMetricsView";
import ContentBoxDisplay from "../ContentBoxDisplay";
import VelocityMetricsView from "../VelocityMetricsView";
import MetricsDashboardView from "../MetricsDashboardView";
import "./style.css";
import messages from "./messages.json";
import SvgIcon1 from "./icons/SvgIcon1";




function MetricsDashboardDisplay({
  possibleDynamicContentBoxArguments1,
  possibleDefectMetricsDataList,
  defectMetricsList,
  dynamicContentOptions,
  possibleDynamicContentBoxArguments,
  defectMetricsDataList1,
  possibleDefectMetricsDataList1,
  defectMetricsPercentages,
  defectMetricsDataList2,
  listOfDefectMetricsData,
  defectMetricsDataList,
  possibleDefectMetricsArguments,
  defectMetricsList1,
  defectMetricsDataSet,
}) {
  return (
    <div className="dashboard-container">
      <div className="dashboard-sidebar">
        <Navbar dynamicContentOptions={dynamicContentOptions} />
      </div>
      <div className="dashboard-container1">
        <div className="dashboard-overview-section">
          <div className="search-section">
          <div className="search-container">
            <SvgIcon1 className="svg-container1" />
            <input type="search" class="search-image" placeholder={messages["search_profile_setting_artifact_etc"]}/>
          </div>
          </div>
          <div className="navbar-item">
            <img
              src="/assets/img_cf253a25_2fa6f6.svg"
              className="boxy-image"
            />
            <img src="/assets/img_1_2151_87f283.jpeg" className="circular-avatar" />
          </div>
        </div>
        <DashboardLayout />
        <div className="metric-section-container">
          <DashboardMetricsView possibleDynamicContentBoxArguments1={possibleDynamicContentBoxArguments1} />
          <ContentBoxDisplay possibleDynamicContentBoxArguments={possibleDynamicContentBoxArguments} />
          <VelocityMetricsView />
        </div>
        <MetricsDashboardView
          possibleDefectMetricsDataList={possibleDefectMetricsDataList}
          defectMetricsList={defectMetricsList}
          defectMetricsDataList1={defectMetricsDataList1}
          possibleDefectMetricsDataList1={possibleDefectMetricsDataList1}
          defectMetricsPercentages={defectMetricsPercentages}
          defectMetricsDataList2={defectMetricsDataList2}
          listOfDefectMetricsData={listOfDefectMetricsData}
          defectMetricsDataList={defectMetricsDataList}
          possibleDefectMetricsArguments={possibleDefectMetricsArguments}
          defectMetricsList1={defectMetricsList1}
          defectMetricsDataSet={defectMetricsDataSet}
        />
      </div>
    </div>
  );
}

export default MetricsDashboardDisplay;
