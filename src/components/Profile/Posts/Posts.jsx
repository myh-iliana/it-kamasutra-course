import React from "react";

import s from "./Posts.module.scss";
import AddPostInputContainer from "./AddPostInput/AddPostInputContainer";
import PostsListContainer from "./PostsList/PostsListContainer";

const Posts = () => {
  return (
    <div className={s.posts}>
      <AddPostInputContainer />

      <PostsListContainer />
    </div>
  );
};

export default Posts;
