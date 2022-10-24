import React from "react";
import s from "./Header.module.css"
import styleContainer from "../../common/styles/CommonStyles.module.css"
import {Nav} from "./nav/Nav";

export const Header = () => {
    return (
        <div className={s.header}>
            <div className={styleContainer.container}>
                <nav className={s.nav}>
                    <Nav/>
                </nav>
            </div>
        </div>
    )
}
