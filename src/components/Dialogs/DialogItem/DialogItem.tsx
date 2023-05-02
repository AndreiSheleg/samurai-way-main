import React from 'react';
import s from './../Dialogs.module.css'
import {NavLink} from 'react-router-dom';

type DialogItemType = {
    id?: number
    name: string
}
// BLL - business logic layer (DATA)
// UI - user Interface

export const DialogItem: React.FC<DialogItemType> = (props) => {
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