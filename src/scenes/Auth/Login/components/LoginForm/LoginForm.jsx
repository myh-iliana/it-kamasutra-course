import React from 'react';
import { Field, reduxForm } from 'redux-form';

import s from './LoginForm.module.scss';
import { Input } from '../../../../../components/FormControls/FormControls';
import { isEmail, required } from '../../../../../utils/validators';

const LoginForm = ({ handleSubmit, captchaUrl, error }) => {
  return (
    <form onSubmit={handleSubmit} className={s.form}>
      <div className={s.inputs}>
        <Field name="email" component={Input} validate={[required, isEmail]} placeholder="Email" />
        <Field
          name="password"
          component={Input}
          validate={[required]}
          type="password"
          placeholder="Password"
        />
      </div>
      <div className={s.check}>
        <Field name="rememberMe" component={Input} type="checkbox" />
        <span>Remember me</span>
      </div>
      {captchaUrl && (
        <div className={s.captcha}>
          <img src={captchaUrl} alt="captcha" />
          <Field name="captcha" component={Input} placeholder="Type here symbols above" />
        </div>
      )}

      {error && (
        <div>
          {error.map((error) => (
            <div className={s.error}>{error}</div>
          ))}
        </div>
      )}

      <div>
        <button>Sign in</button>
      </div>
    </form>
  );
};

const LoginReduxForm = reduxForm({ form: 'login' })(LoginForm);

export default LoginReduxForm;
