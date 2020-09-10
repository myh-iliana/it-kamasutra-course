export const required = value => {
  if (value) return undefined;
  return 'Field is required';
};

export const maxLength = max => value => {
  if (value.length > max) return `Max length is ${max}`;
  return undefined;
};

export const minLength = min => value => {
  if (value.length > min) return `Max length is ${min}`;
  return undefined;
};

export const isEmail = value => {
  const regExp = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  if (regExp.test(value)) return undefined;
  return 'Invalid email address';
};