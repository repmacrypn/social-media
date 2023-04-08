import React from "react";
import s from './Dialogs.module.css';
import MessageArea from "./messages/MessageArea";
import Users from "./Users/Users";

const Dialogs = ({ usersState, messagesState, createNewMessage, updateTextarea }) => {
    return <div className={s.dialogs}>
        <Users users={usersState.userNames} />
        <MessageArea
            messagesState={messagesState}
            addMessage={createNewMessage}
            updateMessageTextarea={updateTextarea} />
    </div>;
};

export default Dialogs;