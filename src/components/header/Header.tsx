import React from "react";
import s from "./Header.module.css"
import styleContainer from "../../common/styles/CommonStyles.module.css"
import {Nav} from "./nav/Nav";
import {PATH} from "../../routes/routes";

export const Header = () => {
 const item = [
    {link: PATH.home, title: 'HOME'},
    {link: PATH.aboutMe, title: 'ABOUT ME'},
    {link: PATH.skills, title: 'SKILLS'},
    {link: PATH.portfolio, title: 'PORTFOLIO'},
    {link: PATH.contacts, title: 'CONTACTS'},
    ]

    return (
        <div className={s.header}>
            <div className={styleContainer.container}>
                <nav className={s.nav}>
                    {item.map((el) =>
                        <Nav
                            key={el.link}
                            link={el.link}
                            titleLink={el.title}
                            className={s.button}
                            activeClassName={s.buttonActive}
                        />
                    )}
                </nav>
            </div>
        </div>
    )
}
