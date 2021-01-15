import React, {Component} from "react";
import M from "materialize-css";
import "materialize-css/dist/css/materialize.min.css";

import StartsRating from "../../layout/GalleryProjects/StartsRating";

import './style.scss';

class Modal extends Component {

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
        const {id, stars, title, description, preview, link} = this.props;
        return (
            <div className="card col-4">
                <a className="btn modal-trigger" data-target={`modal-view-${id}`}>
                    <img src={preview} alt="preview"/>
                    <p className="title-block">{title}</p>
                </a>
                <div className="rating-starts">
                    <StartsRating stars={stars}/>
                </div>

                <div ref={Modal => {
                    this.Modal = Modal
                }}
                     id={`modal-view-${id}`}
                     className="modal modal-view-gallery">
                    <div className="modal-header">
                        <a className="modal-close waves-effect">
                            &times;
                        </a>
                    </div>
                    <div className="modal-content">
                        <h4>{description.titleDesc}</h4>
                        <p>{description.textDesc}</p>
                        <span>{description.skillsDesc}</span>
                    </div>
                    <div className="modal-footer">
                        <a className="modal-footer-link" target="_blank" href={link.code}>show code</a>
                        <a className="modal-footer-link" target="_blank" href={link.demo}>Show demo</a>
                    </div>
                </div>
            </div>
        );
    }
}

export default Modal;
