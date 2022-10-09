import React from "react";
import s from "./Header.module.css"
import styleContainer from "../../common/styles/CommonStyles.module.css"
import {NavLink} from "react-router-dom";

export const Header = () => {
    return (
        <div className={s.header}>
            <div className={styleContainer.container}>
                <nav className={s.nav}>
                    <NavLink to={'/home'}
                             className={({isActive}) => isActive ? s.buttonActive : s.button}>
                        Home
                    </NavLink>
                    <NavLink to={'/about_me'}
                             className={({isActive}) => isActive ? s.buttonActive : s.button}>
                        About me
                    </NavLink>
                    <NavLink to={'/skills'}
                             className={({isActive}) => isActive ? s.buttonActive : s.button}>
                        Skills
                    </NavLink>
                    <NavLink to={'/portfolio'}
                             className={({isActive}) => isActive ? s.buttonActive : s.button}>
                        Portfolio
                    </NavLink>
                    <NavLink to={'/contacts'}
                             className={({isActive}) => isActive ? s.buttonActive : s.button}>
                        Contact
                    </NavLink>
                </nav>
            </div>
        </div>


    )
}
