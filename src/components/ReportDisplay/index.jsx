import SvgIcon1 from "./icons/SvgIcon1";
import "./style.css";
import messages from "./messages.json";

function ReportDisplay() {
  return (
    <div className="report-container">
      <SvgIcon1 className="svg-container2" />
      <p className="report-title-text-style">{messages["create_report"]}</p>
    </div>
  );
}

export default ReportDisplay;
