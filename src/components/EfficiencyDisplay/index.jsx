import "./style.css";
import messages from "./messages.json";

function EfficiencyDisplay() {
  return (
    <div className="efficiency-card">
      <p className="efficiency-highlighted">{messages["efficiency"]}</p>
      <p className="efficiency-text">{messages["lorem_ipsum"]}</p>
      <p className="efficiency-data-block">1.1921</p>
      <p className="efficiency-change-info">{messages["00015_013"]}</p>
      <p className="efficiency-details-text-style">{messages["000_usd"]}</p>
    </div>
  );
}

export default EfficiencyDisplay;
