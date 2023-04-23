import React from "react";
import s from './Posts.module.css'
import Post from "./post/Post";
import { AddPostForm } from "./addPostForm/AddPostForm";

const Posts = ({ addPost, posts, smallProfilePhoto }) => {
    return <div className={s.posts}>
        <div className={s.myPostsAbstract}>
            My posts
        </div>
        <AddPostForm addPost={addPost} />
        {
            posts.map((obj, i) => {
                return <Post
                    key={obj.id}
                    smallProfilePhoto={smallProfilePhoto}
                    text={obj.text}
                    likesCount={posts[i].likesCount}
                />
            })
        }
    </div>;
};

export default Posts;