import React, {useState} from 'react';

import {NavLink} from "react-router-dom";
import {Animated} from "react-animated-css";

import ButtonSend from "../../view/ButtonSend/ButtonSend";
import ShowResume from "../../view/ShowResume/ShowResume";
import avatar from "../../../assets/images/image.png";
import {useTranslation} from "react-i18next";

import logoUa from '../../../assets/icons/ukraine.svg';
import logoRu from '../../../assets/icons/russia.svg';
import logoEn from '../../../assets/icons/united-states.svg';

import './style.scss';

const Navbar = () => {
    const [activeLink , setActiveLink] = useState(false)
    const {t, i18n} = useTranslation();

    const changeLanguage = (language) => {
        i18n.changeLanguage(language)
    }

    return (
        <div className="navbar-view">
            <Animated animationIn="fadeInDownBig" animationOut="pulse" isVisible={true}>
                <div className="text-center">
                    <div className="author-logo">
                        <img src={avatar} alt="avatar-image"/>
                    </div>
                    <div className="author-fullInfo">
                        <p className="author-fullName">{t("fullName")}</p>
                        <a href="mailto:borowik.vadim@gmail.com" className="author-email">borowik.vadim@gmail.com</a>
                    </div>
                </div>
            </Animated>
            <Animated animationIn="fadeInDownBig" animationOut="pulse" isVisible={true}>
                <div className="boxes-language">
                    <img
                        onClick={() => changeLanguage('en')}
                        className="boxes-lan-item"
                        src={logoEn} alt="logoEn"/>
                    <img
                        onClick={() => changeLanguage('uk')}
                        className="boxes-lan-item"
                        src={logoUa} alt="logoUa"/>
                    <img
                        onClick={() => changeLanguage('ru')}
                        className="boxes-lan-item"
                        src={logoRu} alt="logoRu"/>
                </div>
            </Animated>
            <Animated animationIn="fadeInDownBig" animationOut="pulse" isVisible={true}>
                <nav className="nav-links stroke">
                    <ul>
                        <li>
                            <NavLink exact to="/" className="nav-link" activeClassName="active-link">
                                <i className="fas fa-home"></i>
                                <span>{t("linkMain")}</span>
                            </NavLink>
                        </li>
                        <li>

                            <NavLink to="/my-projects" className="nav-link" activeClassName="active-link">
                                <i className="fas fa-archive"></i>
                                <span>{t("linkProject")}</span>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/skills" className="nav-link" activeClassName="active-link">
                                <i className="fas fa-atom"></i>
                                <span>{t("linkSkills")}</span>
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
