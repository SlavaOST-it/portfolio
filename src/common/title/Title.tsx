import React from 'react';
import commonStyle from "./Title.module.css";

type TitleType = {
    title: string
}
export const Title = (props: TitleType) => {
    return (
        <div className={commonStyle.title_block}>
            <h2>{props.title}</h2>
            <span className={commonStyle.hr}></span>
        </div>
    );
};