import React from "react";
import Message from "./message/Message";
import s from './MessageArea.module.css';
import AddMessageForm from "./addMessageForm/AddMessageForm";
import { DialogsMainAbstrWrapper } from "../Users/Users";

const MessageArea = ({ messagesState, addMessage }) => {
    return <div className={s.messages}>
        <DialogsMainAbstrWrapper text='Messages' />
        {
            messagesState.messages.map((obj, i) => {
                return <Message
                    key={obj.id}
                    message={messagesState.messages[i].message}
                />;
            })
        }
        <AddMessageForm addMessage={addMessage} />
    </div>;
};

export default MessageArea;