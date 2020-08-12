import React from 'react';

import AddMessageInput from "./AddMessageInput";

import { addMessage } from "../../../../store/actions";

const AddMessageInputContainer = ({ store }) => {
  const state = store.getState();

  const onMessageSend = (ownerId, text) => {
    store.dispatch(addMessage(ownerId, text));
  };

  return (
      <AddMessageInput sendMessage={onMessageSend} />
  );
};

export default AddMessageInputContainer;