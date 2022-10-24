import React from 'react';
import s from "./AboutMe.module.css"
import commonStyle from "../../common/styles/CommonStyles.module.css";
import photoMe from "../../common/img/logo_Im.jpg"

export const AboutMe = () => {
    return (
        <div className={s.about}>

            <div className={commonStyle.title_block}>
                <h2>ABOUT ME</h2>
                <span className={commonStyle.hr}></span>
            </div>

            <div className={s.aboutMeBlock}>
                <div className={s.photoBlock}>
                    <img src={photoMe} alt={"I"}/>
                </div>

                <div className={s.text}>
                    <p>Hello there! My name is <strong>Slava Ostapkevich.</strong> I am a person who has a strong passion
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

            {/*<div className={commonStyle.title_block}>*/}
            {/*    <h2>INTERESTS</h2>*/}
            {/*    <span className={commonStyle.hr}></span>*/}
            {/*</div>*/}

            {/*<div className={s.list}>*/}
            {/*    <ul>*/}
            {/*        <li>Painting & Drawing</li>*/}
            {/*        <li>Reading & Writing</li>*/}
            {/*        <li>Music & Cinema</li>*/}
            {/*        <li>Travel & Picnik</li>*/}
            {/*        <li>Rain & Snow</li>*/}
            {/*    </ul>*/}
            {/*</div>*/}
        </div>
    );
};

