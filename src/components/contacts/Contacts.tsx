import React from 'react';
import emailjs from 'emailjs-com';
import s from "./Contacts.module.css";
import commonStyle from "../../common/styles/CommonStyles.module.css";
import {ContactItem} from "./contactItem/ContactItem";


// ===== logo ===== //
import logo_location from "../../common/img/icons/contacts_logo/location-svgrepo-com (1).svg"
import logo_message from "../../common/img/icons/contacts_logo/message-svgrepo-com.svg"
import logo_phone from "../../common/img/icons/contacts_logo/phone-svgrepo-com (1).svg"
import {LinkLogo} from "../footer/linkLogo/LinkLogo";
import logo_vk from "../../common/img/icons/footer_logo/vk-svgrepo-com (1).svg";
import logo_instagram from "../../common/img/icons/footer_logo/instagram-alt-svgrepo-com.svg";
import logo_facebook from "../../common/img/icons/footer_logo/facebook-svgrepo-com.svg";
import logo_linkidin from "../../common/img/icons/footer_logo/linkedin-svgrepo-com (1).svg";
import logo_github from "../../common/img/icons/footer_logo/github-svgrepo-com (1).svg";


export const Contacts = () => {

    const sendEmail = (e: any) => {
        e.preventDefault();

        emailjs.sendForm('service_i4oyh1d', 'template_ipqd8v9', e.target, 'SzE_DmKmDXh6tomhe')
            .then((result: any) => {
                console.log(result.text);
            }, (error: any) => {
                console.log(error.text);
            });
        e.target.reset()
    };

    return (
        <div className={s.contacts}>

            <div className={commonStyle.title_block}>
                <h2>GET IN TOUCH</h2>
                <span className={commonStyle.hr}></span>
            </div>


            <div className={s.contactsContainer}>
                <div className={s.contacts_block}>
                    <ContactItem img={logo_location} direction={"Minsk, Belarus"}/>
                    <ContactItem img={logo_message} href={"mailto: slavaost-it@mail.ru"}
                                 direction={"slavaost-it@mail.ru"}/>
                    <ContactItem img={logo_phone} href={"tel: +375296671053"} direction={"+375 (29) 667-10-53"}/>
                </div>


                <div className={s.logos}>
                    <LinkLogo href={"https://vk.com/slavaost"} img={logo_vk}/>
                    <LinkLogo href={"https://www.instagram.com/slavkent_ost/"} img={logo_instagram}/>
                    <LinkLogo href={"https://www.facebook.com/profile.php?id=100041663271241"} img={logo_facebook}/>
                    <LinkLogo href={"https://www.linkedin.com/in/vyacheslav-ostapkevich-918112254/"}
                              img={logo_linkidin}/>
                    <LinkLogo href={"https://github.com/SlavaOST-it"} img={logo_github}/>
                </div>


                <div className={s.formContainer}>
                    <div className={s.text_block}>
                        <div>
                            <span className={s.span1}>Open to your suggestions </span> <br/>
                            <span className={s.span2}>Ready to work remotely</span> <br/>
                            <span className={s.span3}>I will answer your questions</span>
                        </div>
                        <div>
                            <button className={s.form_block_btn}>
                                {/*<a*/}
                                {/*    href={"cvPDF"}*/}
                                {/*    target="_blank"*/}
                                {/*    rel="noreferrer"*/}
                                {/*    download={"cvPDF"}/>*/}
                                Download CV
                            </button>
                        </div>
                    </div>

                    <div className={s.form_block}>
                        <form onSubmit={sendEmail}>
                            <div>
                                <input type={"text"} placeholder={"Name"} name={"name"}/>
                                <input type={"text"} placeholder={"E-mail"} name={"email"}/>
                            </div>
                            <div>
                                <textarea placeholder={"Your message"} name={"message"}></textarea>
                            </div>
                            <button type={"submit"} value="Send" className={s.form_block_btn}>
                                Send Message
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

