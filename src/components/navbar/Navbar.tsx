import React from 'react';
import s from './Navbar.module.scss'
import { NavLink} from 'react-router-dom';

export const Navbar = () => {
    const activeClass = ({isActive}:any) => `${s.link}` + (isActive ? ` ${s.activeLink}` : ``)
    return (
        <nav className={s.navbar}>
            <ul className={s.navbar_list}>
                <li>
                   <NavLink to='/profile' className={activeClass}>Profile</NavLink>
                </li>
                <li>
                    <NavLink to='/dialogs' className={activeClass}>Dialogs</NavLink>
                </li>
                <li>
                    <NavLink to='/news' className={activeClass}>News</NavLink>
                </li>
                <li>
                    <NavLink to='/music' className={activeClass}>Music</NavLink>
                </li>
                <li>
                    <NavLink to='/settings' className={activeClass}>Settings</NavLink>
                </li>
            </ul>
        </nav>
    );
};
