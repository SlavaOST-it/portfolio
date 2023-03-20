import React, {useState} from 'react';
import emailjs from 'emailjs-com';
import * as Yup from 'yup';
import s from "./Contacts.module.css";
import {ContactItem} from "./contactItem/ContactItem";

// ===== logo ===== //
import logo_location from "../../common/img/icons/contacts_logo/location-svgrepo-com (1).svg"
import logo_message from "../../common/img/icons/contacts_logo/message-svgrepo-com.svg"
import logo_phone from "../../common/img/icons/contacts_logo/phone-svgrepo-com (1).svg"
import {LinkLogo} from "../footer/linkLogo/LinkLogo";
import {itemLogo} from "../footer/Footer";
import {Fade} from "react-awesome-reveal";
import {Title} from "../../common/title/Title";
import {useFormik} from "formik";
import {InfoModal} from "../../common/modals/InfoModal";


export const Contacts = () => {
    const [openModal, setOpenModal] = useState(false)

    const formik = useFormik({
        initialValues: {
            from_name: '',
            reply_to: '',
            message: ''
        },
        validationSchema: Yup.object({
            from_name: Yup.string().required('* Name field is required'),
            reply_to: Yup.string().email('Invalid email address')
                .required('* Email field is required'),
            message: Yup.string().required('* Message field is required')

        }),
        onSubmit: (values) => {
            emailjs.send(process.env.REACT_APP_FORMIK_SERVICE_ID!, process.env.REACT_APP_FORMIK_TEMPLATE_ID!, values, process.env.REACT_APP_FORMIK_USER_ID)
                .then((result: any) => {
                    console.log(result.text);
                }, (error: any) => {
                    console.log(error.text);
                });
            formik.resetForm()
            setOpenModal(true)
            setTimeout(() => setOpenModal(false), 5000)
        }
    })

    return (

        <div className={s.contacts}>
            <Title title={'GET IN TOUCH'}/>

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
                                <a
                                    href={require('../../common/download/Ostapkevich_Vyacheslav_CV.pdf')}
                                    download={'Ostapkevich_Vyacheslav_CV.pdf'}
                                    className={s.form_block_btn}
                                >
                                    Download CV
                                </a>
                            </div>
                        </div>

                        <div className={s.form_block}>
                            <form onSubmit={formik.handleSubmit}>
                                <div>
                                    <input
                                        type={"text"}
                                        id={"from_name"}
                                        placeholder={"Name"}
                                        {...formik.getFieldProps('from_name')}
                                    />
                                    {formik.touched.from_name && formik.errors.from_name &&
                                        <div>{formik.errors.from_name}</div>}

                                    <input
                                        type={"text"}
                                        id={"reply_to"}
                                        placeholder={"E-mail"}
                                        {...formik.getFieldProps('reply_to')}
                                    />
                                    {formik.touched.reply_to && formik.errors.reply_to &&
                                        <div>{formik.errors.reply_to}</div>}
                                </div>
                                <div>
                                    <textarea id={"message"}
                                              name={"message"}
                                              placeholder={"Your message"}
                                              autoComplete="off"
                                              onChange={formik.handleChange}
                                              value={formik.values.message}
                                    />
                                    {formik.touched.message && formik.errors.message &&
                                        <div>{formik.errors.message}</div>}
                                </div>
                                <button
                                    type={"submit"}
                                    value="Send"
                                    className={s.form_block_btn}
                                    disabled={formik.isSubmitting}
                                >
                                    Send Message
                                </button>
                            </form>

                            <InfoModal active={openModal}/>
                        </div>
                    </div>
                </div>
            </Fade>
        </div>

    );
};

