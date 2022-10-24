import React from 'react';
import {Navigate, Route, Routes} from "react-router-dom";
import {Presentation} from "../presentation/Presentation";
import {AboutMe} from "../about/AboutMe";
import {Skills} from "../skills/Skills";
import {Portfolio} from "../portfolio/Portfolio";
import s from "./Main.module.css";
import commonStyle from "../../common/styles/CommonStyles.module.css";
import {Contacts} from "../contacts/Contacts";


export const Main = () => {
     return (
        <div className={s.mainBlock}>
            <div className={commonStyle.container}>
                <Routes>
                    <Route path={'/'} element={<Navigate to={'/home'}/>}/>
                    <Route path={'/home'} element={<Presentation/>}/>
                    <Route path={'/about_me'} element={<AboutMe/>}/>
                    <Route path={'/skills'} element={<Skills/>}/>
                    <Route path={'/portfolio'} element={<Portfolio/>}/>
                    <Route path={'/contacts'} element={<Contacts/>}/>
                    <Route path={'*'} element={<Navigate to={'/home'}/>}/>
                </Routes>
            </div>
        </div>
    );
};

