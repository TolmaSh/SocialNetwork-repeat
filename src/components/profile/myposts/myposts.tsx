import React from 'react';
import {Post} from './post';

export const Myposts = () => {
    return (
        <ul>
            <Post postText={'Hi'} />
            <Post postText={'HEllo'} />
        </ul>
    );
};

