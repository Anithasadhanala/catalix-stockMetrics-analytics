import "./style.css";
import messages from "./messages.json";

function MarketDataDisplay() {
  return (
    <div className="market-stats-container">
      <p className="efficiency-highlighted">{messages["time_market"]}</p>
      <p className="market-trend-stats">{messages["lorem_ipsum_1"]}</p>
      <p className="efficiency-data-block">{messages["327176"]}</p>
      <p className="efficiency-change-info">{messages["9791400_2303"]}</p>
      <p className="golden-text">{messages["131040723108_jpy"]}</p>
    </div>
  );
}

export default MarketDataDisplay;
