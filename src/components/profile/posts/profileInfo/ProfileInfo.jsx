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
        <div className={s.imageField}>
            <img
                className={s.largeProfilePhoto}
                alt='large profile avatar'
                src={profilePage.photos.large ? profilePage.photos.large : defaultLargeUserPhoto}
            />
            {
                isOwner && <InputWrapper onProfilePhotoChange={onProfilePhotoChange} />
            }
        </div>
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

const InputWrapper = ({ onProfilePhotoChange }) => {
    return <div className={s.inputWrapper}>
        <label className={s.inputFile}>
            <input
                type='file'
                onChange={onProfilePhotoChange}
            />
            <span>Update photo</span>
        </label>
    </div>;
};

export default ProfileInfo;