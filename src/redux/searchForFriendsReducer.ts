import { usersAPI } from "../api/api";
import { PhotosType } from "../types/types";

const FOLLOW_BUTTON = 'sffR/FOLLOW_BUTTON';
const SET_USERS = 'sffR/SET_USERS';
const SET_CURRENT_PAGE = 'sffR/SET_CURRENT_PAGE';
const SET_TOTAL_COUNT = 'sffR/SET_TOTAL_COUNT';
const SET_PRELOADER = 'sffR/SET_PRELOADER';
const SET_FOLLOWING_IN_PROGRESS_USER_ID = 'sffR/SET_FOLLOWING_IN_PROGRESS_USERS_ID';

type FriendType = {
    name: string
    id: number
    photos: PhotosType
    status: string | null
    followed: boolean
}

const initialState = {
    friends: [] as Array<FriendType>,
    count: 5,
    totalCount: 0,
    currentPage: 1,
    isFetching: false,
    followingInProgressArray: [] as Array<number>,
}

export type InitialStateType = typeof initialState

const searchForFriendsReducer = (state = initialState, action: any): InitialStateType => {
    switch (action.type) {
        case FOLLOW_BUTTON: {
            return {
                ...state,
                friends: state.friends.map(obj => obj.id === action.curId ?
                    { ...obj, followed: !obj.followed } : obj),
            };
        }

        case SET_USERS: {
            return {
                ...state,
                friends: [...action.users],
            };
        }

        case SET_CURRENT_PAGE: {
            return {
                ...state,
                currentPage: action.currentPage
            };
        }

        case SET_TOTAL_COUNT: {
            return {
                ...state,
                totalCount: action.totalCount
            };
        }

        case SET_PRELOADER: {
            return {
                ...state,
                isFetching: action.isFetching,
            };
        }

        case SET_FOLLOWING_IN_PROGRESS_USER_ID: {
            return {
                ...state,
                followingInProgressArray: action.isFetching ?
                    [...state.followingInProgressArray, action.id] :
                    state.followingInProgressArray.filter(id => id !== action.id)
            };
        }

        default: return state;
    }
}

type HandleFollowClickType = {
    type: typeof FOLLOW_BUTTON
    curId: number
}
const handleFollowClick = (curId: number): HandleFollowClickType => ({ type: FOLLOW_BUTTON, curId })

type SetUsersType = {
    type: typeof SET_USERS
    users: Array<FriendType>
}
const setUsers = (users: Array<FriendType>): SetUsersType => ({ type: SET_USERS, users })

type SetCurrentPageType = {
    type: typeof SET_CURRENT_PAGE
    currentPage: number
}
const setCurrentPage = (currentPage: number): SetCurrentPageType => ({ type: SET_CURRENT_PAGE, currentPage })

type SetTotalCountType = {
    type: typeof SET_TOTAL_COUNT
    totalCount: number
}
const setTotalCount = (totalCount: number): SetTotalCountType => ({ type: SET_TOTAL_COUNT, totalCount })

export type SetPreloaderType = {
    type: typeof SET_PRELOADER
    isFetching: boolean
}
const setPreloader = (isFetching: boolean): SetPreloaderType => ({ type: SET_PRELOADER, isFetching })

export type SetFollowingInProgressUserIdType = {
    type: typeof SET_FOLLOWING_IN_PROGRESS_USER_ID
    isFetching: boolean
    id: number
}
export const setFollowingInProgressUserId = (id: number, isFetching: boolean): SetFollowingInProgressUserIdType =>
    ({ type: SET_FOLLOWING_IN_PROGRESS_USER_ID, id, isFetching })

export const getUsersOnPageChange = (count: number, pageNumber: number) => async (dispatch: any) => {
    dispatch(setPreloader(true));
    dispatch(setCurrentPage(pageNumber));

    const data = await usersAPI.getCurUsers(count, pageNumber);
    dispatch(setUsers(data.items));
    dispatch(setPreloader(false));
};

export const getUsersOnPageLoad = (count: number, currentPage: number) => async (dispatch: any) => {
    dispatch(setPreloader(true));

    const data = await usersAPI.getCurUsers(count, currentPage);
    dispatch(setTotalCount(data.totalCount));
    dispatch(setUsers(data.items));
    dispatch(setPreloader(false));
};

export const follow = (id: number) => async (dispatch: any) => {
    const data = await usersAPI.processFollowing(id)
    if (data.resultCode === 0) {
        dispatch(handleFollowClick(id));
    }
    dispatch(setFollowingInProgressUserId(id, false));
};

export const unfollow = (id: number) => async (dispatch: any) => {
    const data = await usersAPI.processUnfollowing(id);
    if (data.resultCode === 0) {
        dispatch(handleFollowClick(id));
    }
    dispatch(setFollowingInProgressUserId(id, false));
};

export default searchForFriendsReducer;
