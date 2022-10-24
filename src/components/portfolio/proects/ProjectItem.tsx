import React from "react";
import s from "./ProjectItem.module.css"
import playImage from "../../../common/img/icons/play-svgrepo-com.svg"


export type ProjectItemType = {
    style: any,
    url: string,
    title: string,
    description: string

}

export const ProjectItem = (props: ProjectItemType) => {
    return (
        <div className={s.projectItem}>
            <div style={props.style} className={s.image}>
                <a target={"_blank"} href={props.url} className={s.viewBtn} rel="noreferrer">
                    <img src={playImage} alt={"watch"}/>
                </a>
            </div>
            <div className={s.projectInfo}>
                <h3 className={s.projectTitle}>{props.title}</h3>
                <span className={s.description}>{props.description}</span>
            </div>
        </div>

    )
}