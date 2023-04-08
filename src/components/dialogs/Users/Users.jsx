import React from "react";
import User from "./User/User";
import s from './Users.module.css';

const Users = ({ users }) => {
    return <div className={s.dialogItems}>
        {
            users.map((obj, i) => {
                return <User key={obj.id} index={i} name={obj.name} />
            })
        }
    </div>;
};

export default Users;