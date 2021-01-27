import React from 'react';

import './style.scss';
import Loader from "../Loader/Loading";

const SuspenseLoader = () => {
    return (
        <div className="suspense-loader">
            Loading...
            <Loader/>
        </div>
    );
};

export default SuspenseLoader;
