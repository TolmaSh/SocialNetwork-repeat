import React from 'react';
import {Post} from './post';

export const Myposts = () => {
    const postsData = [
        {id: 1, post: 'Hi'},
        {id: 2, post: 'I see you'},
        {id: 3, post: 'I want drink beer'},
        {id: 4, post: 'How are you?'},
    ]

    const mappedPosts = postsData.map(p=><Post postText={p.post}/>)

    return (
        <ul>
            {mappedPosts}
        </ul>
    );
};

