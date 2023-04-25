import React, { useState, useEffect } from "react";
import '../../../common_styles/input.css';
import s from './ProfileStatus.module.css';

const ProfileStatus = React.memo(({ profileStatus, updateProfileStatus, isOwner }) => {
    const [editMode, setEditMode] = useState(false);
    const [status, setProfileStatus] = useState(profileStatus);

    useEffect(() => setProfileStatus(profileStatus), [profileStatus]);

    const deactivateStatusField = () => {
        setEditMode(false);
        updateProfileStatus(status);
    };

    const activateStatusField = () => {
        setEditMode(true);
    };

    const onChangeHandler = (event) => {
        setProfileStatus(event.target.value);
    };

    let elem;

    editMode && isOwner ?
        elem = <input
            value={status ? status : ''}
            onChange={onChangeHandler}
            autoFocus={true}
            onBlur={deactivateStatusField}
            className="inputField"
            maxLength={30}
        /> :
        elem = <span
            className={s.profileStatus}
            onClick={activateStatusField}>
            {profileStatus ? profileStatus : 'defaultStatus'}
        </span>;

    return <>
        <span className={s.status}>Status: </span>{elem}
    </>;
});

export default ProfileStatus;