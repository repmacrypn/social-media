import React from "react";
import s from './FriendUser.module.css';
import UserAvatars from "./userAvatars/UserAvatars";
import UserGeneralInfo from "./userGeneralInfo/UserGeneralInfo";

const FriendUser = ({ friendState, setFollowingInProgressUserId,
    followingInProgressArray, follow, unfollow }) => {
    return <div className={s.friendUser}>
        <UserAvatars
            src={friendState.photos.small}
            id={friendState.id}
            followed={friendState.followed}
            setFollowingInProgressUserId={setFollowingInProgressUserId}
            followingInProgressArray={followingInProgressArray}
            follow={follow}
            unfollow={unfollow}
        />
        <UserGeneralInfo
            name={friendState.name}
            status={friendState.status}
        />
    </div>;
};

export default FriendUser;