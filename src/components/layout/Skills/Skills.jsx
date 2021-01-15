import React, {useEffect} from 'react';
import Loader from "../../view/Loader/Loading";
import ButtonShowSkills from "../../view/ButtonShowSkills/ButtonShowSkills";

import './style.scss';

const Skills = ({skillsArr, isLoading}) => {

    return (
        <div className="main-block content-skills">
            <div className="block-content-info">
                <h2 className="content-text-title title-skills">Technical skills</h2>
                <div className="skills-blocks">
                    <div className="row">
                        {isLoading ? <Loader/> :
                            skillsArr && skillsArr.map((item, index) => {
                                return (
                                    <div key={index} className="skills-block-col col s4">
                                        <div className="main-keywords-blocks">
                                            <div  className="keywords-block">
                                                <h2 className="keywords-title">
                                                    {item.keyword}
                                                </h2>
                                                {item.points.map((elem, idx) => {
                                                    return (
                                                        <div key={idx} className="keywords-content">
                                                            <img className="keyword-icon" src={elem.icon} alt="point icon"/>
                                                            <span>{elem.point}</span>
                                                        </div>
                                                    )
                                                })}
                                            </div>
                                        </div>
                                    </div>
                                )
                            })}
                    </div>
                </div>
                <ButtonShowSkills skillsArr={skillsArr}/>
            </div>
        </div>
    );
};

export default Skills;

