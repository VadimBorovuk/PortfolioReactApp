import React from 'react';
import aboutImage from '../../../assets/images/about-image.jpg'

import './style.scss';

const About = () => {
    return (
        <div className="about-block">
            <h2 className="about-block-title">
                About me
            </h2>
            <div className="about-block-info">
                <div className="row">
                    <div className="block-info">
                        <div className="block-info-image">
                            <img src={aboutImage} alt=""/>
                        </div>
                        <div className="block-info-text">
                            <p className="more-text">I really enjoy learning something new and interesting. I want to be
                                part of a team focused on innovation and challenging challenges. I want to get a
                                position as Front-end developer ReactJS or Vue.js position. Conducting courses in
                                English. Interesting projects and development in the company.
                                I love traveling, reading books, listening to music, which inspires new ideas.
                            </p>
                            <div className="block-links">
                                <a target="_blank" href="https://github.com/VadimBorovuk"
                                   style={{color: '#f83737', border: '2px solid #f83737'}} className="block-link">Git
                                    Hub</a>
                                <a target="_blank" href="https://www.linkedin.com/in/vadimborovyk/"
                                   style={{color: '#5bff5b', border: '2px solid #5bff5b'}}
                                   className="block-link">Linkedin</a>
                                <a target="_blank" href="https://www.facebook.com/profile.php?id=100010091655159"
                                   style={{color: '#5858eb', border: '2px solid #5858eb'}}
                                   className="block-link">Facebook</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
