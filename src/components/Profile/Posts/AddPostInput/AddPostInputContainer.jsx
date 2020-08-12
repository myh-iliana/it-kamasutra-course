import React from 'react';

import { addPost } from "../../../../store/actions";
import AddPostInput from "./AddPostInput";


const AddPostInputContainer = ({ store }) => {
  const onPostAdd = (text, image) => {
    store.dispatch(addPost(text, image));
  };

  return (
      <AddPostInput addPost={onPostAdd} />
  );
};

export default AddPostInputContainer;