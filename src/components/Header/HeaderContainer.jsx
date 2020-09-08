import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import Header from './Header';
import { signIn } from '../../store/actions';

const HeaderContainer = ({ signIn, user, ...rest }) => {
  useEffect(() => {
    signIn();
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

const mapDispatchToProps = { signIn };

export default connect(mapStateToProps, mapDispatchToProps)(HeaderContainer);
