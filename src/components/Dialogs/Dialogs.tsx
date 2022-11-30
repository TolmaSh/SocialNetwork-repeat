import React from 'react';
import s from './Dialogs.module.scss'
import {Message} from './Message/Message';
import {User} from './User/User';
import {DialogsPageType} from '../../redux/state';

type PropsType = {
    state: DialogsPageType
}

export const Dialogs:React.FC<PropsType> = (props)  => {
        const {dialogs,messages} = props.state
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