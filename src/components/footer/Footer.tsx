import React from 'react';
import {NavLink} from "react-router-dom";
import styleContainer from "../../common/styles/CommonStyles.module.css";
import s from "./Footer.module.css"
import {LinkLogo} from "./linkLogo/LinkLogo";
// ===== logo ==== //
import logo_vk from "../../common/img/icons/footer_logo/vk-svgrepo-com (1).svg"
import logo_instagram from "../../common/img/icons/footer_logo/instagram-alt-svgrepo-com.svg"
import logo_facebook from "../../common/img/icons/footer_logo/facebook-svgrepo-com.svg"
import logo_linkidin from "../../common/img/icons/footer_logo/linkedin-svgrepo-com (1).svg"
import logo_github from "../../common/img/icons/footer_logo/github-svgrepo-com (1).svg"

import home_logo from "../../common/img/icons/nav_logo/home-svgrepo-com.svg"
import about_logo from "../../common/img/icons/nav_logo/man-user-svgrepo-com.svg"
import skills_logo from "../../common/img/icons/nav_logo/skills-svgrepo-com.svg"
import portfolio_logo from "../../common/img/icons/nav_logo/portfolio-suitcase-svgrepo-com.svg"
import contact_logo from "../../common/img/icons/nav_logo/email-message-svgrepo-com.svg"


export const Footer = () => {
    return (
        <div className={s.footerBlock}>
            <div className={styleContainer.container}>
                <div className={s.footerWrapperMax}>
                    <div className={s.text}>© 2022 Vyacheslav Ostapkevich</div>
                    <div className={s.logos}>
                        <LinkLogo href={"https://vk.com/slavaost"} img={logo_vk}/>
                        <LinkLogo href={"https://www.instagram.com/slavkent_ost/"} img={logo_instagram}/>
                        <LinkLogo href={"https://www.facebook.com/profile.php?id=100041663271241"} img={logo_facebook}/>
                        <LinkLogo href={"https://www.linkedin.com/in/vyacheslav-ostapkevich-918112254/"}
                                  img={logo_linkidin}/>
                        <LinkLogo href={"https://github.com/SlavaOST-it"} img={logo_github}/>
                    </div>
                </div>
                <div className={s.footerWrapperMin}>
                    <NavLink to={'/home'}
                             className={({isActive}) => isActive ? s.buttonActive : s.button}>
                        <img src={home_logo} alt={'home'}/>
                    </NavLink>
                    <NavLink to={'/about_me'}
                             className={({isActive}) => isActive ? s.buttonActive : s.button}>
                        <img src={about_logo} alt={'home'}/>
                    </NavLink>
                    <NavLink to={'/skills'}
                             className={({isActive}) => isActive ? s.buttonActive : s.button}>
                        <img src={skills_logo} alt={'home'}/>
                    </NavLink>
                    <NavLink to={'/portfolio'}
                             className={({isActive}) => isActive ? s.buttonActive : s.button}>
                        <img src={portfolio_logo} alt={'home'}/>
                    </NavLink>
                    <NavLink to={'/contacts'}
                             className={({isActive}) => isActive ? s.buttonActive : s.button}>
                        <img src={contact_logo} alt={'home'}/>
                    </NavLink>
                </div>
            </div>
        </div>)
};

