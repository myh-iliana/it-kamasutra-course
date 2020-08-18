import React from "react";
import { connect } from "react-redux";

import AddPostInput from "./AddPostInput";
import { addPost } from "../../../../../store/actions";

const mapDispatchToProps = { addPost };

const AddPostInputContainer = connect(null, mapDispatchToProps)(AddPostInput);

export default AddPostInputContainer;
