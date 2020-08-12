import React from "react";

import PostsList from "./PostsList";
import StoreContext from "../../../../StoreContext";

const PostsListContainer = () => {
  return (
      <StoreContext.Consumer>
        {(store) => {
          return <PostsList posts={store.getState().profile.posts} />;
        }}
      </StoreContext.Consumer>
  );
};

export default PostsListContainer;
