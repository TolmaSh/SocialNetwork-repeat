import {dialogsReducer, dialogsReducerActionsType} from "./dialogs-reducer";


export type DialogsDataType = {
    id: number
    name: string
}
export type MessagesDataType = {
    id: number
    message: string
}
export type PostsDataType = {
    id: number
    post: string
}
export type DialogsPageType = {
    dialogs: DialogsDataType[]
    messages: MessagesDataType[]
    newPostText: string
}
export type ProfilePageType = {
    posts: PostsDataType[]
}
export type StateType = {
    dialogsPage: DialogsPageType
    profilePage: ProfilePageType
}


export type StoreType = {
    _state: StateType
    _subscriber: () => void
    getState: () => void
    subscribe: (observer: () => void) => void

    dispatch: (action: ActionTypes) => void
}
export const store: StoreType = {
    _state: {
        dialogsPage: {
            dialogs: [
                {id: 1, name: 'Tim'},
                {id: 2, name: 'Bob'},
                {id: 3, name: 'John'},
                {id: 4, name: 'Olga'},
                {id: 5, name: 'Horton'},
                {id: 6, name: 'Harry'},
                {id: 7, name: 'Sergey'},
            ],
            messages: [
                {id: 1, message: 'Hi'},
                {id: 2, message: 'Hey'},
                {id: 3, message: 'Bye'},
                {id: 4, message: 'How are you?'},
                {id: 5, message: 'I`m fine , thank you'},
            ],
            newPostText: ''
        },
        profilePage: {
            posts: [
                {id: 1, post: 'Hi'},
                {id: 2, post: 'I see you'},
                {id: 3, post: 'I want drink beer'},
                {id: 4, post: 'How are you?'},
            ]
        }
    },
    _subscriber() {
        console.log('state render')
    },

    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._subscriber = observer
    },


    dispatch(action) {
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)
        this._subscriber()
    }
}


export type ActionTypes = dialogsReducerActionsType




