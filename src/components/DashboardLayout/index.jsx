import { Button } from "@mui/base";
import ReportDisplay from "../ReportDisplay";
import EfficiencyDisplay from "../EfficiencyDisplay";
import MarketDataDisplay from "../MarketDataDisplay";
import DataDisplayWidget1 from "../DataDisplayWidget1";
import DataDisplayWidget from "../DataDisplayWidget";
import "./style.css";
import messages from "./messages.json";

function DashboardLayout() {
  return (
    <div className="dashboard-summary-view">
      <div className="dashboard-header-controls">
        <ReportDisplay />
        {/* Button Component starts here. We've generated code using MUI Base. See other options in "Component library" dropdown in Settings */}
        <Button className="rounded-share-button">{messages["share_this_dashboard"]}</Button>
        {/* Button Component starts here. We've generated code using MUI Base. See other options in "Component library" dropdown in Settings */}
        <Button className="rounded-button-with-border">{messages["select_duration"]}</Button>
        {/* Button Component starts here. We've generated code using MUI Base. See other options in "Component library" dropdown in Settings */}
        <Button className="rounded-button-with-text">{messages["compare_duration"]}</Button>
      </div>
      <div className="dashboard-metrics-container">
        <div className="flex-box-card">
          <EfficiencyDisplay />
        </div>
        <div className="flex-box-card">
          <MarketDataDisplay />
        </div>
        <div className="flex-box-card">
          <DataDisplayWidget1 />
        </div>
        <div className="flex-box-card">
          <DataDisplayWidget />
        </div>
      </div>
    </div>
  );
}

export default DashboardLayout;
