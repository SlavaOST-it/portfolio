import React from "react";
import s from "./Presentation.module.css"
import photo from "../../common/img/me.jpg"


export const Presentation = () => {
    return (
        <div className={s.presentationBlock}>
            <div className={s.photoBlock}>
                <img src={photo} alt={"photo_me"}/>
            </div>
            <div className={s.block_text}>
                <div className={s.fullName}>
                    <div>VYACHESLAV</div>
                    <div className={s.lastName}>OSTAPKEVICH</div>
                </div>
                <p className={s.hr}/>
                <div className={s.text}>Front-end Developer</div>
            </div>
        </div>
    )
}