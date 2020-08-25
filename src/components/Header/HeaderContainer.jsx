import React, { useEffect } from 'react';
import { connect } from "react-redux";
import * as axios from "axios";

import Header from "./Header";
import {setAuthUser, setAuthUserData} from "../../store/actions";

const HeaderContainer = ({ setAuthUserData, setAuthUser, isLogin, login, user }) => {
  useEffect(() => {
    axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
      withCredentials: true,
    })
        .then(res => {
          if (res.data.resultCode === 0) {
            const { id, login, email } = res.data.data;
            setAuthUserData(id, email, login);
            axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${id}`)
                .then(res => setAuthUser(res.data));
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