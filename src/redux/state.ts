import {message} from "antd";
import {ActionsTypes, profileReducer} from "./profile-reducer";
import {dialogsReducer} from "./dialogs-reducer";
import {sidebarReducer} from "./sidebar-reducer";

type MessagesType = {
    id: number
    message: string
}

type DialogsType = {
    id: number
    name: string
}

export type PostsType = {
    id: number
    message: string
    likeCount: number
}

export type ProfilePageType = {
    posts: PostsType[]
    newPostText: string
}

export type DialogPageType = {
    dialogs: DialogsType[]
    messages: MessagesType[]
    newMessageBody: string

}

type SidebarType = {}

export type RootStateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogPageType
    sidebar: SidebarType
}

export type StoreType = {
    _state: RootStateType
    getState: () => RootStateType

    subscribe: (callback: (state: RootStateType) => void ) => void
    _onChange: (state: RootStateType) => void

    dispatch: (action: ActionsTypes) => void
}

// export type AddPostActionType = {
//     type: 'ADD-POST'
//     postMessage: string
// }
//
// export type UpdateNewPostTextActionType = {
//     type: 'UPDATE-NEW-POST-TEXT'
//     newText: string
// }

export const store: StoreType = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: 'Hi, how are you?', likeCount: 12},
                {id: 2, message: "It's my first post", likeCount: 11},
                {id: 3, message: "Blf-blf", likeCount: 11},
                {id: 4, message: "Hm...", likeCount: 11},
            ],
            newPostText: 'заглушка внутри state'
        },
        dialogsPage: {
            dialogs: [
                {id: 1, name: 'Dimych'},
                {id: 2, name: 'Andrei'},
                {id: 3, name: 'Sveta'},
                {id: 4, name: 'Sasha'},
                {id: 5, name: 'Victor'},
                {id: 6, name: 'Valera'},
            ],

            messages: [
                {id: 1, message: 'Hi'},
                {id: 2, message: 'HOW ARE YOU?'},
                {id: 3, message: 'Yo'},
                {id: 4, message: 'Yo'},
                {id: 5, message: 'Yo'},
            ],
            newMessageBody: ''
        },
        sidebar: {}

    },
    _onChange() {
        //_callSubscriber в пути самурая
        console.log('State changed')
    },

    getState() {
        return this._state
    },
    subscribe (callback) {
        //observer или callback - одно и тоже
        this._onChange = callback
    },

    dispatch(action) {

        this._state.profilePage = profileReducer(this._state.profilePage, action)
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)
        this._state.sidebar = sidebarReducer(this._state.sidebar, action)
        //уведомляем подписчиков об изменении стейта:
        this._onChange(this._state)

    }

}