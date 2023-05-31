import { nanoid } from 'nanoid';
import { profileAPI } from '../api/api';
import { PhotosType } from '../types/types';

const ADD_POST = 'profileReducer/ADD_POST';
const SET_PROFILE_PAGE = 'profileReducer/SET_PROFILE_PAGE';
const SET_PROFILE_STATUS = 'profileReducer/SET_PROFILE_STATUS';
const SET_PROFILE_PHOTO = 'profileReducer/SET_PROFILE_PHOTO';
const SET_PROFILE_CHANGES = 'profileReducer/SET_PROFILE_CHANGES';

type PostType = {
    id: string
    text: string
    likesCount: number
}
type ContactsType = {
    github: string
    vk: string
    facebook: string
    instagram: string
    twitter: string
    website: string
    youtube: string
    mainLink: string
}
type ProfileType = {
    userId: number | undefined
    lookingForAJob: boolean
    lookingForAJobDescription: string
    fullName: string
    contacts: ContactsType
    photos: PhotosType
}

const initialState = {
    posts: [
        { id: nanoid(), text: 'Hi', likesCount: 11 },
        { id: nanoid(), text: 'Howdy', likesCount: 2 },
        { id: nanoid(), text: 'Hello', likesCount: 5 },
        { id: nanoid(), text: 'Sup', likesCount: 32 },
        { id: nanoid(), text: 'Wasup', likesCount: 17 },
    ] as Array<PostType>,

    profilePage: null as ProfileType | null,

    profileStatus: '',
};

export type InitialStateType = typeof initialState

const profileReducer = (state = initialState, action: any): InitialStateType => {
    switch (action.type) {

        case ADD_POST: {
            return {
                ...state,
                posts:
                    [
                        ...state.posts,
                        {
                            id: nanoid(),
                            text: action.newPostMessage,
                            likesCount: 0
                        }
                    ],
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

        case SET_PROFILE_PHOTO: {
            return {
                ...state,
                profilePage: {
                    ...state.profilePage,
                    photos: action.photos,
                } as ProfileType,
            };
        }

        case SET_PROFILE_CHANGES: {
            return {
                ...state,
                profilePage: {
                    ...state.profilePage,
                    data: action.data,
                } as ProfileType,
            };
        }

        default: return state;
    }
};

type AddPostType = {
    type: typeof ADD_POST
    newPostMessage: string
}
export const addPost = (newPostMessage: string): AddPostType => ({ type: ADD_POST, newPostMessage })

type SetProfilePageType = {
    type: typeof SET_PROFILE_PAGE
    profilePage: ProfileType
}
export const setProfilePage = (profilePage: ProfileType): SetProfilePageType => ({ type: SET_PROFILE_PAGE, profilePage })

type SetProfileStatusType = {
    type: typeof SET_PROFILE_STATUS
    profileStatus: string
}
const setProfileStatus = (profileStatus: string): SetProfileStatusType => ({ type: SET_PROFILE_STATUS, profileStatus })

type SetProfilePhotoType = {
    type: typeof SET_PROFILE_PHOTO
    photos: PhotosType
}
const setProfilePhoto = (photos: PhotosType): SetProfilePhotoType => ({ type: SET_PROFILE_PHOTO, photos })

export const getProfilePage = (id: number) => async (dispatch: any) => {
    const data = await profileAPI.getCurUserProfile(id);
    dispatch(setProfilePage(data));
};

export const getProfileStatus = (id: number) => async (dispatch: any) => {
    const response = await profileAPI.getProfileStatus(id);
    dispatch(setProfileStatus(response.data));
};

export const updateProfileStatus = (profileStatus: string) => async (dispatch: any) => {
    const response = await profileAPI.updateProfileStatus(profileStatus);
    if (response.data.resultCode === 0) {
        dispatch(setProfileStatus(profileStatus));
    }
};

export const saveProfilePhoto = (photoFile: PhotosType) => async (dispatch: any) => {
    const response = await profileAPI.saveProfilePhoto(photoFile);
    if (response.data.resultCode === 0) {
        dispatch(setProfilePhoto(response.data.data.photos));
    }
};

export const saveProfileChanges = (formData: any, setStatus: any, setSubmitting: any) => async (dispatch: any, getState: any) => {
    const userId = getState().authReducer.id;
    const response = await profileAPI.saveProfileChanges(formData);
    if (response.data.resultCode === 0) {
        dispatch(getProfilePage(userId));
        setSubmitting(false);
    } else {
        setStatus(response.data.messages[0]);
        setSubmitting(false);
        return Promise.reject(response.data.messages[0]);
    }
};

export default profileReducer;