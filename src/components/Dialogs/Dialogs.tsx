import React, {ChangeEvent} from 'react';
import s from './Dialogs.module.css'
import {DialogItem} from './DialogItem/DialogItem';
import {Message} from './Message/Message';
import {ActionsTypes, DialogPageType, ProfilePageType, sendMessageAC, updateNewMessageBodyAC} from "../../redux/state";

type DialogsPropsType = {
    state: DialogPageType
    dispatch: (action: ActionsTypes) => void
}

export const Dialogs: React.FC<DialogsPropsType> = (props) => {

    let dialogsElements = props.state.dialogs.map(d => <DialogItem id={d.id} name={d.name}/>)
    let messagesElements = props.state.messages.map(m => <Message message={m.message}/>)
    let newMessageBody = props.state.newMessageBody

    let onClickSendMessage = () => {
        props.dispatch(sendMessageAC())
    }

    let onChangeNewMessage = (e: ChangeEvent<HTMLTextAreaElement>) => {
        let body = e.currentTarget.value
        props.dispatch(updateNewMessageBodyAC(body))
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
                <div>
                    <div><textarea value={newMessageBody}
                                   onChange={onChangeNewMessage}
                                   placeholder='Enter your message'></textarea></div>
                    <div>
                        <button onClick={onClickSendMessage}>Send message</button>
                    </div>
                </div>
            </div>

        </div>
    )
}