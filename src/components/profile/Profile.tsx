import React from 'react';
import s from './Profile.module.scss'
import {Myposts} from './myposts/myposts';

export const Profile = () => {
    return (
        <div className={s.profile}>
            <Myposts/>
        </div>
    );
};
