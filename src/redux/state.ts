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
}

type SidebarType = {}

export type RootStateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogPageType
    sidebar: SidebarType
}

export type StoreType = {
    _state: RootStateType
    updateNewPostText: (newText: string) => void
    addPost: (postMessage: string) => void
    _onChange: () => void
    subscribe: (callback: () => void ) => void
    getState: () => RootStateType
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
            ]
        },
        sidebar: {}

    },
    updateNewPostText(newText: string) {
        this._state.profilePage.newPostText = newText
        this._onChange()
    },
    addPost(postMessage: string) {
        console.log('звонок из функции addPost: ', postMessage)
        let newPost: PostsType = {
            id: 5,
            message: postMessage,
            likeCount: 0
        }
        this._state.profilePage.posts.push(newPost)
        this._onChange()
        this.updateNewPostText('')
    },
    _onChange() {
        console.log('State changed')
    },
    subscribe (callback) {
        this._onChange = callback
    },
    getState() {
        return this._state
    }

}