import React from "react";

import s from "./Posts.module.scss";
import AddPostInputContainer from "./AddPostInput/AddPostInputContainer";
import PostsListContainer from "./PostsList/PostsListContainer";

const Posts = ({ store }) => {
  return (
    <div className={s.posts}>
      <AddPostInputContainer store={store} />

      <PostsListContainer store={store} />
    </div>
  );
};

export default Posts;
