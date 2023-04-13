import React from "react";
import s from './UserInfo.module.css';

const UserInfo = ({ profilePage, isOwner, setEditMode }) => {
    const onEditUserInfoClick = (event) => {
        setEditMode(true);
    };

    return <div className={s.profileInfo}>
        <div>
            Profile Information:
        </div>
        <div>
            Nickname: {profilePage.fullName || 'none:)'}
        </div>
        <div>
            General info about me: {profilePage.aboutMe || 'none:)'}
        </div>
        <div>
            Info about the job i'm looking for:
            {profilePage.lookingForAJob ? profilePage.lookingForAJobDescription : 'none:)'}
        </div>
        <div className={s.contactsField}>
            My contacts: {Object.keys(profilePage.contacts).map((key, i) => {
                return <Contact key={i} contactTitle={key} contactValue={profilePage.contacts[key]} />;
            })}
        </div>
        {isOwner && <button onClick={onEditUserInfoClick}>Edit</button>}
    </div>;
};

const Contact = ({ contactTitle, contactValue }) => {
    return <div className={s.contact}>
        {contactTitle} - {contactValue || 'none:)'}
    </div>;
};

export default UserInfo;