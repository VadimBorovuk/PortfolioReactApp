import React from 'react';

import {NavLink} from "react-router-dom";
import {Animated} from "react-animated-css";

import ButtonSend from "../../view/ButtonSend/ButtonSend";
import ShowResume from "../../view/ShowResume/ShowResume";
import avatar from "../../../assets/images/image.jpg";

import './style.scss';

const Navbar = () => {
    return (
        <div className="navbar-view">
            <Animated animationIn="fadeInDownBig" animationOut="pulse" isVisible={true}>
                <div className="text-center">
                    <div className="author-logo">
                        <img src={avatar} alt="avatar-image"/>
                    </div>
                    <div className="author-fullInfo">
                        <p className="author-fullName">Vadim Borovuk</p>
                        <a href="mailto:borowik.vadim@gmail.com" className="author-email">borowik.vadim@gmail.com</a>
                    </div>
                </div>
            </Animated>

            <Animated animationIn="fadeInDownBig" animationOut="pulse" isVisible={true}>
                <nav className="nav-links stroke">
                    <ul>
                        <li>
                            <NavLink exact to="/" className="nav-link" activeClassName="active-link">
                                <i className="fas fa-home"></i>
                                <span>MAIN</span>
                            </NavLink>
                        </li>
                        <li>

                            <NavLink to="/my-projects" className="nav-link" activeClassName="active-link">
                                <i className="fas fa-archive"></i>
                                <span>My Projects</span>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/skills" className="nav-link" activeClassName="active-link">
                                <i className="fas fa-atom"></i>
                                <span>Skills</span>
                            </NavLink>
                        </li>
                    </ul>
                </nav>
            </Animated>

            <Animated animationIn="fadeInUpBig" animationOut="pulse" isVisible={true}>
                <ul className="author-links">
                    <li className="author-link"><a href="https://t.me/VadimBoro" target="_blank"><i
                        className="fab fa-telegram-plane"></i></a></li>
                    <li className="author-link"><a href="https://github.com/VadimBorovuk" target="_blank"><i
                        className="fab fa-github"></i></a></li>
                    <li className="author-link"><a href="https://www.linkedin.com/in/vadimborovyk" target="_blank"><i
                        className="fab fa-linkedin"></i></a></li>
                </ul>
                <ButtonSend/>
                <ShowResume/>
            </Animated>
        </div>
    );
};

export default Navbar;
