import React from "react";
import FriendUser from "./friendUser/FriendUser";
import s from './SearchForFriends.module.css';
import Preloader from "../common components/preloader/Preloader";
import { processPaginatorData } from "../../utilites/paginatorLogic";

function SearchForFriends({ isFetching, currentPage,
    changeCurrentPageOnClick, follow, unfollow, friends,
    setFollowingInProgressUserId, followingInProgressArray,
    totalCount, count }) {

    if (isFetching) {
        return <Preloader />;
    }

    return (
        <div className={s.SFFPageWrapper}>
            <h2>Users</h2>
            <div>
                {
                    processPaginatorData(totalCount, count, currentPage).map(pageN => {
                        return <span
                            className={pageN === currentPage ? s.selectedButton : ''}
                            key={pageN}
                            onClick={() => changeCurrentPageOnClick(pageN)}>
                            {pageN}
                        </span>;
                    })
                }
                {
                    friends.map((obj) => {
                        return <FriendUser
                            key={obj.id}
                            id={obj.id}
                            friendState={obj}
                            setFollowingInProgressUserId={setFollowingInProgressUserId}
                            followingInProgressArray={followingInProgressArray}
                            follow={follow}
                            unfollow={unfollow}
                        />;
                    })
                }
            </div>
        </div>
    );
}

export default SearchForFriends;