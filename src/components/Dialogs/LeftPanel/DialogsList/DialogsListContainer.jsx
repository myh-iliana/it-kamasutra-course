import React from 'react';

import DialogsList from "./DialogsList";
import StoreContext from "../../../../StoreContext";

const DialogsListContainer = () => {
  return (
      <StoreContext.Consumer>
        {(store) => {
          const state = store.getState();

          return <DialogsList items={state.dialogs.items} />;
        }}
      </StoreContext.Consumer>
  );
};

export default DialogsListContainer;