import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import * as Api from 'src/api';
import Header from './Header';
import { setAuthUser, setAuthUserData } from '../../store/actions';

const HeaderContainer = ({ setAuthUserData, setAuthUser, isLogin, login, user }) => {
  useEffect(() => {
    Api.Auth.signIn().then((data) => {
      if (data.resultCode === 0) {
        const { id, login, email } = data.data;
        setAuthUserData(id, email, login);
        Api.Users.getById(id).then((data) => setAuthUser(data));
      }
    });
  }, []);

  return <Header login={login} isLogin={isLogin} avatar={user && user.photos.small} />;
};

const mapStateToProps = (state) => {
  return {
    isLogin: state.auth.isLogin,
    login: state.auth.login,
    user: state.auth.user,
  };
};

const mapDispatchToProps = { setAuthUserData, setAuthUser };

export default connect(mapStateToProps, mapDispatchToProps)(HeaderContainer);
