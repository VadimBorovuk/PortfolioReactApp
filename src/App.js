import React, {useEffect} from 'react';
import {BrowserRouter as Router, Redirect, Route} from "react-router-dom";

import Navbar from "./components/layout/Navbar/Navbar";
import Main from "./components/layout/Main/Main";
import GalleryProjects from "./components/layout/GalleryProjects/GalleryProjects";
import Skills from "./components/layout/Skills/Skills";

import {useDispatch, useSelector} from "react-redux";

import {requestData} from "./redux/actions/data";


import './style.scss';
import Switch from "@material-ui/core/Switch";

const App = () => {
    const urlData = "/data.json";

    const {dataArr, isLoading} = useSelector(state => ({
        dataArr: state.data.data,
        isLoading: state.data.isLoading,

    }));

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(requestData(urlData));
    }, []);


    return (
        <Router>
            <div className="body-content">
                <Navbar/>
                <section className="main-content">
                    {dataArr && dataArr.map((arr, index) => {
                        return (
                            <div className="slider-boxes" key={index}>
                                <Route exact path="/"><Main timelineArr={arr.timelineData}/></Route>
                                <Route path="/my-projects">
                                    <GalleryProjects
                                        projectsArr={arr.projectsData}
                                        isLoadingProjects={isLoading}/></Route>
                                <Route path="/skills">
                                    <Skills
                                        skillsArr={arr.skillsData}
                                        isLoadingSkills={isLoading}
                                    /></Route>
                            </div>
                        )
                    })}
                </section>
            </div>
        </Router>
    );
};

export default App;
