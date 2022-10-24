import React from 'react';
import styleContainer from "../../common/styles/CommonStyles.module.css";
import s from "./Footer.module.css"
import {LinkLogo} from "./linkLogo/LinkLogo";
// ===== logo ==== //
import logo_vk from "../../common/img/icons/footer_logo/vk-svgrepo-com (1).svg"
import logo_instagram from "../../common/img/icons/footer_logo/instagram-alt-svgrepo-com.svg"
import logo_facebook from "../../common/img/icons/footer_logo/facebook-svgrepo-com.svg"
import logo_linkidin from "../../common/img/icons/footer_logo/linkedin-svgrepo-com (1).svg"
import logo_github from "../../common/img/icons/footer_logo/github-svgrepo-com (1).svg"


export const Footer = () => {
    return (
           <div className={s.footerBlock}>
            <div className={styleContainer.container}>
                <div className={s.footerWrapper}>
                    <div className={s.text}>© 2022 All rights reserved</div>
                    <div className={s.logos}>
                        <LinkLogo href={"https://vk.com/slavaost"} img={logo_vk}/>
                        <LinkLogo href={"https://www.instagram.com/slavkent_ost/"} img={logo_instagram}/>
                        <LinkLogo href={"https://www.facebook.com/profile.php?id=100041663271241"} img={logo_facebook}/>
                        <LinkLogo href={"https://www.linkedin.com/in/vyacheslav-ostapkevich-918112254/"} img={logo_linkidin}/>
                        <LinkLogo href={"https://github.com/SlavaOST-it"} img={logo_github}/>
                    </div>
                </div>
            </div>
        </div>)
};

