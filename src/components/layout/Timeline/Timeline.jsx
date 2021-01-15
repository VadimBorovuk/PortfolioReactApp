import React from 'react';
import './style.scss';
import TimeLineItem from "./TimeLineItem";

const Timeline = ({timelineArr}) => {
    return (
        <div className="timeline-block">
            <h1 className="timeline-block-title">Timeline</h1>
            <div className="timeline-blocks-info">
                {timelineArr && timelineArr.map((items, index) => <TimeLineItem key={index} {...items}/>)}
            </div>
        </div>
    );
};

export default Timeline;
