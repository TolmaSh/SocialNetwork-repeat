import React from 'react';
import s from './Dialogs.module.scss'
import {Message} from './Message/Message';
import {User} from './User/User';
import {ActionTypes, addPostAC, DialogsPageType, updatePostTextAC} from '../../redux/state';

type PropsType = {
    state: DialogsPageType
    dispatch: (action: ActionTypes) => void
}

export const Dialogs: React.FC<PropsType> = (props) => {
    const {dialogs, messages} = props.state

    const newPostText = React.createRef<any>();
    const addPostCallback = () => {
        props.dispatch(addPostAC())
    }

    const onChangePostHandler = () => {
        const text = newPostText.current.value
        props.dispatch(updatePostTextAC(text))
    }

    return (
            <div className={s.dialogs}>
                <div className={s.dialogsWrapper}>
                    <ul className={s.users}>
                        {dialogs.map(u => {
                            return <User key={u.id} user={u.name}/>
                        })}
                    </ul>
                    <ul className={s.messages}>
                        {messages.map(m => {
                            return <Message key={m.id} message={m.message}/>
                        })}
                    </ul>
                </div>

                <textarea onChange={onChangePostHandler} className={s.dialogsTextArea} ref={newPostText} value={props.state.newPostText}></textarea>
                <button className={s.dialogsButton} onClick={addPostCallback}>Add post</button>
            </div>


    );
};