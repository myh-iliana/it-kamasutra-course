import React from 'react';

import DialogsList from "./DialogsList";

const DialogsListContainer = ({ store }) => {
  const state = store.getState();

  return (
      <DialogsList items={state.dialogs.items} />
  );
};

export default DialogsListContainer;