import React from 'react';

import s from './FormControls.module.scss';

const FormControl = Element => ({ input, meta, ...props }) => {
  const hasError = meta.touched && meta.error;

  return (
    <div className={hasError && s.error}>
      <Element {...input} {...props} />
      { hasError && <span>{meta.error}</span> }
    </div>
  );
};

export const Textarea = FormControl('textarea');
export const Input = FormControl('input');