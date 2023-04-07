import React from 'react';
import s from './Dialogs.module.css'
import {NavLink} from 'react-router-dom';

type DialogItemType = {
    id: number
    name: string
}

const DialogItem: React.FC<DialogItemType> = (props) => {
    let path = '/dialogs/' + props.id

    {/*                склеиваем два класса и добавляеи пробел между ними*/}
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
    return (
        <div className={s.dialogs}>

            <div className={s.dialogsItems}>

                <DialogItem id={1} name = {'Dimych'} />
                <DialogItem id={2} name = {'Andrei'} />
                <DialogItem id={3} name = {'Sveta'} />
                <DialogItem id={4} name = {'Sasha'} />
                <DialogItem id={5} name = {'Victor'} />
                <DialogItem id={6} name = {'Valera'} />
            </div>
            <div className={s.messages}>
                <Message message={'GOOD MORNING, WORLD!'} />
                <Message message={'HOW ARE YOU?'} />
                <Message message={'YO'} />
            </div>

        </div>
    )
}