import {DialogsPageType} from "./state";

export const dialogsReducer = (state: DialogsPageType, action: dialogsReducerActionsType) => {
    switch (action.type) {
        case "ADD-POST": {
            const newPost = {id: state.messages.length + 1, message: state.newPostText}
            state.messages.push(newPost)
            state.newPostText = ''
            return state
        }
        case "UPDATE-POST-TEXT": {
            state.newPostText = action.payload
            return state
        }
        default:
            return state
    }
}

export type dialogsReducerActionsType = AddPostActionType | UpdatePostTextActionType

type AddPostActionType = ReturnType<typeof addPostAC>
type UpdatePostTextActionType = ReturnType<typeof updatePostTextAC>

export const addPostAC = () => {
    return {
        type: 'ADD-POST'
    } as const
}
export const updatePostTextAC = (text: string) => {
    return {
        type: 'UPDATE-POST-TEXT',
        payload: text
    } as const
}
