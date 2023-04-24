import React from "react";
import { NavLink } from "react-router-dom";
import s from './User.module.css';

const User = ({ index, name }) => {
    return <div className={s.linkWrapper}>
        <NavLink
            className={({ isActive }) => `${isActive ? s.activeUser : s.nonActiveUser}`}
            to={`/messages/${index}`}>
            {name}
        </NavLink>
    </div>;
};

export default User;