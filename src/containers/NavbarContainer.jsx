import React from 'react';
import { connect } from 'react-redux';

import Navbar from '../components/Navbar/Navbar';

const mapStateToProps = (state) => {
  return {
    isAuth: state.auth.isAuth,
    userId: state.auth.userId,
  };
};

export default connect(mapStateToProps)(Navbar);