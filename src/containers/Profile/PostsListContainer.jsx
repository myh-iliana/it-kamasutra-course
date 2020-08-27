import React from "react";
import { connect } from "react-redux";

import PostsList from "../../scenes/Profile/components/Posts/PostsList/PostsList";

const mapStateToProps = (state) => {
  return {
    posts: state.profile.posts,
  };
};

const PostsListContainer = connect(mapStateToProps)(PostsList);

export default PostsListContainer;
