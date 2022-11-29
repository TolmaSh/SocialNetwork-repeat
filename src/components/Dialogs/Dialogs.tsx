import React from 'react';
import s from './Dialogs.module.scss'
import {Message} from './Message/Message';
import {User} from './User/User';
import {dialogsDataType, messagesDataType} from '../../index';

type PropsType = {
    dialogs: dialogsDataType[]
    messages: messagesDataType[]
}
/*const dialogsData = [
    {id:1, name: 'Tim'},
    {id:2, name: 'Bob'},
    {id:3, name: 'John'},
    {id:4, name: 'Olga'},
    {id:5, name: 'Horton'},
    {id:6, name: 'Harry'},
    {id:7, name: 'Sergey'},
]*/

/*const messagesData = [
    {id:1, message: 'Hi'},
    {id:2, message: 'Hey'},
    {id:3, message: 'Bye'},
    {id:4, message: 'How are you?'},
    {id:5, message: 'I`m fine , thank you'},
]*/

export const Dialogs:React.FC<PropsType> = ({dialogs,messages})  => {

    return (
        <div className={s.dialogs}>
            <ul className={s.users}>
                {dialogs.map(u => {
                    return <User key={u.id} user={u.name}/>
                })}
            </ul>
            <ul className={s.messages}>
                {messages.map(m=> {
                    return <Message key={m.id} message={m.message}/>
                })}
            </ul>
        </div>
    );
};