import React from 'react';
import s from './Navbar.module.scss'

export const Navbar = () => {
    return (
        <div className={s.navbar}>
            <ul className={s.navbar_list}>
                <li>Profile</li>
                <li>Messages</li>
                <li>News</li>
                <li>Music</li>
                <li>Settings</li>
            </ul>
        </div>
    );
};
