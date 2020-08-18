import React from "react";
import { connect } from "react-redux";

import AddMessageInput from "./AddMessageInput";
import { addMessage } from "../../../../../store/actions";

const mapDispatchToProps = (dispatch) => {
  return {
    sendMessage: (chatId, ownerId, text) => dispatch(addMessage(chatId, ownerId, text)),
  };
};

const AddMessageInputContainer = connect(null, mapDispatchToProps)(AddMessageInput);

export default AddMessageInputContainer;
