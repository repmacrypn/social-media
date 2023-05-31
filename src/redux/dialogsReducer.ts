import { nanoid } from "nanoid";

const ADD_NEW_MES = 'dialogsReducer/ADD_NEW_MES';

type MessageType = {
    id: string
    message: string
}

type UserNameType = {
    id: string
    name: string
}

const initialState = {
    messagesWrapper: {
        messages: [
            { id: nanoid(), message: "yo" },
            { id: nanoid(), message: "qq" },
            { id: nanoid(), message: "lol" },
        ] as Array<MessageType>,
    },

    usersWrapper: {
        userNames: [
            { id: nanoid(), name: "Art1k" },
            { id: nanoid(), name: "Kost1k" },
            { id: nanoid(), name: "M4r1k" },
        ] as Array<UserNameType>,
    },
};

export type InitialStateType = typeof initialState

const dialogsReducer = (state = initialState, action: any): InitialStateType => {
    switch (action.type) {
        case ADD_NEW_MES: {
            return {
                ...state,
                messagesWrapper: {
                    messages: [...state.messagesWrapper.messages, { id: nanoid(), message: action.addMessageField }],
                },
            };
        }

        default: return state;
    }
};

type CreateNewMessageType = {
    type: typeof ADD_NEW_MES
    addMessageField: string
}

export const createNewMessage = (addMessageField: string): CreateNewMessageType => ({ type: ADD_NEW_MES, addMessageField })

export default dialogsReducer
