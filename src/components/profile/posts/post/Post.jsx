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
            <div
                className={s.postText}>
                {text}
            </div>
        </div>
        <div className={s.likesField}> likes: {likesCount}</div>
    </div>;
};

export default Post;