import React from "react";
import s from './Post.module.css';
import defaultSmallUserPhoto from '../../../../resources/images/defaultSmallUserPhoto.jpeg';

const Post = ({ smallProfilePhoto, likesCount, text }) => {
    return <div className={s.postWrapper}>
        <div>
            <img
                src={smallProfilePhoto ? smallProfilePhoto : defaultSmallUserPhoto}
                alt='profile avatar'
                className={s.avatar} />
            <span className={s.postText}>{text} </span>
        </div>
        <div className={s.likesItem}> likes: {likesCount}</div>
    </div>;
};

export default Post;