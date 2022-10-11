import React from 'react';
import s from "./ContactItem.module.css"

type ContactItemType = {
    direction: string,
    img: string,
    href?: string
}
export const ContactItem = (props: ContactItemType) => {
    return (
        <div className={s.contact_item}>
            <img src={props.img} alt={"contact logo"}/>
            <a href={props.href}>{props.direction}</a>
            {/*<span className={s.text}>{props.direction}</span>*/}
        </div>
    );
};

