import React from "react";
import s from './UserAvatars.module.css';
import defaultSmallUserPhoto from '../../../../resources/images/defaultSmallUserPhoto.jpg';
import { NavLink } from 'react-router-dom';
import '../../../../common_styles/button.css';

const UserAvatars = ({ id, follow, unfollow, followed, src,
    setFollowingInProgressUserId, followingInProgressArray }) => {
    const handleClick = () => {
        setFollowingInProgressUserId(id, true);
        followed ? unfollow(id) : follow(id);
    };

    return <div className={s.userAvatars}>
        <NavLink to={`../profile/${id}`}>
            <img
                src={src ? src : defaultSmallUserPhoto}
                alt='User Avatar'
            />
        </NavLink>
        <button
            className="defaultWebsiteButton"
            disabled={followingInProgressArray.some(curId => curId === id)}
            onClick={handleClick}>
            {followed ? 'unfollow' : 'follow'}
        </button>
    </div>;
};

export default UserAvatars;