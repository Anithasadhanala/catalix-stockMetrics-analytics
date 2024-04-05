import DynamicContentDisplay from "../DynamicContentDisplay";
import DynamicMetricDisplay from "../DynamicMetricDisplay";
import "./style.css";

function ContentBoxDisplay({ possibleDynamicContentBoxArguments }) {
  return (
    <div className="scope-card">
      <DynamicContentDisplay />
      <DynamicMetricDisplay possibleDynamicContentBoxArguments={possibleDynamicContentBoxArguments} />
    </div>
  );
}

export default ContentBoxDisplay;
