import React from "react";
import { NavLink } from "react-router-dom";
import s from './NavItem.module.css';

const NavItem = ({ urlName, page }) => {
    return <li>
        <NavLink
            className={({ isActive }) => `${isActive ? s.active : s.nonActive}`}
            to={`/${urlName}`}>
            {page}
        </NavLink>
    </li>;
};

export default NavItem;