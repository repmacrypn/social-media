import React from "react";
import Message from "./message/Message";
import s from './MessageArea.module.css';
import AddMessageForm from "./addMessageForm/AddMessageForm";

const MessageArea = ({ messagesState, addMessage }) => {
    return <div className={s.messages}>
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