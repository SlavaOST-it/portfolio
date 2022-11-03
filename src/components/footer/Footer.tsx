import React from 'react';
import styleContainer from "../../common/styles/CommonStyles.module.css";
import s from "./Footer.module.css"
import {LinkLogo} from "./linkLogo/LinkLogo";
// ===== logo ==== //
import logo_vk from "../../common/img/icons/footer_logo/vk-svgrepo-com (1).svg"
import logo_instagram from "../../common/img/icons/footer_logo/instagram-alt-svgrepo-com.svg"
import logo_facebook from "../../common/img/icons/footer_logo/facebook-svgrepo-com.svg"
import logo_linkedin from "../../common/img/icons/footer_logo/linkedin-svgrepo-com (1).svg"
import logo_github from "../../common/img/icons/footer_logo/github-svgrepo-com (1).svg"

import home_logo from "../../common/img/icons/nav_logo/home-svgrepo-com.svg"
import about_logo from "../../common/img/icons/nav_logo/man-user-svgrepo-com.svg"
import skills_logo from "../../common/img/icons/nav_logo/skills-svgrepo-com.svg"
import portfolio_logo from "../../common/img/icons/nav_logo/portfolio-suitcase-svgrepo-com.svg"
import contact_logo from "../../common/img/icons/nav_logo/email-message-svgrepo-com.svg"
import {PATH} from "../../routes/routes";
import {Nav} from "../header/nav/Nav";


export const Footer = () => {
    const itemNav = [
        {link: PATH.home, imgLogo: home_logo},
        {link: PATH.aboutMe, imgLogo: about_logo},
        {link: PATH.skills, imgLogo: skills_logo},
        {link: PATH.portfolio, imgLogo: portfolio_logo},
        {link: PATH.contacts, imgLogo: contact_logo},
    ]
    return (
        <div className={s.footerBlock}>
            <div className={styleContainer.container}>
                <div className={s.footerWrapperMax}>
                    <div className={s.text}>© 2022 Vyacheslav Ostapkevich</div>
                    <div className={s.logos}>
                        {itemLogo.map(el =>
                            <LinkLogo href={el.href} img={el.img}/>
                        )}
                    </div>
                </div>
                <div className={s.footerWrapperMin}>
                    {itemNav.map(el =>
                        <Nav
                            link={el.link}
                            imgLogo={el.imgLogo}
                            className={s.button}
                            activeClassName={s.buttonActive}/>
                    )}
                </div>
            </div>
        </div>)
};

export const itemLogo = [
    {href: "https://vk.com/slavaost", img: logo_vk},
    {href: "https://www.instagram.com/slavkent_ost/", img: logo_instagram},
    {href: "https://www.facebook.com/profile.php?id=100041663271241", img: logo_facebook},
    {href: "https://www.linkedin.com/in/vyacheslav-ostapkevich-918112254/", img: logo_linkedin},
    {href: "https://github.com/SlavaOST-it", img: logo_github},

]