import "./style.css";
import messages from "./messages.json";

function DataDisplayWidget() {
  return (
    <div className="predictability-info-box">
      <p className="efficiency-highlighted">{messages["predictability"]}</p>
      <p className="semantic-text-block">{messages["lorem_ipsum_3"]}</p>
      <p className="efficiency-data-block">0.00313010</p>
      <p className="efficiency-change-info">{messages["000050430_1388"]}</p>
      <p className="pink-text-subheading">{messages["1566_btc"]}</p>
    </div>
  );
}

export default DataDisplayWidget;
