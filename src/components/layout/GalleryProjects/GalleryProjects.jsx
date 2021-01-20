import React, {useEffect} from 'react';

import ModalView from "../../view/ModalView/ModalView";
import Loader from "../../view/Loader/Loading";

import './style.scss'
import {Animated} from "react-animated-css";

const GalleryProjects = ({projectsArr, isLoadingProjects}) => {
    return (
        <div className="main-block content-projects">
            <div className="block-content-info">
                <Animated animationIn="fadeInDownBig" animationOut="pulse" isVisible={true}>
                    <h2 className="content-text-title title-projects">
                        My projects
                    </h2>
                </Animated>
                <div className="desc desc-cards">
                    <Animated animationIn="fadeInUpBig" animationOut="pulse" isVisible={true}>
                        <div className="cards">
                            {
                                isLoadingProjects ? <Loader/> :
                                    projectsArr && projectsArr.map((item, index) => <ModalView key={index} {...item}/>)
                            }
                        </div>
                    </Animated>
                </div>
            </div>
        </div>
    );
};

export default GalleryProjects;
