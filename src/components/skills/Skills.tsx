import React from "react";
import s from "./Skills.module.css"
import {SkillBlock} from "./skill/SkillBlock";//===== icons ======//
import htmlIcon from "../../common/img/icons/code.svg"
import reactIcons from "../../common/img/icons/react.svg"
import jsIcons from "../../common/img/icons/java-script.svg"
import typeScriptIcon from "../../common/img/icons/typescript.svg"
import reduxIcon from "../../common/img/icons/redux.svg"
import restApiIcon from "../../common/img/icons/server-svgrepo-com (1).svg"
import gitIcon from "../../common/img/icons/git-svgrepo-com (1).svg"
import materialUIIcon from "../../common/img/icons/material-ui-svgrepo-com.svg"
import postmanIcon from "../../common/img/icons/postman-svgrepo-com.svg"
import testIcon from "../../common/img/icons/test-tube-svgrepo-com.svg"
import {Fade} from "react-awesome-reveal";
import {Title} from "../../common/title/Title";


export const Skills = () => {
    const item = [
        {img: reactIcons, title: "REACT"},
        {img: jsIcons, title: "JAVASCRIPT"},
        {img: typeScriptIcon, title: "TYPESCRIPT"},
        {img: reduxIcon, title: "REDUX"},
        {img: htmlIcon, title: "HTML/CSS"},
        {img: restApiIcon, title: "REST API"},
        {img: gitIcon, title: "GIT"},
        {img: materialUIIcon, title: "Material UI"},
        {img: postmanIcon, title: "Postman"},
        {img: testIcon, title: "Unit tests"},

    ]
    return (
        <div className={s.skillsBlock}>
            <Title title={'SKILLS'}/>

            <Fade direction={'left'} duration={1500}>
                <div className={s.skills}>
                    {item.map(el =>
                        <SkillBlock
                            img={el.img}
                            title={el.title}
                        />
                    )}
                </div>
            </Fade>
        </div>
    )
}