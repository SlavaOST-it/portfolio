import React from 'react';
import s from "./LinkLogo.module.css"


type LinkLogoType = {
    href: string
    img: string
}
export const LinkLogo = (props: LinkLogoType) => {
    return (
        <div>
            <a href={props.href}  target="_blank" rel="noreferrer">
                <img className={s.logo} src={props.img} alt={"link logo"}/>
            </a>
        </div>
    );
};
