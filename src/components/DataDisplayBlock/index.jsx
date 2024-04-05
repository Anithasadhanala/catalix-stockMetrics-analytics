import "./style.css";
import messages from "./messages.json";

function DataDisplayBlock() {
  return (
    <div className="time-selector-container">
      <p className="time-period-label">{messages["today"]}</p>
      <p className="time-period-label">{messages["yesterday"]}</p>
      <p className="time-period-label">{messages["week"]}</p>
      <p className="time-period-label">{messages["month"]}</p>
      <p className="time-period-label">{messages["quarter"]}</p>
      <p className="time-period-label">{messages["year"]}</p>
    </div>
  );
}

export default DataDisplayBlock;
