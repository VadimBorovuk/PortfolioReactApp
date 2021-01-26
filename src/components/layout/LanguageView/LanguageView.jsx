import React from 'react';
import {Trans, useTranslation} from "react-i18next";

const LanguageView = () => {
    const {t, i18n} = useTranslation();

    const changeLanguage = (language) =>{
        i18n.changeLanguage(language)
    }

    return (
        <div>
            <button onClick={()=>changeLanguage('ru')}>Ru</button>
            <button onClick={()=>changeLanguage('en')}>En</button>
            <hr/>
            <Trans i18nKey="title">
                Hello world
            </Trans>
            <div>{t("testData")}</div>
        </div>
    );
};

export default LanguageView;
