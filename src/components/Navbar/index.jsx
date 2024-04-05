import { useState } from "react";
import SvgIcon1 from "./icons/SvgIcon1";
import SvgIcon2 from "./icons/SvgIcon2";
import messages from "./messages.json";
import NavItem from "../NavItem";
import { theme } from "../../theme";
import "./style.css";


function Navbar({ dynamicContentOptions }) {

  const dynamicContentStyles = [{}, {}, {}, { textColorFromArg21: theme.colors.COLOR_A8239B5E }, {}];
  const [selected_dynamicContentOptions, handleDivClick] = useState(2);
  const isSelected_dynamicContentOptions = (index) => {
    return selected_dynamicContentOptions === index;
  };

  return (
    <div className="blue-box-container">
     <div className="vertical-flex-container">
      <div className="flex-align-end-with-padding">
        <img
          src="/assets/img_I1_1896_50_5435_50_5397_30_22671_191_280_968d4c.svg"
          className="image-container"
        />
      </div>
      <div className="product-info-container">
        <img
          src="/assets/img_I1_1896_55_5393_30_22837_89_4107_f99a54.svg"
          className="logo-image-container"
        />
        <p className="majestic-heading">{messages["catalix"]}</p>
      </div>
      <div className="menu-list-container">
      {dynamicContentOptions.map((data, index) => {
        return (
          <NavItem
            {...data}
            key={index}
            selectedClassName_dynamicContentOptions={isSelected_dynamicContentOptions(index) ? "blue-analytics-box" : ""}
            handleDivClick={() => handleDivClick(index)}
            {...dynamicContentStyles[index]}
          />
        );
      })}
    </div>
    </div>
      <div className="vertical-menu-container">
      <div className="navbar-item">
        <SvgIcon1 className="svg-container" />
        <p className="text-block-with-title">{messages["settings"]}</p>
      </div>
      <div className="menu-option-container">
        <SvgIcon2 className="svg-container" />
        <p className="text-block-with-title">{messages["logout"]}</p>
      </div>
    </div>
    </div>
  );
}

export default Navbar;
