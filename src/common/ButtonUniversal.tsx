import React from 'react'
import s from "./ButtonMy.module.css";

type ButtonMyType = {
    title: string,
    callBack: (event: React.MouseEvent<HTMLButtonElement>) => void,
    disable: boolean,
    className: string

}

export function ButtonUniversal(props: ButtonMyType) {
    const finalClassName = `${s.button} ${'' ? s.button : s.default} ${props.className}`
        // `${s.button} ${red ? s.red : s.default} ${className}`
    return (
        <button
            className={finalClassName}
            onClick={props.callBack}
            disabled={props.disable}
        >{props.title}</button>
    )
}


