import React from "react";

import Post from "../Post/Post";

import s from "./PostsList.module.scss";

const PostsList = ({ posts }) => {
  return (
    <React.Fragment>
      {posts.map(({ likes, image }) => {
        return (
          <Post
            likes={likes}
            image={image}
          />
        );
      })}
    </React.Fragment>
  );
};

export default PostsList;
