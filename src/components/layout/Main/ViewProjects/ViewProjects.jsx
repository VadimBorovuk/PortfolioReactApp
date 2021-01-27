import React from 'react';

import {Animated} from "react-animated-css";
import {useTranslation} from "react-i18next";

import './style.scss';

const ViewProjects = () => {
    const {t} = useTranslation();

    return (
        <div className="slider-text-inner">
            <Animated animationIn="fadeInDownBig" animationOut="pulse" isVisible={true}>
                <div className="desc">
                    <h1 className="viewTitleProjects">{t('viewProjectsTitle')}</h1>
                    <a className="btn-learn" href="https://github.com/VadimBorovuk?tab=repositories"
                       target="_blank"><span>{t('viewProjectsLink')}</span>
                        <i className="fas fa-book"></i>
                    </a>
                </div>
            </Animated>
        </div>
    );
};

export default ViewProjects;
