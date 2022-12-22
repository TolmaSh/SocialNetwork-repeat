

export type DialogsDataType = {
    id: number
    name: string
}
export type MessagesDataType = {
    id:number
    message:string
}
export type PostsDataType = {
    id:number
    post:string
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
            {id:1, name: 'Tim'},
            {id:2, name: 'Bob'},
            {id:3, name: 'John'},
            {id:4, name: 'Olga'},
            {id:5, name: 'Horton'},
            {id:6, name: 'Harry'},
            {id:7, name: 'Sergey'},
        ],
        messages: [
            {id:1, message: 'Hi'},
            {id:2, message: 'Hey'},
            {id:3, message: 'Bye'},
            {id:4, message: 'How are you?'},
            {id:5, message: 'I`m fine , thank you'},
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
        if ( action.type === 'ADD-POST') {
            const newPost = {id: this._state.dialogsPage.messages.length + 1, message: this._state.dialogsPage.newPostText}
            this._state.dialogsPage.messages.push(newPost)
            this._state.dialogsPage.newPostText = ''
            this._subscriber()
        } else if ( action.type === 'UPDATE-POST-TEXT') {
            this._state.dialogsPage.newPostText = action.payload
            this._subscriber()
        }
    }
}


export type ActionTypes = AddPostActionType | UpdatePostTextActionType

type AddPostActionType = ReturnType<typeof addPostAC>
type UpdatePostTextActionType = ReturnType<typeof updatePostTextAC>

export const addPostAC = () => {
    return {
        type: 'ADD-POST'
    } as const
}
export const updatePostTextAC = (text:string) => {
    return {
        type: 'UPDATE-POST-TEXT',
        payload: text
    } as const
}



