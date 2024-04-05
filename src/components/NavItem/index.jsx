import SvgIcon1 from "./icons/SvgIcon1";
import "./style.css";

function NavItem({ htmlContentTextColor1, sectionTitle, selectedClassName_dynamicContentOptions, handleDivClick, textColorFromArg21 }) {
  return (
    <div onClick={handleDivClick} className={`${selectedClassName_dynamicContentOptions} menu-container menu-title-container`}>
      <SvgIcon1 className="svg-container" htmlContentTextColor1={htmlContentTextColor1} textColorFromArg21={textColorFromArg21} />
      <p className="menu-title-text-style">{sectionTitle}</p>
    </div>
  );
}

export default NavItem;
