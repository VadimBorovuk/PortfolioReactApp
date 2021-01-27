import React, {useState} from 'react';
import {useTranslation} from "react-i18next";

import './style.scss';

const ShowResume = () => {
    const [openModal, setOpenModal] = useState(false)

    const changeStatusModal = () => {
        setOpenModal(!openModal)
    }
    const {t} = useTranslation();

    return (
        <div className="modal-showResume">
            <button className="btn btn-showCv" onClick={()=>changeStatusModal()}>
                <i className="far fa-file"></i>
                <p>{t("showResume")}</p>
            </button>
            <div
                 id="modal-resume"
                 className={`modal-show-view show-view-${openModal}`}>
                <div className="modal-header">
                    <button className="close-btn" onClick={()=>setOpenModal(false)}>
                        &times;
                    </button>
                </div>
                <div className="modal-content">
                    <h1 className="btn-resume-title">{t('showCvTitle')}</h1>
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

export default ShowResume;
