import React from "react";
import { connect } from "react-redux";

import AddMessageInput from "../../scenes/Dialogs/components/RightPanel/AddMessageInput/AddMessageInput";
import { addMessage } from "../../store/actions";

const mapDispatchToProps = { sendMessage: addMessage };

const AddMessageInputContainer = connect(null, mapDispatchToProps)(AddMessageInput);

export default AddMessageInputContainer;
