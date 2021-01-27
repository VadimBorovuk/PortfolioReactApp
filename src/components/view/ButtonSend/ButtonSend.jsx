import React, {useEffect, useState} from 'react';

import FormSend from "./FormSend";

import './style.scss';
import {useTranslation} from "react-i18next";

const ButtonSend = () => {
    const [openModal, setOpenModal] = useState(false)

    const changeStatusModal = ()=>{
        setOpenModal(!openModal)
    }
    const {t} = useTranslation();

    return (
        <div className="modal-sendMe">
            <button className="btn" onClick={()=>changeStatusModal()}>
                {t("sendBtn")}
            </button>
            <div
                 id="modal-send"
                 className={`modal-send-view send-view-${openModal}`}>
                <div className="modal-header">
                    <button className="close-btn" onClick={()=>setOpenModal(false)}>
                        &times;
                    </button>
                </div>
                <div className="modal-content">
                    <FormSend/>
                </div>
            </div>
        </div>
    )
}

export default ButtonSend;
