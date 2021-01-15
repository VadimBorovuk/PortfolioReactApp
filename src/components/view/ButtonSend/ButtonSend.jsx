import React from 'react';
import M from "materialize-css";

import FormSend from "./FormSend";

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
        return (
            <div className="modal-sendMe">
                <a className="btn modal-trigger" data-target="modal-send">
                    send me
                </a>

                <div ref={Modal => {
                    this.Modal = Modal
                }}
                     id="modal-send"
                     className="modal modal-send-view">
                    <div className="modal-header">
                        <a className="modal-close waves-effect btn-flat">
                            &times;
                        </a>
                    </div>
                    <div className="modal-content">
                        <FormSend/>
                    </div>
                </div>
            </div>
        )
    }
}

export default ButtonSend;
