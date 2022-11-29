import React from 'react';
import s from './Profile.module.scss'
import {Myposts} from './myposts/myposts';
import {postsDataType} from '../../index';
type PropsType = {
    posts:postsDataType[]
}

export const Profile:React.FC<PropsType> = ({posts}) => {
    return (
        <div className={s.profile}>
            <Myposts posts={posts}/>
        </div>
    );
};
