import React from 'react';
import styleContainer from "../../common/styles/CommonStyles.module.css";
import s from "./Footer.module.css"

export const Footer = () => {
    return (
        <div className={styleContainer.container}>
            <div className={s.footerBlock}>
                <div className={s.text}>Copyright © 2022</div>
                <div className={s.logo}>logo</div>
            </div>
        </div>
    );
};

