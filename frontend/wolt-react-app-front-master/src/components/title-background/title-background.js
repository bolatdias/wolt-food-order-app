import React from "react";
import './title-background.css';


const TitleBackground = ({ title, p, img, height, isDarkOverlay, textColor }) => {
  // Set default text color to black if textColor is not provided
  const defaultTextColor = textColor || 'white';

  return (
    <div className="background-container position-relative" style={{ height: height, background: `url(${img}) center/cover no-repeat` }}>
      {isDarkOverlay ? <div className="dark-overlay"></div> : null}
      <div className={`container position-absolute bottom-0 pb-5 col-3 col-md-7 col-lg-3`} style={{ color: defaultTextColor }}>
        <h2 className="pt-5 background-text">{title}</h2>
        <p>{p}</p>
      </div>
    </div>
  );
};

export default TitleBackground;
