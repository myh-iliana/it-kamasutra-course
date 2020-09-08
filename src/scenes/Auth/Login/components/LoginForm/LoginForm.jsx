import React from 'react';
import { Field, reduxForm } from 'redux-form';

import s from './LoginForm.module.scss';

const LoginForm = ({ handleSubmit }) => {
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <Field name='login' component='input' placeholder="Login" />
      </div>
      <div>
        <Field name='password' component='input' type="text" placeholder="Password" />
      </div>
      <div>
        <Field name='rememberMe' component='input' type="checkbox" /> Remember me
      </div>
      <div>
        <button>Login</button>
      </div>
    </form>
  );
};

const LoginReduxForm = reduxForm({ form: 'login' })(LoginForm);

export default LoginReduxForm;