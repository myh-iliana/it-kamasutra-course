import React from 'react';
import { connect } from "react-redux";

import MessagesList from "../../scenes/Dialogs/components/RightPanel/MessagesList/MessagesList";

const mapStateToProps = (state) => {
  return {
    messages: state.dialogs.chats[0].messages,
  };
};

const MessagesListContainer = connect(mapStateToProps)(MessagesList);

export default MessagesListContainer;