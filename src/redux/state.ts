

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
export type StatePropsType = {
    dialogsPage: DialogsPageType
    profilePage: ProfilePageType
}
let onChange = (state: StatePropsType) => {
    console.log('state rendered')
}
export const state:StatePropsType = {
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
}

export const addPost = () => {
    const newPost = {id: state.dialogsPage.messages.length + 1, message: state.dialogsPage.newPostText}
    state.dialogsPage.messages.push(newPost)
    state.dialogsPage.newPostText = ''
    onChange(state)
}
export const updatePostText = (text: string) => {
    state.dialogsPage.newPostText = text
    onChange(state)
}

export const subscriber = (observer: (state: StatePropsType) => void) => {
    onChange = observer
}
