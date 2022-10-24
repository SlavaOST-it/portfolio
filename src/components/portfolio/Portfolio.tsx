import React from "react";
import s from "./Portfolio.module.css"
import commonStyle from "../../common/styles/CommonStyles.module.css";
import {ProjectItem} from "./proects/ProjectItem";
import socialImage from "../../common/img/shutterstock_403991497-2-768x432-1.jpg"
import todoImage from "../../common/img/05.to-do-list.jpg"


export const Portfolio = () => {
    const socialNet = {
        backgroundImage: `url(${socialImage})`
    }
    const todo = {
        backgroundImage: `url(${todoImage})`
    }

    return (
        <div className={s.portfolioBlock}>
            <div className={commonStyle.title_block}>
                <h2>PORTFOLIO</h2>
                <span className={commonStyle.hr}></span>
            </div>

            <div className={s.projects}>

                <ProjectItem
                    style={socialNet}
                    url={"https://github.com/SlavaOST-it/samurai-way-main"}
                    title={"Social Network"}
                    description={"Social network app with using react hooks, routing,\n" +
                        "lazy loading, working with REST api, login/logout flow,\n" +
                        "pagination, form and validation/file uploading using\n" +
                        "unit-tests for code workability check"}
                />
                <ProjectItem style={todo}
                             url={"https://github.com/SlavaOST-it/ToDoList"}
                             title={"To Do List"}
                             description={"Todolist app created with react hooks, routing and\n" +
                                 "redirects, material UI, REST api request/response flow,\n" +
                                 "unit-tests and etc."}
                />
            </div>

        </div>
    )
}