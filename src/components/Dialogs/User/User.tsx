import React from 'react';

type UserPropsType = {
    user:string
}

export const User:React.FC<UserPropsType> = ({user}) => {
    return (
        <li>
            {user}
        </li>
    );
};
