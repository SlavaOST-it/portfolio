import React from 'react';
import {NavLink} from "react-router-dom";


type NavType = {
    link: string,
    titleLink?: string,
    imgLogo?: string,
    className?: string,
    activeClassName?: string
}

export const Nav: React.FC<NavType> = ({
                                           link,
                                           titleLink,
                                           imgLogo,
                                           className,
                                           activeClassName,
                                           ...restProps
                                       }) => {
    return (
        <div>
            <NavLink to={link}
                     className={({isActive}) => isActive ? activeClassName : className}>
                {titleLink}
                { imgLogo && <img src={imgLogo} alt={'link logo'} {...restProps}/>}
            </NavLink>
        </div>
    );
};

