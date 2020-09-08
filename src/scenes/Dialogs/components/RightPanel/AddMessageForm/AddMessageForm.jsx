import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faImage, faPaperclip, faSmile } from '@fortawesome/free-solid-svg-icons';

import s from './AddMessageForm.module.scss';
import { Field, reduxForm } from 'redux-form';

const AddMessageForm = ({ handleSubmit }) => {
  return (
    <form className={s.form} onSubmit={handleSubmit}>
      <div>
        <Field component="textarea" name="message" placeholder="Type something & press enter" />
        <div className={s.icons}>
          <FontAwesomeIcon icon={faSmile} />
          <FontAwesomeIcon icon={faImage} />
          <FontAwesomeIcon icon={faPaperclip} />
        </div>
      </div>
      <button>Send</button>
    </form>
  );
};

const AddMessageReduxForm = reduxForm({ form: 'dialogAddMessage' })(AddMessageForm);

export default AddMessageReduxForm;
