import React from "react";
import s from './UserInfo.module.css';
import '../../../../../common_styles/button.css';

const UserInfo = ({ profilePage, isOwner, setEditMode }) => {
    const onEditUserInfoClick = () => {
        setEditMode(true);
    };

    return <div className={s.profileInfo}>
        <div className={s.mainAbstract}>
            Profile Information:
        </div>
        <ProfileInfoList
            text='Nickname:'
            listValue={profilePage.fullName || 'none:)'}
        />
        <ProfileInfoList
            text='General info about me:'
            listValue={profilePage.aboutMe || 'none:)'}
        />
        <ProfileInfoList
            text="Info about the job i'm looking for:"
            listValue={profilePage.lookingForAJob ? profilePage.lookingForAJobDescription : 'none:)'}
        />
        <ProfileInfoList
            text="My contacts:"
            listValue={
                Object.keys(profilePage.contacts).map((key, i) => {
                    return <Contact key={i} contactTitle={key} contactValue={profilePage.contacts[key]} />;
                })
            }
        />
        {isOwner && <button
            onClick={onEditUserInfoClick}
            className="defaultWebsitebutton"
        >Edit</button>}
    </div>;
};

const Contact = ({ contactTitle, contactValue }) => {
    return <div className={s.contact}>
        {contactTitle} - {contactValue || 'none:)'}
    </div>;
};

const ProfileInfoList = ({ text, listValue }) => {
    return <div className={s.profileInfoList}>
        <span className={s.title}>{text} </span>{listValue}
    </div>
};

export default UserInfo;