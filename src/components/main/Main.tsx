import React from 'react';
import {Navigate, Route, Routes} from "react-router-dom";
import {Presentation} from "../presentation/Presentation";
import {AboutMe} from "../about/AboutMe";
import {Skills} from "../skills/Skills";
import {Portfolio} from "../portfolio/Portfolio";
import s from "./Main.module.css";
import commonStyle from "../../common/styles/CommonStyles.module.css";
import {Contacts} from "../contacts/Contacts";
import {PATH} from "../../routes/routes";


export const Main = () => {
    return (
        <div className={s.mainBlock}>
            <div className={commonStyle.container}>
                <Routes>
                    <Route path={'/'} element={<Navigate to={PATH.home}/>}/>
                    <Route path={PATH.home} element={<Presentation/>}/>
                    <Route path={PATH.aboutMe} element={<AboutMe/>}/>
                    <Route path={PATH.skills} element={<Skills/>}/>
                    <Route path={PATH.portfolio} element={<Portfolio/>}/>
                    <Route path={PATH.contacts} element={<Contacts/>}/>
                    <Route path={'*'} element={<Navigate to={PATH.home}/>}/>
                </Routes>
            </div>
        </div>
    );
};

