import React from "react";
import User from "./User/User";
import s from './Users.module.css';
import { MainAbstract } from "../../profile/posts/profileInfo/userInfo/UserInfo";

const Users = ({ users }) => {
    return <div className={s.dialogUsers}>
        <DialogsMainAbstrWrapper text='Friends' />
        {
            users.map((obj, i) => {
                return <User key={obj.id} index={i} name={obj.name} />
            })
        }
    </div>;
};

export const DialogsMainAbstrWrapper = ({ text }) => {
    return <div className={s.mainAbsractWrapper}>
        <MainAbstract text={text} />
    </div>
};

export default Users;