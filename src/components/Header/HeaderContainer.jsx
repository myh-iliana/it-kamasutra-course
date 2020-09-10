import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import Header from './Header';
import { login, signOut } from '../../store/actions/auth';

const HeaderContainer = ({ login, user, ...rest }) => {
  useEffect(() => {
    login();
  }, []);

  return <Header avatar={user && user.photos.small} {...rest} />;
};

const mapStateToProps = (state) => {
  return {
    isAuth: state.auth.isAuth,
    login: state.auth.login,
    user: state.auth.user,
  };
};

const mapDispatchToProps = { login, signOut };

export default connect(mapStateToProps, mapDispatchToProps)(HeaderContainer);
