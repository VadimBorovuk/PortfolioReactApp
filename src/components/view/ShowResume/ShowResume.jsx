import React from 'react';
import M from "materialize-css";

import './style.scss';

class ShowResume extends React.Component {
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
        return (
            <div className="modal-showResume">
                <a className="downResume modal-trigger" data-target="modal-resume">
                    <i className="far fa-file"></i>
                    Show resume
                </a>
                <div ref={Modal => {
                    this.Modal = Modal
                }}
                     id="modal-resume"
                     className="modal modal-send-view">
                    <div className="modal-header">
                        <a className="modal-close effect btn-flat">
                            &times;
                        </a>
                    </div>
                    <div className="modal-content">
                        <h1 className="btn-resume-title">Choose your version</h1>
                        <div className="block-btn">
                            <a className="btn-resume modal-close"
                               href="https://drive.google.com/file/d/1NY2qGhxfPNHI5GuRekd0dXL3ZIv6TAuD/view?usp=sharing"
                                target="_blank"
                            >rus</a>
                            <a className="btn-resume modal-close"
                               href="https://drive.google.com/file/d/11BiCf_ruK2KrZIlqh6u4tOx8RSxOT1Hj/view?usp=sharing"
                                target="_blank"
                            >eng</a>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default ShowResume;
