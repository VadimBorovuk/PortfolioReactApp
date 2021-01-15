import React from 'react';

const TimeLineItem = ({position, dateStarted, description, colorStyle}) => {
    return (
        <div className="timeline-point">
            <div className="timeline-icon" style={{ background: `${colorStyle}`}}>
                <i className="fas fa-pencil-alt"></i>
            </div>
            <div className="timeline-description">
                <div className="description-position-date">
                    <span className="description-position">{position}</span>
                    <span className="description-date">{dateStarted}</span>
                </div>
                <div className="description-text">
                    {description}
                </div>
            </div>
            <div className="timeline-block-end"></div>
        </div>
    );
};

export default TimeLineItem;
