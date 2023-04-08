import React from "react";
import s from './UserGeneralInfo.module.css';

const UserGeneralInfo = ({ name, status }) => {
    return <div className={s.userGeneralInfo}>
        <span className={s.userFullName}>{name}</span>
        <span className={s.userStatus}> {status}</span>
    </div>;
};

export default UserGeneralInfo;