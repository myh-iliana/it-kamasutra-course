import { connect } from 'react-redux';

import PostsList from './PostsList';

const mapStateToProps = (state) => {
  return {
    posts: state.profile.posts,
  };
};

const PostsListContainer = connect(mapStateToProps)(PostsList);

export default PostsListContainer;
