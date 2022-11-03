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
import {itemLogo} from "../footer/Footer";
import {Fade} from "react-awesome-reveal";


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
            <Fade direction={'left'} duration={1500}>
                <div className={s.contactsContainer}>
                    <div className={s.contacts_block}>
                        <ContactItem img={logo_location} direction={"Minsk, Belarus"}/>
                        <ContactItem img={logo_message} href={"mailto: slavaost-it@mail.ru"}
                                     direction={"slavaost-it@mail.ru"}/>
                        <ContactItem img={logo_phone} href={"tel: +375296671053"} direction={"+375 (29) 667-10-53"}/>
                    </div>

                    <div className={s.logos}>
                        {itemLogo.map(el =>
                            <LinkLogo href={el.href} img={el.img}/>
                        )}
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
                                    <input
                                        type={"text"}
                                        placeholder={"Name"}
                                        name={"name"}
                                    />
                                    <input
                                        type={"text"}
                                        placeholder={"E-mail"}
                                        name={"email"}
                                    />
                                </div>
                                <div>
                                    <textarea placeholder={"Your message"} name={"message"}></textarea>
                                </div>
                                <button
                                    type={"submit"}
                                    value="Send"
                                    className={s.form_block_btn}
                                >
                                    Send Message
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </Fade>
        </div>

    );
};

