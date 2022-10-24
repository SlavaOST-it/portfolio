import React from "react";
import s from "./SkillBlock.module.css"


export type SkillBlockType={
    title: string,
    img: string
}

export const SkillBlock = (props: SkillBlockType) => {
    return (
        <div className={s.skillBlock}>
            <div>
                <img src={props.img} className={s.icon} alt={'skill icon'}></img>
            </div>
            <div>
                <h3>{props.title}</h3>
            </div>

        </div>

    )
}