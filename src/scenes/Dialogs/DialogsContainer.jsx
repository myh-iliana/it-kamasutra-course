import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';

import Dialogs from './Dialogs';
import { withPrivateRoute } from '../../hoc/withPrivateRoute';
import { addMessage } from '../../store/actions/dialogs';

const mapDispatchToProps = { sendMessage: addMessage };

export default compose(
  connect(null, mapDispatchToProps),
  withPrivateRoute,
)(Dialogs);