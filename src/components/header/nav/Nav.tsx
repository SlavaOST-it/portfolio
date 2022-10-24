import React from 'react';
import {NavLink} from "react-router-dom";
import s from "../nav/Nav.module.css";


export const Nav = () => {
    return (
        <div>
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
        </div>
    );
};

