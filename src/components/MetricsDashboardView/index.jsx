import { forwardRef } from "react";
import { Select, Option } from "@mui/base";
import DataDisplayBlock from "../DataDisplayBlock";
import DefectMetricsDisplay2 from "../DefectMetricsDisplay2";
import DefectMetricsDisplay1 from "../DefectMetricsDisplay1";
import QualityMetricsDashboard from "../QualityMetricsDashboard";
import "./style.css";
import messages from "./messages.json";

function MetricsDashboardView({
  possibleDefectMetricsDataList,
  defectMetricsList,
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
    <div className="pageview-stats-container1">
      <div className="pageview-stats-container">
        <div className="pageviews-container">
          <p className="pageviews-heading">{messages["pageviews"]}</p>
          <div className="pageviews-container-flex-box">
            <DataDisplayBlock />
            <div className="time-selector-container1">
              {/* Select Component starts here. We've generated code using MUI Base. See other options in "Component library" dropdown in Settings */}
              <Select
                slotProps={{
                  listbox: {
                    style: {
                      listStyle: "none",
                      minHeight: "300px",
                      minWidth: "250px",
                      boxSizing: "border-box",
                      border: "1px solid",
                      borderRadius: "12px",
                    },
                  },
                }}
                slots={{
                  root: forwardRef((props, ref) => {
                    const { ownerState, className, ...rest } = props;
                    return (
                      <div {...rest} ref={ref} className={`select-box-container fullwidth-box-model ${className}`}>
                        {props.children}
                      </div>
                    );
                  }),
                }}
                renderValue={() => (
                  <>
                    <p className="metric-text-display-style">{messages["select_period"]}</p>
                    <div className="mini-box">
                      <svg fill="none" viewBox="0 0 8 8" xmlns="http://www.w3.org/2000/svg" x="0" y="0">
                        <g id="Icon/Arrow" xmlns="http://www.w3.org/2000/svg" data-node-id="1:2118">
                          <path
                            id="Arrow_6"
                            d="M3.995,5.042l2.86,-2.868c0.14,-0.144 0.37,-0.144 0.52,0c0.14,0.144 0.14,0.378 0,0.522l-3.12,3.13c-0.14,0.144 -0.37,0.144 -0.52,0l-3.11,-3.13c-0.14,-0.144 -0.14,-0.378 0,-0.522c0.14,-0.144 0.38,-0.144 0.52,0z"
                            fill="currentColor"
                            fillRule="evenodd"
                            data-node-id="1:2119"
                          />
                        </g>
                      </svg>
                    </div>
                  </>
                )}
              >
                <Option>{messages["add_options_here"]}</Option>
              </Select>
            </div>
          </div>
        </div>
        <div className="pageviews-summary-container">
          <p className="page-details-text-style">{messages["page"]}</p>
          <div className="navbar-item">
            <div className="flex-column-align-bottom">
              <p className="page-details-text-style">{messages["pageviews_1"]}</p>
              <p className="stat-card-text-style">{messages["356928"]}</p>
            </div>
            <div className="page-metrics-container2">
              <div className="navbar-item">
                <div className="flex-column-align-bottom">
                  <p className="page-details-text-style">{messages["unique_pageviews"]}</p>
                  <p className="stat-card-text-style">{messages["275588"]}</p>
                </div>
                <div className="vertical-align-center-bottom">
                  <p className="page-details-text-style">{messages["avg_time_page"]}</p>
                  <p className="stat-card-text-style">{messages["000351"]}</p>
                </div>
              </div>
              <div className="navbar-item">
                <div className="flex-column-align-bottom">
                  <p className="page-details-text-style">{messages["extrances"]}</p>
                  <p className="stat-card-text-style">{messages["315643"]}</p>
                </div>
                <div className="vertical-centered-column-flex">
                  <p className="percentage-label">{messages["exit"]}</p>
                  <p className="stat-card-text-style">{messages["3984"]}</p>
                </div>
              </div>
              <div className="flex-column-align-bottom">
                <p className="page-details-text-style">{messages["page_value"]}</p>
                <p className="stat-card-text-style">{messages["19983"]}</p>
              </div>
            </div>
          </div>
        </div>
        <div className="metric-dashboard-view">
          <DefectMetricsDisplay2
            possibleDefectMetricsDataList={possibleDefectMetricsDataList}
            defectMetricsDataList1={defectMetricsDataList1}
            listOfDefectMetricsData={listOfDefectMetricsData}
            possibleDefectMetricsArguments={possibleDefectMetricsArguments}
            defectMetricsDataSet={defectMetricsDataSet}
          />
          <DefectMetricsDisplay1 defectMetricsList={defectMetricsList} possibleDefectMetricsDataList1={possibleDefectMetricsDataList1} defectMetricsDataList={defectMetricsDataList} />
          <QualityMetricsDashboard defectMetricsPercentages={defectMetricsPercentages} defectMetricsDataList2={defectMetricsDataList2} defectMetricsList1={defectMetricsList1} />
        </div>
      </div>
    </div>
  );
}

export default MetricsDashboardView;
