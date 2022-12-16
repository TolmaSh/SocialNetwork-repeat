import React, {RefObject} from 'react';
import s from './Dialogs.module.scss'
import {Message} from './Message/Message';
import {User} from './User/User';
import {addPost, DialogsPageType, updatePostText} from '../../redux/state';

type PropsType = {
    state: DialogsPageType
    addPost: () => void
    updatePostText: (text: string) => void
}

export const Dialogs: React.FC<PropsType> = (props) => {
    const {dialogs, messages} = props.state

    const newPostText:any = React.createRef()
    const addPostCallback = () => {
        addPost()
    }
    const onChangePostHandler = () => {
        const text = newPostText.current.value
        updatePostText(text)
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