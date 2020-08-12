import React from 'react';

import MessagesList from "./MessagesList";

const MessagesListContainer = ({ store }) => {
  const state = store.getState().dialogs;

  return (
      <MessagesList items={state.items[0].messages} />
  );
};

export default MessagesListContainer;