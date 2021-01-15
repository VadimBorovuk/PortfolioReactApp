import React from 'react';
import BarChartData from "../../view/BarChart/BarChartData";

import './style.scss';

const Graffic = () => {
    return (
        <div className="App" style={{color: "#fff"}}>
            <h2 className="rating-block-title">Rating skills</h2>
            <BarChartData/>
        </div>
    );
}


export default Graffic;

