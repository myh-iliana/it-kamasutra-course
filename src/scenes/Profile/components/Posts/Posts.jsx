import React from "react";

import s from "./Posts.module.scss";
import AddPostFormContainer from "./AddPostForm/AddPostFormContainer";
import PostsListContainer from "./PostsList/PostsListContainer";

const Posts = () => {
  return (
    <div className={s.posts}>
      <AddPostFormContainer />

      <PostsListContainer />
    </div>
  );
};

export default Posts;
