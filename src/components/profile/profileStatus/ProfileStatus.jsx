import React, { useState, useEffect } from "react";

const ProfileStatus = React.memo(({ profileStatus, updateProfileStatus }) => {
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

    editMode ?
        elem = <input
            value={status ? status : ''}
            onChange={onChangeHandler}
            autoFocus={true}
            onBlur={deactivateStatusField} /> :
        elem = <span
            onClick={activateStatusField}>
            {profileStatus ? profileStatus : 'defaultStatus'}
        </span>;

    return <div>
        {elem}
    </div>;
});

export default ProfileStatus;