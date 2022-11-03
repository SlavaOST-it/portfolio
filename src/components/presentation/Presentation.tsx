import React from "react";
import s from "./Presentation.module.css"
import photo from "../../common/img/me.jpg"
import {useTypewriter, Cursor} from "react-simple-typewriter";
import {Fade} from "react-awesome-reveal";


export const Presentation = () => {
    const [text] = useTypewriter({
        words: ['Front-end Developer'],
        typeSpeed: 150,
        loop: true,
    })

    return (
        <Fade direction={'left'} duration={1500}>
            <div className={s.presentationBlock}>
                <div className={s.photoBlock}>
                    <img src={photo} alt={"photo_me"}/>
                </div>

                <div className={s.block_text}>
                    <div className={s.fullName}>
                        <span>VYACHESLAV</span> <br/>
                        <span>OSTAPKEVICH</span>
                    </div>
                    <p className={s.hr}/>

                    <div className={s.text}>
                        <span>{text}</span>
                        <Cursor/>
                    </div>
                </div>
            </div>
        </Fade>
    )
}