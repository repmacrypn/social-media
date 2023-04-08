import { nanoid } from "nanoid";

const ADD_NEW_MES = 'dialogsReducer/ADD_NEW_MES';

const initialState = {
    messagesWrapper: {
        messages: [
            { id: nanoid(), message: "yo" },
            { id: nanoid(), message: "lalka" },
            { id: nanoid(), message: "pipka" },
        ],
    },

    usersWrapper: {
        userNames: [
            { id: nanoid(), name: "Art1k" },
            { id: nanoid(), name: "Kost1k" },
            { id: nanoid(), name: "M4r1k" },
        ],
    },
};

const dialogsReducer = (state = initialState, action) => {
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

export const createNewMessage = addMessageField => ({ type: ADD_NEW_MES, addMessageField });

export default dialogsReducer;
