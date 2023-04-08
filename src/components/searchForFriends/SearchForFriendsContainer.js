import React from 'react';
import { connect } from 'react-redux';
import {
    setFollowingInProgressUserId,
    getUsersOnPageChange, getUsersOnPageLoad,
    follow, unfollow
} from '../../redux/searchForFriendsReducer';
import {
    getCurrentPage, getFollowingInProgressArray,
    getFriends, getIsFetchingState, getPageCount,
    getTotalCount
} from '../../redux/usersSelectors';
import SearchForFriends from "./SearchForFriends";

class SearchForFriendsContainer extends React.Component {

    changeCurrentPageOnClick = (pageNumber) => {
        this.props.getUsersOnPageChange(this.props.count, pageNumber);
    }

    componentDidMount() {
        this.props.getUsersOnPageLoad(this.props.count, this.props.currentPage);
    }

    render() {
        return <SearchForFriends
            friends={this.props.friends}
            totalCount={this.props.totalCount}
            count={this.props.count}
            currentPage={this.props.currentPage}
            changeCurrentPageOnClick={this.changeCurrentPageOnClick}
            isFetching={this.props.isFetching}
            setFollowingInProgressUserId={this.props.setFollowingInProgressUserId}
            followingInProgressArray={this.props.followingInProgressArray}
            follow={this.props.follow}
            unfollow={this.props.unfollow}
        />;
    }
}

const mapStateToProps = (state) => {
    return {
        friends: getFriends(state),
        count: getPageCount(state),
        totalCount: getTotalCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetchingState(state),
        followingInProgressArray: getFollowingInProgressArray(state),
    };
};

export default connect(mapStateToProps,
    {
        setFollowingInProgressUserId,
        getUsersOnPageChange, getUsersOnPageLoad,
        follow, unfollow,
    })(SearchForFriendsContainer);