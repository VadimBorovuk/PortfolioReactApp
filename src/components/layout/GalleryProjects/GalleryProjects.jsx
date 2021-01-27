import React from 'react';

import ModalView from "../../view/ModalView/ModalView";
import Loader from "../../view/Loader/Loading";
import {Animated} from "react-animated-css";
import {useTranslation} from "react-i18next";

import './style.scss'

const GalleryProjects = ({projectsArr, isLoadingProjects}) => {
    const {t} = useTranslation();
    return (
        <div className="main-block content-projects">
            <div className="block-content-info">
                <Animated animationIn="fadeInDownBig" animationOut="pulse" isVisible={true}>
                    <h2 className="content-text-title title-projects">{t('myProjectsTitle')}</h2>
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
