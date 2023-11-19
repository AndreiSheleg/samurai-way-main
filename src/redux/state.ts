// @ts-ignore
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

export let state: RootStateType = {
    profilePage: {
        posts: [
            {id: 1, message: 'Hi, how are you?', likeCount: 12},
            {id: 2, message: "It's my first post", likeCount: 11},
            {id: 3, message: "Blf-blf", likeCount: 11},
            {id: 4, message: "Hm...", likeCount: 11},
        ],
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

}

export let addPost = (postMessage: string) => {
    console.log('звонок из функции addPost: ', postMessage)
    let newPost: PostsType = {
        id: 5,
        message: postMessage,
        likeCount: 0
    }
    state.profilePage.posts.push(newPost)
}