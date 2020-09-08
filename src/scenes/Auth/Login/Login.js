import React from 'react';

import s from './Login.module.scss';
import LoginReduxForm from './components/LoginForm/LoginForm';

const Login = () => {
  const onSubmit = (data) => { console.log(data) };

  return (
    <div>
      <h1>LOGIN</h1>

      <LoginReduxForm onSubmit={onSubmit} />
    </div>
  );
};

export default Login;
