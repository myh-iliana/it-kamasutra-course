import React from 'react';
import { connect } from 'react-redux';

import Login from './Login';
import { signIn } from '../../../store/actions/auth';

const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth,
  authUserId: state.auth.userId,
  captchaUrl: state.auth.captcha,
});

const mapDispatchToProps = { signIn };

export default connect(mapStateToProps, mapDispatchToProps)(Login);
