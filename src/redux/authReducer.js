import { authAPI } from '../api/api';

const SET_USER_LOGIN_DATA = 'authReducer/SET_USER_LOGIN_DATA';

let initialState = {
    id: null,
    email: null,
    login: null,
    isAuth: false,
    isFetcheng: false,
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {

        case SET_USER_LOGIN_DATA: {
            let { id, email, login, isAuth } = action.data;
            return {
                ...state,
                id, email, login, isAuth
            };
        }

        default: return state;
    }
};

export const setUserLoginData = data => ({ type: SET_USER_LOGIN_DATA, data });

export const getUserLoginData = () => async (dispatch) => {
    const data = await authAPI.getAuthUserProfile();
    if (data.resultCode === 0) {
        dispatch(setUserLoginData({ ...data.data, isAuth: true }));
    }
};

export const login = (email, password, rememberMe, setStatus, setSubmitting) => async (dispatch) => {
    const data = await authAPI.login(email, password, rememberMe)
    if (data.resultCode === 0) {
        dispatch(getUserLoginData());
        setSubmitting(false);
    } else {
        setStatus(data.messages[0]);
        setSubmitting(false);
    }
};

export const logout = () => async (dispatch) => {
    const data = await authAPI.logout();
    if (data.resultCode === 0) {
        dispatch(setUserLoginData({ email: null, password: null, id: null, isAuth: false }));
    }
};

export default authReducer;

