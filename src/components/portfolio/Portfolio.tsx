import React from "react";
import {Fade} from "react-awesome-reveal";

import s from "./Portfolio.module.css"

import socialImage from "../../common/img/shutterstock_403991497-2-768x432-1.jpg"
import todoImage from "../../common/img/05.to-do-list.jpg"
import educationBG from "../../common/img/educationBG.jpg"

import {ProjectItem} from "./proects/ProjectItem";
import {Title} from "../../common/title/Title";


export const Portfolio = () => {
    const socialNet = {
        backgroundImage: `url(${socialImage})`
    }
    const todo = {
        backgroundImage: `url(${todoImage})`
    }
    const educationCards = {
        backgroundImage: `url(${educationBG})`
    }

    return (

        <div className={s.portfolioBlock}>
            <Title title={'PORTFOLIO'}/>

            <Fade direction={'left'} duration={1500}>
                <div className={s.projects}>
                    <ProjectItem
                        style={socialNet}
                        url={"https://github.com/SlavaOST-it/social-network-ver-2"}
                        title={"Social Network"}
                        description={"Social network app with using react hooks, routing,\n" +
                            "lazy loading, working with REST api, login/logout flow,\n" +
                            "pagination, form and validation/file uploading using\n" +
                            "unit-tests for code workability check"}
                    />

                    <ProjectItem style={educationCards}
                                 url={"https://github.com/SlavaOST-it/education-cards"}
                                 title={"Education cards"}
                                 description={"The application implements the possibility of registration, login.\n" +
                                     "Profile editing. Creation of decks with educational cards.\n" +
                                     "Create question cards. Their editing."}
                    />

                    <ProjectItem style={todo}
                                 url={"https://github.com/SlavaOST-it/ToDoList"}
                                 title={"To Do List"}
                                 description={"Todolist app created with react hooks, routing and\n" +
                                     "redirects, material UI, REST api request/response flow,\n" +
                                     "unit-tests and etc."}
                    />
                </div>
            </Fade>
        </div>
    )
}