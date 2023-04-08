import React from "react";
import { NavLink } from "react-router-dom";
import s from './Header.module.css';

const Header = ({ login, logout, isAuth }) => {
    return (
        <header className={s.header}>
            <h1>Gholder</h1>
            <img src='' alt='' className='' />
            <div className={s.userLoginField}>
                {
                    isAuth ?
                        <div>
                            <NavLink to={'/login'}><div>{login}</div></NavLink>
                            <div onClick={logout} className={s.logOutField}>Log out</div>
                        </div> :
                        <NavLink to={'/login'}><div>Sign Up</div></NavLink>
                }
            </div>
        </header>
    );
};

export default Header;