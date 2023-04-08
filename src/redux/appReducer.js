
import { getUserLoginData } from "./authReducer";

const SET_INITIALIZED = 'appReducer/SET_INITIALIZED';

const initialState = {
    initialized: false,
};

const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_INITIALIZED: {
            return {
                ...state,
                initialized: true,
            };
        }

        default: return state;
    }
};

export const setInitialized = () => ({ type: SET_INITIALIZED });

export const initializeApp = () => (dispatch) => {
    Promise.all([dispatch(getUserLoginData())])
        .then(() => dispatch(setInitialized()));

};

export default appReducer;