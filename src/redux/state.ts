import {message} from "antd";

type MessagesType = {
    id: number
    message: string
}

type DialogsType = {
    id: number
    name: string
}

type PostsType = {
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

export type AddPostActionType = ReturnType<typeof addPostAC>

export type UpdateNewPostTextActionType = ReturnType<typeof updateNewPostTextAC>

export type updateNewMessageBodyActionType = ReturnType<typeof updateNewMessageBodyAC>

export type SendMessageActionType = ReturnType<typeof sendMessageAC>

export type ActionsTypes = AddPostActionType | UpdateNewPostTextActionType | updateNewMessageBodyActionType | SendMessageActionType

export const addPostAC = (postMessage: string) => {
    return {
        type: 'ADD-POST',
        postMessage: postMessage
    } as const
}

export const updateNewPostTextAC = (newText:string) => {
    return {
        type: 'UPDATE-NEW-POST-TEXT',
        newText: newText
    } as const
}

export const updateNewMessageBodyAC = (body: string) => {
    return {
        type: 'UPDATE-NEW-MESSAGE-BODY',
        body: body
    } as const
}

export const sendMessageAC = () => {
    return {
        type: 'SEND-MESSAGE'
    } as const
}

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
        if (action.type === 'ADD-POST') {
            let newPost:PostsType = {
                id: new Date().getTime(),
                message: this._state.profilePage.newPostText,
                likeCount: 0
            }
            this._state.profilePage.posts.push(newPost)
            this._state.profilePage.newPostText = ''
            this._onChange(this._state)
        } else if (action.type === 'UPDATE-NEW-POST-TEXT') {
            this._state.profilePage.newPostText = action.newText
            this._onChange(this._state)
        } else if (action.type === 'UPDATE-NEW-MESSAGE-BODY') {
            this._state.dialogsPage.newMessageBody = action.body
            this._onChange(this._state)
        } else if (action.type === 'SEND-MESSAGE') {
            let body = this._state.dialogsPage.newMessageBody
            //ниже зануляем введённое ранее сообщение
            this._state.dialogsPage.newMessageBody = ''
            //далее записываем это сообщение в массив сообщений - пока мутабельно, что не есть хорошо
            this._state.dialogsPage.messages.push( {id: new Date().getTime(), message: body} )
            this._onChange(this._state)

        }
    }

}