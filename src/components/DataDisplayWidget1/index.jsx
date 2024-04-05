import "./style.css";
import messages from "./messages.json";

function DataDisplayWidget1() {
  return (
    <div className="tech-debt-info-card">
      <p className="tech-debt-label">{messages["tech_debt"]}</p>
      <p className="tech-debt-description-stats">{messages["lorem_ipsum_2"]}</p>
      <p className="tech-debt-value">1.1763</p>
      <p className="price-change-info">{messages["00015_013_1"]}</p>
      <p className="tech-debt-value-stats">{messages["000_usd_1"]}</p>
    </div>
  );
}

export default DataDisplayWidget1;
