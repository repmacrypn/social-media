import React from "react";
import { NavLink } from "react-router-dom";
import s from './Header.module.css';

const Header = ({ login, logout, isAuth }) => {
    return (
        <header className={s.header}>
            {
                isAuth ?
                    <div className={s.logWrapper}>
                        <NavLink to={'/login'}><div>{login}</div></NavLink>
                        <div onClick={logout} className={s.logOutField}>Log out</div>
                    </div> :
                    <div className={s.logWrapper}>
                        <NavLink to={'/login'}><div>Sign Up</div></NavLink>
                    </div>
            }
        </header>
    );
};

export default Header;