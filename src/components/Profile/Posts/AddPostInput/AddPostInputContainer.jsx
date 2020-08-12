import React from "react";
import { connect } from "react-redux";

import AddPostInput from "./AddPostInput";
import { addPost } from "../../../../store/actions";

const mapDispatchToProps = (dispatch) => {
  return {
    addPost: (text, image) => dispatch(addPost(text, image)),
  };
};

const AddPostInputContainer = connect(null, mapDispatchToProps)(AddPostInput);

export default AddPostInputContainer;
