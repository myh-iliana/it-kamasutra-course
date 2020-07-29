import React from "react";

import s from "./Posts.module.scss";
import Post from "./Post/Post";
import AddPostInput from "../AddPostInput/AddPostInput";

const Posts = ({ posts, dispatch }) => {
  return (
    <div className={s.posts}>
      <AddPostInput dispatch={dispatch} />

      {posts.map(({ likes, image }) => {
        return (
          <Post
            likes={likes}
            image={image}
          />
        );
      })}
    </div>
  );
};

export default Posts;
