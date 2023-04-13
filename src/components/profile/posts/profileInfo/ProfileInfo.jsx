import React, { useState } from "react";
import s from './ProfileInfo.module.css';
import defaultLargeUserPhoto from '../../../../resources/images/defaultLargeUserPhoto.jpg';
import UserInfo from "./userInfo/UserInfo";
import UserInfoForm from "./userInfoForm/UserInfoForm";

const ProfileInfo = ({ profilePage, isOwner, saveProfilePhoto, saveProfileChanges }) => {
    const [editMode, setEditMode] = useState(false);

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
        {
            editMode ?
                <UserInfoForm
                    saveProfileChanges={saveProfileChanges}
                    setEditMode={setEditMode}
                    profilePage={profilePage}
                /> :
                <UserInfo
                    setEditMode={setEditMode}
                    profilePage={profilePage}
                    isOwner={isOwner}
                />
        }
    </div>;
};

export default ProfileInfo;