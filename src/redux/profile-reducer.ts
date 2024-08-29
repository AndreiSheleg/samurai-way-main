import {PostsType,ProfilePageType,RootStateType} from "./state";
import {SendMessageActionType, updateNewMessageBodyActionType} from './dialogs-reducer'

const initialState: ProfilePageType= {
    posts: [
        {id: 1, message: 'Hi, how are you?', likeCount: 12},
        {id: 2, message: "It's my first post", likeCount: 11},
        {id: 3, message: "Blf-blf", likeCount: 11},
        {id: 4, message: "Hm...", likeCount: 11},
    ],
    newPostText: 'заглушка внутри state'
}
export const profileReducer = (state: ProfilePageType = initialState, action: ActionsTypes): ProfilePageType => {

    switch (action.type) {
        case "ADD-POST":
            let newPost: PostsType = {
                id: new Date().getTime(),
                message: state.newPostText,
                likeCount: 0
            }
            state.posts.push(newPost)
            state.newPostText = ''
            return state
        case "UPDATE-NEW-POST-TEXT":
            state.newPostText = action.newText
            return state
        default:
            return state
    }
}

export type AddPostActionType = ReturnType<typeof addPostAC>

export type UpdateNewPostTextActionType = ReturnType<typeof updateNewPostTextAC>

export type ActionsTypes =
    AddPostActionType
    | UpdateNewPostTextActionType
    | updateNewMessageBodyActionType
    | SendMessageActionType

export const addPostAC = (postMessage: string) => {
    return {
        type: 'ADD-POST',
        postMessage: postMessage
    } as const
}

export const updateNewPostTextAC = (newText: string) => {
    return {
        type: 'UPDATE-NEW-POST-TEXT',
        newText: newText
    } as const
}