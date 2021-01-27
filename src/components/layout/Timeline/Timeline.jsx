import React from 'react';
import TimeLineItem from "./TimeLineItem";
import {useTranslation} from "react-i18next";

import './style.scss';


const Timeline = ({timelineArr}) => {
    const {t} = useTranslation();

    return (
        <div className="timeline-block">
            <h1 className="timeline-block-title">{t('timelineTitle')}</h1>
            <div className="timeline-blocks-info">
                {timelineArr && timelineArr.map((items, index) => <TimeLineItem key={index} {...items}/>)}
            </div>
        </div>
    );
};

export default Timeline;
