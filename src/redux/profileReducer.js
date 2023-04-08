import { nanoid } from 'nanoid';
import { profileAPI } from '../api/api';

const ADD_POST = 'profileReducer/ADD_POST';
const SET_PROFILE_PAGE = 'profileReducer/SET_PROFILE_PAGE';
const SET_PROFILE_STATUS = 'profileReducer/SET_PROFILE_STATUS';

const initialState = {
    posts: [
        { id: nanoid(), text: 'Hi', likesCount: 11 },
        { id: nanoid(), text: 'Howdy', likesCount: 2 },
        { id: nanoid(), text: 'Hello', likesCount: 5 },
        { id: nanoid(), text: 'Sup', likesCount: 32 },
        { id: nanoid(), text: 'Wasup', likesCount: 17 },
    ],

    profilePage: null,

    profileStatus: '',
};

const profileReducer = (state = initialState, action) => {
    switch (action.type) {

        case ADD_POST: {
            return {
                ...state,
                posts: [...state.posts, { id: nanoid(), text: action.newPostMessage, likesCount: 0 }],
            };
        }

        case SET_PROFILE_PAGE: {
            return {
                ...state,
                profilePage: action.profilePage,
            };
        }

        case SET_PROFILE_STATUS: {
            return {
                ...state,
                profileStatus: action.profileStatus,
            };
        }

        default: return state;
    }
};

export const addPost = (newPostMessage) => ({ type: ADD_POST, newPostMessage });
export const setProfilePage = (profilePage) => ({ type: SET_PROFILE_PAGE, profilePage, });

const setProfileStatus = (profileStatus) => ({ type: SET_PROFILE_STATUS, profileStatus, });

export const getProfilePage = (id) => async dispatch => {
    const data = await profileAPI.getCurUserProfile(id);
    dispatch(setProfilePage(data));
};

export const getProfileStatus = (id) => async (dispatch) => {
    const response = await profileAPI.getProfileStatus(id);
    dispatch(setProfileStatus(response.data));
};

export const updateProfileStatus = (profileStatus) => async (dispatch) => {
    const response = await profileAPI.updateProfileStatus(profileStatus);
    if (response.data.resultCode === 0) {
        dispatch(setProfileStatus(profileStatus));
    }
};

export default profileReducer;