import React from 'react';
import M from "materialize-css";
import Graffic from "../../layout/Graffic/Graffic";

import './style.scss';

class ButtonSend extends React.Component {
    componentDidMount() {
        const options = {
            inDuration: 250,
            outDuration: 250,
            opacity: 0.5,
            dismissible: false,
            startingTop: "4%",
            endingTop: "10%"
        };
        M.Modal.init(this.Modal, options);

    }

    render() {
        const {skillsArr} = this.props
        return (
            <div className="modal-graffic-skills">
                <a className="btn modal-trigger" data-target="modal-skills">
                    Show my rating
                </a>

                <div ref={Modal => {
                    this.Modal = Modal
                }}
                     id="modal-skills"
                     className="modal modal-skills-view">
                    <div className="modal-header">
                        <a className="modal-close waves-effect btn-flat">
                            &times;
                        </a>
                    </div>
                    <div className="modal-content">
                        <Graffic skillsArr={skillsArr}/>
                    </div>
                </div>
            </div>
        )
    }

}

export default ButtonSend;
