import "./style.css";

function ValueDisplayParagraph({ defectArrivalRateValue, selectedClassName_defectMetricsList1, handleParagraphClick }) {
  return (
    <p onClick={handleParagraphClick} className={`${selectedClassName_defectMetricsList1} time-period-label`}>
      {defectArrivalRateValue}
    </p>
  );
}

export default ValueDisplayParagraph;
