import React from 'react';
import {Post} from './post';
import {postsDataType} from '../../../index';
type PropsType = {
    posts:postsDataType[]
}

export const Myposts:React.FC<PropsType> = ({posts}) => {
    // const postsData = [
    //     {id: 1, post: 'Hi'},
    //     {id: 2, post: 'I see you'},
    //     {id: 3, post: 'I want drink beer'},
    //     {id: 4, post: 'How are you?'},
    // ]

    const mappedPosts = posts.map(p=><Post postText={p.post}/>)

    return (
        <ul>
            {mappedPosts}
        </ul>
    );
};

