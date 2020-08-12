import React from "react";

import PostsList from "./PostsList";

const PostsListContainer = ({ store }) => {
  return (
      <PostsList posts={store.getState().profile.posts} />
  );
};

export default PostsListContainer;
