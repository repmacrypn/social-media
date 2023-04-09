import React from "react";
import s from './ProfileInfo.module.css';
import defaultLargeUserPhoto from '../../../../resources/images/defaultLargeUserPhoto.jpg';
import UserInfo from "./userInfo/UserInfo";

const ProfileInfo = ({ profilePage, isOwner, saveProfilePhoto }) => {
    const onProfilePhotoChange = (event) => {
        if (event.target.files.length) {
            saveProfilePhoto(event.target.files[0]);
        }
    };

    return <div className={s.profileInfoAndPhoto}>
        <img
            className={s.largeProfilePhoto}
            alt='large profile avatar'
            src={profilePage.photos.large ? profilePage.photos.large : defaultLargeUserPhoto} />
        {
            isOwner &&
            <input
                type='file'
                onChange={onProfilePhotoChange} />
        }
        <UserInfo profilePage={profilePage} />
    </div>;
};

export default ProfileInfo;