import React from 'react';

type MessagePropsType = {
    message: string
}

export const Message:React.FC<MessagePropsType> = ({message}) => {
    return (
        <li>
            {message}
        </li>
    );
};