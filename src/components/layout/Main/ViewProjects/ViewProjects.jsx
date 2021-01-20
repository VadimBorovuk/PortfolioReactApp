import React from 'react';
import './style.scss'
import {Animated} from "react-animated-css";

const ViewProjects = () => {
    return (
        <div className="slider-text-inner">
            <Animated animationIn="fadeInDownBig" animationOut="pulse" isVisible={true}>
                <div className="desc">
                    <h1>Welcome to <br/> my portfolio</h1>
                    <a className="btn-learn" href="https://github.com/VadimBorovuk?tab=repositories"
                       target="_blank"><span>View Projects</span>
                        <i className="fas fa-book"></i>
                    </a>
                </div>
            </Animated>
        </div>
    );
};

export default ViewProjects;
