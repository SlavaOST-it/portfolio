import React from 'react';
import s from "./AboutMe.module.css"
import commonStyle from "../../common/styles/CommonStyles.module.css";

export const AboutMe = () => {
    return (
        <div className={s.about}>
            <div className={commonStyle.container}>
                <div className={commonStyle.title_block}>
                    <h2>ABOUT ME</h2>
                    <span className={commonStyle.hr}></span>
                </div>

                <div className={s.text}>
                    <p>Hi, I'm Slava – and I am novice front-end developer who is building a new career from the thing I
                        really enjoy.<br/>
                        I'm interested in design and everything connected with it.
                    </p>
                    <p>I'm studying at courses "Web and mobile design<br/>
                        interfaces" in IT-Academy.
                    </p>
                    <p>Ready to implement excellent projects<br/>
                        with wonderful people.
                    </p>
                </div>

                <div className={commonStyle.title_block}>
                    <h2>INTERESTS</h2>
                    <span className={commonStyle.hr}></span>
                </div>

                <div className={s.list}>
                    <ul>
                        <li>Painting & Drawing</li>
                        <li>Reading & Writing</li>
                        <li>Music & Cinema</li>
                        <li>Travel & Picnik</li>
                        <li>Rain & Snow</li>
                    </ul>
                </div>
            </div>
        </div>
        // </div>
    );
};

