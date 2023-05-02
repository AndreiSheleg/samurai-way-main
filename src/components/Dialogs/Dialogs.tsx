import React from 'react';
import s from './Dialogs.module.css'
import {NavLink} from 'react-router-dom';

type DialogItemType = {
    id: number
    name: string
}
// BLL - business logic layer (DATA)
// UI - user Interface

const DialogItem: React.FC<DialogItemType> = (props) => {
    // ниже контентинацию строк делаем - склеиваем
    let path = '/dialogs/' + props.id

    {/*                склеиваем два класса и добавляеи пробел между ними*/
    }
    return (

        <div className={s.dialog + ' ' + s.active}>
            <NavLink to={path}><span>{props.name}</span></NavLink>
        </div>
    )
}

type MessageType = {
    message: string
}

const Message: React.FC<MessageType> = (props) => {

    return (
        <div className={s.message}><span>{props.message}</span></div>
    )
}

export const Dialogs = (props: any) => {

    // item переворидтся как "пункт"
    // grid переводится как "сетка"
    let dialogs = [
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
    ]

    let dialogsElements = dialogs.map(d => <DialogItem id={d.id} name={d.name}/>)
    let messagesElements = messages.map(m => <Message message={m.message}/>)

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