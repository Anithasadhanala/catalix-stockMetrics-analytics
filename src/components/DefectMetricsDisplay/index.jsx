import { useState } from "react";
import ValueDisplayParagraph from "../ValueDisplayParagraph";
import "./style.css";

function DefectMetricsDisplay({ defectMetricsList1 }) {
  const [selected_defectMetricsList1, handleParagraphClick] = useState(2);

  const isSelected_defectMetricsList1 = (index) => {
    return selected_defectMetricsList1 === index;
  };

  return (
    <div className="metric-value-container1">
      {defectMetricsList1.map((data, index) => {
        return (
          <ValueDisplayParagraph
            {...data}
            key={index}
            selectedClassName_defectMetricsList1={isSelected_defectMetricsList1(index) ? "price-with-padding" : ""}
            handleParagraphClick={() => handleParagraphClick(index)}
          />
        );
      })}
    </div>
  );
}

export default DefectMetricsDisplay;
