import React from 'react';
import Carusel from "../../view/Slider/Slider";

import './style.scss';

const Main = ({timelineArr}) => {

    return (
        <div className="main-block slider-content">
            <Carusel timelineArr={timelineArr}/>
        </div>
    );
};

export default Main;
