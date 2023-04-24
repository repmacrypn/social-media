import React from "react";
import s from './UserGeneralInfo.module.css';

const UserGeneralInfo = React.memo(({ name, status }) => {
    return <div className={s.userGeneralInfo}>
        <div className={s.userNameWrapper}>
            <span className={s.userName}>nickname: </span>
            <span>{name}</span>
        </div>
        <div className={s.userStatusWrapper}>
            <span className={s.userStatus}>Status: </span>
            <span>{status || 'none for now:)'}</span>
        </div>
    </div>;
});

export default UserGeneralInfo;