import React from "react";
import FriendUser from "./friendUser/FriendUser";
import s from './SearchForFriends.module.css';
import Preloader from "../common components/preloader/Preloader";
import { processPaginatorData } from "../../utilites/paginatorLogic";
import { MainAbstract } from '../profile/posts/profileInfo/userInfo/UserInfo';

function SearchForFriends({ isFetching, currentPage,
    changeCurrentPageOnClick, follow, unfollow, friends,
    setFollowingInProgressUserId, followingInProgressArray,
    totalCount, count }) {

    if (isFetching) {
        return <Preloader />;
    }

    return (
        <div className={s.SFFPageWrapper}>
            <MainAbstract text='Find Friends' />
            <div>
                <PaginatorButtons
                    totalCount={totalCount}
                    count={count}
                    currentPage={currentPage}
                    changeCurrentPageOnClick={changeCurrentPageOnClick}
                />
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

const PaginatorButtons = ({ totalCount, count, currentPage, changeCurrentPageOnClick }) => {
    return <div className={s.paginatorButtonWrapper}>
        {
            processPaginatorData(totalCount, count, currentPage).map(pageN => {
                return <span
                    className={pageN === currentPage ?
                        s.selectedPaginatorButton : s.paginatorButton}
                    key={pageN}
                    onClick={() => changeCurrentPageOnClick(pageN)}>
                    {pageN}
                </span>;
            })
        }
    </div>;
};

export default SearchForFriends;