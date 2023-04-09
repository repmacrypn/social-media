import React from "react";
import s from './UserInfo.module.css';

const UserInfo = ({ profilePage }) => {
    return <div className={s.profileInfo}>
        <div>
            Hey!
        </div>
        <div>
            My name is {profilePage.fullName ? profilePage.fullName : 'none:)'}
        </div>
        <div>
            Some info about me: {profilePage.aboutMe ? profilePage.aboutMe : 'none:)'}
        </div>
        <div>
            Looking for a job description:
            {profilePage.lookingForAJob ? profilePage.lookingForAJobDescription : 'none:)'}
        </div>
        <div className={s.contactsField}>
            My contacts: {Object.keys(profilePage.contacts).map(key => {
                return <Contact contactTitle={key} contactValue={profilePage.contacts[key]} />;
            })}
        </div>
    </div>
};

const Contact = ({ contactTitle, contactValue }) => {
    return <div className={s.contact}>
        {contactTitle} - {contactValue || 'none:)'}
    </div>;
};

export default UserInfo;