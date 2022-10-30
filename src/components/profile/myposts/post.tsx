import React from 'react';

type propsType = {
    postText: string
}



export const Post = ({postText}: propsType) => {
    return (
        <li>
            {postText}
        </li>
    );
};