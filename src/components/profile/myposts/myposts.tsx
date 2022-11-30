import React from 'react';
import {Post} from './post';
import {PostsDataType} from '../../../redux/state';
type PropsType = {
    posts:PostsDataType[]
}

export const Myposts:React.FC<PropsType> = ({posts}) => {

    const mappedPosts = posts.map(p=><Post postText={p.post}/>)

    return (
        <ul>
            {mappedPosts}
        </ul>
    );
};

