import React from 'react';
import { connect } from "react-redux";

import DialogsList from "../../scenes/Dialogs/components/LeftPanel/DialogsList/DialogsList";

const mapStateToProps = (state) => {
  return {
    dialogs: state.dialogs.chats,
  };
};

const DialogsListContainer = connect(mapStateToProps)(DialogsList);

export default DialogsListContainer;