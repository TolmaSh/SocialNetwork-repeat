import React from 'react';
import s from './Dialogs.module.scss'
import {Message} from './Message/Message';
import {User} from './User/User';

export const Dialogs = () => {
    return (
        <div className={s.dialogs}>
            <ul className={s.users}>
                <User user={'Tim'}/>
                <User user={'David'}/>
                <User user={'Tom'}/>
                <User user={'Hardin'}/>
            </ul>
            <ul className={s.messages}>
                <Message message={'Hi'}/>
                <Message message={'Hi'}/>
                <Message message={'Hi'}/>
            </ul>
        </div>
    );
};