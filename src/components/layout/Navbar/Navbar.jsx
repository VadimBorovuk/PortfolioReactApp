import React from 'react';

import {NavLink} from "react-router-dom";
import {Animated} from "react-animated-css";
import ButtonSend from "../../view/ButtonSend/ButtonSend";

import './style.scss'
import ShowResume from "../../view/ShowResume/ShowResume";

const Navbar = () => {
    return (
        <div className="navbar-view">
            <Animated animationIn="fadeInDownBig" animationOut="pulse" isVisible={true}>
                <div className="text-center">
                    <div className="author-logo">
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
                            <NavLink exact to="/" className="nav-link" activeClassName="active-link">MAIN</NavLink>
                        </li>
                        <li>
                            <NavLink to="/my-projects" className="nav-link" activeClassName="active-link">My Projects</NavLink>
                        </li>
                        <li>
                            <NavLink to="/skills" className="nav-link" activeClassName="active-link">Skills</NavLink>
                        </li>
                    </ul>
                </nav>
            </Animated>

            <Animated animationIn="fadeInUpBig" animationOut="pulse" isVisible={true}>
                <ul className="author-links">
                    <li className="author-link"><a href="https://t.me/VadimBoro" target="_blank"><i className="fab fa-telegram-plane"></i></a></li>
                    <li className="author-link"><a href="https://github.com/VadimBorovuk" target="_blank"><i className="fab fa-github"></i></a></li>
                    <li className="author-link"><a href="https://www.linkedin.com/in/vadimborovyk" target="_blank"><i className="fab fa-linkedin"></i></a></li>
                </ul>
                <ButtonSend/>
                <ShowResume/>
            </Animated>
        </div>
    );
};

export default Navbar;
