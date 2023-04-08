import { usersAPI } from "../api/api";

const FOLLOW_BUTTON = 'sffR/FOLLOW_BUTTON';
const SET_USERS = 'sffR/SET_USERS';
const SET_CURRENT_PAGE = 'sffR/SET_CURRENT_PAGE';
const SET_TOTAL_COUNT = 'sffR/SET_TOTAL_COUNT';
const SET_PRELOADER = 'sffR/SET_PRELOADER';
const SET_FOLLOWING_IN_PROGRESS_USER_ID = 'sffR/SET_FOLLOWING_IN_PROGRESS_USERS_ID';

const initialState = {
    friends: [],
    count: 5,
    totalCount: 0,
    currentPage: 1,
    isFetching: false,
    followingInProgressArray: [],
};

const searchForFriendsReducer = (state = initialState, action) => {
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
};

const handleFollowClick = (curId) => ({ type: FOLLOW_BUTTON, curId, });
const setUsers = (users) => ({ type: SET_USERS, users, });
const setCurrentPage = (currentPage) => ({ type: SET_CURRENT_PAGE, currentPage, });
const setTotalCount = (totalCount) => ({ type: SET_TOTAL_COUNT, totalCount, });
const setPreloader = (isFetching) => ({ type: SET_PRELOADER, isFetching, });
export const setFollowingInProgressUserId = (id, isFetching) => ({ type: SET_FOLLOWING_IN_PROGRESS_USER_ID, id, isFetching, });

export const getUsersOnPageChange = (count, pageNumber) => async (dispatch) => {
    dispatch(setPreloader(true));
    dispatch(setCurrentPage(pageNumber));

    const data = await usersAPI.getCurUsers(count, pageNumber);
    dispatch(setUsers(data.items));
    dispatch(setPreloader(false));
};

export const getUsersOnPageLoad = (count, currentPage) => async (dispatch) => {
    dispatch(setPreloader(true));

    const data = await usersAPI.getCurUsers(count, currentPage);
    dispatch(setTotalCount(data.totalCount));
    dispatch(setUsers(data.items));
    dispatch(setPreloader(false));
};

export const follow = (id) => async (dispatch) => {
    const data = await usersAPI.processFollowing(id)
    if (data.resultCode === 0) {
        dispatch(handleFollowClick(id));
    }
    dispatch(setFollowingInProgressUserId(id, false));
};

export const unfollow = (id) => async (dispatch) => {
    const data = await usersAPI.processUnfollowing(id);
    if (data.resultCode === 0) {
        dispatch(handleFollowClick(id));
    }
    dispatch(setFollowingInProgressUserId(id, false));
};

export default searchForFriendsReducer;
