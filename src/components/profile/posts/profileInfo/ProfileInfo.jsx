import React from "react";
import s from './ProfileInfo.module.css';
import defaultLargeUserPhoto from '../../../../resources/images/defaultLargeUserPhoto.jpg';

const ProfileInfo = ({ profilePage }) => {
    return <div className={s.profileInfoAndPhoto}>
        <img
            className={s.largeProfilePhoto}
            alt='large profile avatar'
            src={profilePage.photos.large ? profilePage.photos.large : defaultLargeUserPhoto} />
        <div className={s.profileInfo}>
            Hey! <br />
            My name is {profilePage.fullName ? profilePage.fullName : 'none:)'} <br />
            Some info about me: {profilePage.aboutMe ? profilePage.aboutMe : 'none:)'} <br />
            Looking for a job description: {profilePage.lookingForAJob ? profilePage.lookingForAJobDescription : 'none:)'} <br />
            <br />
            My contacts:  <br />
            vk - {profilePage.contacts.vk ? profilePage.contacts.vk : 'none:)'} <br />
            facebook - {profilePage.contacts.facebook ? profilePage.contacts.facebook : 'none:)'} <br />
            instagram - {profilePage.contacts.instagram ? profilePage.contacts.instagram : 'none:)'} <br />
            github - {profilePage.contacts.github ? profilePage.contacts.github : 'none:)'} <br />

        </div>
    </div>;
};

export default ProfileInfo;