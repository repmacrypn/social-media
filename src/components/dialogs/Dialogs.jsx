import React from "react";
import s from './Dialogs.module.css';
import MessageArea from "./messages/MessageArea";
import Users from "./Users/Users";
import '../../common_styles/demoMessageAlert.css';

const Dialogs = ({ usersState, messagesState, createNewMessage, updateTextarea }) => {
    return (
        <>
            <div className={s.dialogs}>
                <Users users={usersState.userNames} />
                <MessageArea
                    messagesState={messagesState}
                    addMessage={createNewMessage}
                    updateMessageTextarea={updateTextarea} />
            </div>
            <div className={`demoMessageAlert ${s.demo}`}>
                Demo xxD
            </div>
        </>
    );
};

export default Dialogs;