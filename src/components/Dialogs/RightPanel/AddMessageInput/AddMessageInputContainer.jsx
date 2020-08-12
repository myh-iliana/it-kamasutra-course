import React from 'react';

import AddMessageInput from "./AddMessageInput";

import { addMessage } from "../../../../store/actions";
import StoreContext from "../../../../StoreContext";

const AddMessageInputContainer = () => {

  return (
      <StoreContext.Consumer>
        {(store) => {
          const onMessageSend = (ownerId, text) => {
            store.dispatch(addMessage(ownerId, text));
          };

          return <AddMessageInput sendMessage={onMessageSend} />;
        }}
      </StoreContext.Consumer>
  );
};

export default AddMessageInputContainer;