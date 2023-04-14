import { authAPI, securityAPI } from '../api/api';

const SET_USER_LOGIN_DATA = 'authReducer/SET_USER_LOGIN_DATA';
const SET_CAPTCHA_URL = 'authReducer/SET_CAPTCHA_URL';

let initialState = {
    id: null,
    email: null,
    login: null,
    isAuth: false,
    captchaURL: null,
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

        case SET_CAPTCHA_URL: {
            return {
                ...state,
                captchaURL: action.captchaURL,
            };
        }

        default: return state;
    }
};

export const setUserLoginData = (data) => ({ type: SET_USER_LOGIN_DATA, data });

const setCaptchaURL = (captchaURL) => ({ type: SET_CAPTCHA_URL, captchaURL });

export const getUserLoginData = () => async (dispatch) => {
    const data = await authAPI.getAuthUserProfile();
    if (data.resultCode === 0) {
        dispatch(setUserLoginData({ ...data.data, isAuth: true }));
    }
};

export const login = (email, password, rememberMe, captcha, setStatus, setSubmitting) => async (dispatch) => {
    const data = await authAPI.login(email, password, rememberMe, captcha);
    if (data.resultCode === 0) {
        dispatch(getUserLoginData());
        setSubmitting(false);
    } else {
        if (data.resultCode === 10) {
            dispatch(getCapthcaURL());
        }
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

export const getCapthcaURL = () => async (dispatch) => {
    const captchaURL = await securityAPI.getCaptchaURL();
    dispatch(setCaptchaURL(captchaURL));
};

export default authReducer;

