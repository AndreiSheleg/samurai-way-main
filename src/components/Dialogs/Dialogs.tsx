import React from 'react';
import s from './Dialogs.module.css'
import {DialogItem} from './DialogItem/DialogItem';
import {Message} from './Message/Message';

export type DialogType = {
    id?: number,
    name: string
}

export type MessageType = {
    id?: number,
    message: string
}

type DialogsPropsType = {
    dialogs: DialogType[],
    messages: MessageType[]
}

export const Dialogs = (props: DialogsPropsType) => {

    // item переворидтся как "пункт"
    // grid переводится как "сетка"
/*    let dialogs = [
        {id: 1, name: 'Dimych'},
        {id: 2, name: 'Andrei'},
        {id: 3, name: 'Sveta'},
        {id: 4, name: 'Sasha'},
        {id: 5, name: 'Victor'},
        {id: 6, name: 'Valera'}
    ]

    let messages = [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'HOW ARE YOU?'},
        {id: 3, message: 'Yo'},
        {id: 4, message: 'Yo'},
        {id: 5, message: 'Yo'},
    ]*/

    let dialogsElements = props.dialogs.map(d => <DialogItem id={d.id} name={d.name}/>)
    let messagesElements = props.messages.map(m => <Message message={m.message}/>)

    return (
        <div className={s.dialogs}>

            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
            </div>

        </div>
    )
}