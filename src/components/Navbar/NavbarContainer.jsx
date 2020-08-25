import React from 'react';
import { connect } from 'react-redux';

import Navbar from './Navbar';

const mapStateToProps = (state) => {
  return {
    isLogin: state.auth.isLogin,
    userId: state.auth.userId,
  };
};

export default connect(mapStateToProps)(Navbar);