import React from 'react';

import MessagesList from "./MessagesList";
import StoreContext from "../../../../StoreContext";

const MessagesListContainer = () => {
  return (
      <StoreContext.Consumer>
        {(store) => {
          const state = store.getState().dialogs;

          return <MessagesList items={state.items[0].messages} />;
        }}
      </StoreContext.Consumer>
  );
};

export default MessagesListContainer;