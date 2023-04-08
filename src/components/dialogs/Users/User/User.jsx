import React from "react";
import { NavLink } from "react-router-dom";
import s from './User.module.css';

const User = ({ index, name }) => {
    return <div className={s.item}>
        <NavLink
            className={({ isActive }) => `${isActive ? s.active : s.nonActive}`}
            to={`/messages/${index}`}>
            {name}
        </NavLink>
    </div>;
};

export default User;