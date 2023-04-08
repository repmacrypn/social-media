import React from "react";
import s from './Navbar.module.css';
import NavItem from "./navItem/NavItem";

const Navbar = () => {
    return <div className={s.navbar}>
        <nav>
            <ul className={s.list}>
                <NavItem page='Profile' urlName='profile' />
                <NavItem page='Messages' urlName='messages' />
                <NavItem page='News' urlName='news' />
                <NavItem page='Music' urlName='music' />
                <NavItem page='Settings' urlName='settings' />
                <NavItem page='Find friends' urlName='searchForFriends' />
            </ul>
        </nav>
    </div >;
};

export default Navbar;