import { createSelector } from 'reselect';

const getFriendsSelector = (state) => state.searchForFriendsReducer.friends;
export const getFriends = createSelector(getFriendsSelector, (friends) => friends.filter(() => true));

export const getPageCount = (state) => state.searchForFriendsReducer.count;
export const getTotalCount = (state) => state.searchForFriendsReducer.totalCount;
export const getCurrentPage = (state) => state.searchForFriendsReducer.currentPage;
export const getIsFetchingState = (state) => state.searchForFriendsReducer.isFetching;
export const getFollowingInProgressArray = (state) => state.searchForFriendsReducer.followingInProgressArray;

