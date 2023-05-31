import { authAPI, securityAPI } from '../api/api';

const SET_USER_LOGIN_DATA = 'authReducer/SET_USER_LOGIN_DATA';
const SET_CAPTCHA_URL = 'authReducer/SET_CAPTCHA_URL';

let initialState = {
    id: null as number | null,
    email: null as string | null,
    login: null as string | null,
    isAuth: false as boolean | null,
    captchaURL: null as string | null,
};

export type InitialStateType = typeof initialState;

const authReducer = (state = initialState, action: any): InitialStateType => {
    switch (action.type) {

        case SET_USER_LOGIN_DATA: {
            let { id, email, login, isAuth } = action.data;
            return {
                ...state,
                id, email, login, isAuth,
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

type SetUserLoginDataType = {
    type: typeof SET_USER_LOGIN_DATA
    data: DataType
};

type DataType = {
    id: number | null
    email: string | null
    login: string | null
    isAuth: boolean | null
};

export const setUserLoginData = (data: DataType): SetUserLoginDataType => ({ type: SET_USER_LOGIN_DATA, data });

type SetCaptchaURLType = {
    type: typeof SET_CAPTCHA_URL
    captchaURL: string
};

const setCaptchaURL = (captchaURL: string): SetCaptchaURLType => ({ type: SET_CAPTCHA_URL, captchaURL });

export const login = (email: string, password: string, rememberMe: boolean, captcha: string | null, setStatus: any, setSubmitting: any) =>
    async (dispatch: any) => {
        const data = await authAPI.login(email, password, rememberMe, captcha);
        if (data.resultCode === 0) {
            dispatch(setUserLoginData({ id: data.data.userId, email, login: email, isAuth: true }));
            setSubmitting(false);
        } else {
            if (data.resultCode === 10) {
                dispatch(getCapthcaURL());
            }
            setStatus(data.messages[0]);
            setSubmitting(false);
        }
    };

export const logout = () => async (dispatch: any) => {
    const data = await authAPI.logout();
    if (data.resultCode === 0) {
        dispatch(setUserLoginData({ email: null, login: null, id: null, isAuth: false }));
    }
};

export const getCapthcaURL = () => async (dispatch: any) => {
    const captchaURL = await securityAPI.getCaptchaURL();
    dispatch(setCaptchaURL(captchaURL));
};

export default authReducer;

