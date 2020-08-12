import React from "react";

import AddPostInput from "./AddPostInput";
import { addPost } from "../../../../store/actions";
import StoreContext from "../../../../StoreContext";

const AddPostInputContainer = () => {
  return (
    <StoreContext.Consumer>
      {(store) => {
        const onPostAdd = (text, image) => {
          store.dispatch(addPost(text, image));
        };

        return <AddPostInput addPost={onPostAdd} />;
      }}
    </StoreContext.Consumer>
  );
};

export default AddPostInputContainer;
