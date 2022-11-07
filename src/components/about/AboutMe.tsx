import React from 'react';
import s from "./AboutMe.module.css"
import photoMe from "../../common/img/logo_Im.jpg"
import {Fade} from "react-awesome-reveal";
import {Title} from "../../common/title/Title";

export const AboutMe = () => {
    return (
        <div className={s.about}>
            <Title title={'ABOUT ME'}/>

            <Fade direction={'left'} duration={1500}>
                <div className={s.aboutMeBlock}>
                    <div className={s.photoBlock}>
                        <img src={photoMe} alt={"I"}/>
                    </div>

                    <div className={s.text}>
                        <p>Hello there! My name is <strong>Slava Ostapkevich.</strong> I am a person who has a strong
                            passion
                            for programming that inspires me everyday.
                        </p>
                        <p>I have experience in creating SPA with React/
                            Redux/TypeScript in team. Now I improve my
                            skills in this direction and expanding them
                            with new technologies.
                        </p>
                        <p> I spend my leisure time
                            on Codewars or by improving english skills.
                            Ready to implement excellent projects
                            with wonderful people.
                            Open to your suggestions.
                        </p>
                    </div>
                </div>
            </Fade>
        </div>
    );
};

