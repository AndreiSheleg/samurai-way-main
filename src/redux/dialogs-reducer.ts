import {DialogPageType, RootStateType} from "./state";
import {ActionsTypes} from './profile-reducer'

export const dialogsReducer = (state: DialogPageType, action: ActionsTypes): DialogPageType => {

    switch (action.type) {
        case "UPDATE-NEW-MESSAGE-BODY":
            state.newMessageBody = action.body
            return state
        case "SEND-MESSAGE":
            let body = state.newMessageBody
            //ниже зануляем введённое ранее сообщение
            state.newMessageBody = ''
            //далее записываем это сообщение в массив сообщений - пока мутабельно, что не есть хорошо
            state.messages.push({id: new Date().getTime(), message: body})
            return state
        default:
            return state
    }
}

export type updateNewMessageBodyActionType = ReturnType<typeof updateNewMessageBodyAC>

export type SendMessageActionType = ReturnType<typeof sendMessageAC>
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