import React from "react";
import Preloader from "../common components/preloader/Preloader";
import PostsContainer from "./posts/PostsContainer";
import ProfileInfo from "./posts/profileInfo/ProfileInfo";
import s from './Profile.module.css';
import ProfileStatus from "./profileStatus/ProfileStatus";

const Profile = ({ profilePage, profileStatus, updateProfileStatus, saveProfilePhoto, isOwner, saveProfileChanges }) => {
    if (!profilePage) {
        return <Preloader />;
    }
    return <main className={s.content}>
        <ProfileStatus
            profileStatus={profileStatus}
            updateProfileStatus={updateProfileStatus}
        />
        <ProfileInfo
            saveProfileChanges={saveProfileChanges}
            isOwner={isOwner}
            saveProfilePhoto={saveProfilePhoto}
            profilePage={profilePage}
        />
        <PostsContainer smallProfilePhoto={profilePage.photos.small} />
    </main>;
};

export default Profile;