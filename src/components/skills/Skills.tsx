import React from "react";
import s from "./Skills.module.css"
import {SkillBlock} from "./skill/SkillBlock";
import commonStyle from "../../common/styles/CommonStyles.module.css";
//===== icons ======//
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



export const Skills = () => {
    return (
            <div className={s.skillsBlock}>
                <div className={commonStyle.title_block}>
                    <h2>SKILLS</h2>
                    <span className={commonStyle.hr}></span>
                </div>

                <div className={s.skills}>
                    <SkillBlock
                        img={reactIcons}
                        title={"REACT"}
                    />
                    <SkillBlock
                        img={jsIcons}
                        title={"JAVASCRIPT"}
                    />
                    <SkillBlock
                        img={typeScriptIcon}
                        title={"TYPESCRIPT"}
                    />
                    <SkillBlock
                        img={reduxIcon}
                        title={"REDUX"}
                    />
                    <SkillBlock
                        img={htmlIcon}
                        title={"HTML/CSS"}
                       />
                    <SkillBlock
                        img={restApiIcon}
                        title={"REST API"}
                        />
                    <SkillBlock
                        img={gitIcon}
                        title={"GIT"}
                        />
                    <SkillBlock
                        img={materialUIIcon}
                        title={"Material UI"}
                    />
                    <SkillBlock
                        img={postmanIcon}
                        title={"Postman"}
                    />
                    <SkillBlock
                        img={testIcon}
                        title={"Unit tests"}
                    />
                </div>
            </div>

    )
}