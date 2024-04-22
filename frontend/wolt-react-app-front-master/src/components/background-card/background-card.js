import React from "react";
import './background-card.css';

const BackgroundCard = ({ title, p, img, height, isDarkOverlay, textColor }) => {

    const defaultTextColor = textColor || 'white';

    return (
        <div className="">
            <div className="background-card-container" style={{ height: height, background: `url(${img}) center/cover no-repeat` }}>
                {isDarkOverlay ? <div className="dark-overlay"></div> : null}
                <div className="background-card" style={{ color: defaultTextColor }}>
                    <h2 className="pt-5 background-text">{title}</h2>
                    <p>{p}</p>
                </div>
            </div>
        </div>
    );
};

export default BackgroundCard;
