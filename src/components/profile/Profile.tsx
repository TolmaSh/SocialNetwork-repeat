import React from 'react';
import s from './Profile.module.scss'
import {Myposts} from './myposts/myposts';

import {ProfilePageType} from '../../redux/state';
type PropsType = {
    state: ProfilePageType
}

export const Profile:React.FC<PropsType> = (props) => {
    const {posts} = props.state

    return (
        <div className={s.profile}>
            <Myposts posts={posts}/>
        </div>
    );
};
