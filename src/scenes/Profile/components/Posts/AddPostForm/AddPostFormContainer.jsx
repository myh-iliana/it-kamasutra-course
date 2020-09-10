import React from "react";
import { connect } from "react-redux";

import AddPostReduxForm from "./AddPostForm";
import { addPost } from "../../../../../store/actions/profile";

const mapDispatchToProps = { addPost };

const AddPostFormContainer = connect(null, mapDispatchToProps)(AddPostReduxForm);

export default AddPostFormContainer;
