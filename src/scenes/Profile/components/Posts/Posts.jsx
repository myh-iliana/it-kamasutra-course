import React from "react";

import s from "./Posts.module.scss";
import AddPostInputContainer from "../../../../containers/Profile/AddPostInputContainer";
import PostsListContainer from "../../../../containers/Profile/PostsListContainer";

const Posts = () => {
  return (
    <div className={s.posts}>
      <AddPostInputContainer />

      <PostsListContainer />
    </div>
  );
};

export default Posts;
