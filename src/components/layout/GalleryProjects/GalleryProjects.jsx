import React from 'react';

import ModalView from "../../view/ModalView/ModalView";
import Loader from "../../view/Loader/Loading";

import './style.scss'

const GalleryProjects = ({projectsArr, isLoadingProjects}) => {

    return (
        <div className="main-block content-projects">
            <div className="block-content-info">
                <h2 className="content-text-title title-projects">
                    My projects
                </h2>
                <div className="desc desc-cards">
                    <div className="cards">
                        {
                            isLoadingProjects ? <Loader/> :
                                projectsArr && projectsArr.map((item, index) => <ModalView key={index} {...item}/>)}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GalleryProjects;
