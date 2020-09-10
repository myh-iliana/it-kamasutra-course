import React from 'react';
import { generatePath, Redirect } from 'react-router-dom';

import s from './Login.module.scss';
import LoginReduxForm from './components/LoginForm/LoginForm';
import { routes } from '../../routes';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSmile } from '@fortawesome/free-solid-svg-icons';

const Login = ({ signIn, isAuth, authUserId, captchaUrl }) => {
  const onSubmit = ({ email, password, rememberMe, captcha }) => {
    signIn(email, password, rememberMe, captcha);
  };

  if (isAuth) {
    const pathToAuthUserProfile = generatePath(routes.profile, { userId: authUserId });
    return <Redirect to={pathToAuthUserProfile} />
  }

  return (
    <div className={s.container}>
      <h1>
        <FontAwesomeIcon icon={faSmile} /> Fluffs
      </h1>
      <h3>Please sign in</h3>
      <LoginReduxForm onSubmit={onSubmit} captchaUrl={captchaUrl} />
    </div>
  );
};

export default Login;
