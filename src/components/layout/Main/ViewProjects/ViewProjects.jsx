import React from 'react';
import './style.scss'

const ViewProjects = () => {
    return (
        <div className="slider-text-inner">
            <div className="desc">
                <h1>Welcome to <br/> my portfolio</h1>
                <a className="btn-learn" href="https://github.com/VadimBorovuk?tab=repositories"
                   target="_blank"><span>View Projects</span>
                    <i className="fas fa-book"></i>
                </a>
            </div>
        </div>
    );
};

export default ViewProjects;
