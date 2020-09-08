import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCamera, faVideo } from '@fortawesome/free-solid-svg-icons';

import s from './AddPostForm.module.scss';
import Container from '../../../../../components/Container/Container';
import { Field, reduxForm } from 'redux-form';
import { required } from '../../../../../utils/validators';

const AddPostForm = ({ addPost, handleSubmit }) => {
  const onSubmit = (data) => {
    addPost(
      data.postText,
      'https://www.hodderscape.co.uk/wp-content/uploads/2016/05/CityDreaming1905-260x400.jpg',
    );
  };

  return (
    <Container white>
      <form className={s.form} onSubmit={handleSubmit(onSubmit)}>
        <Field component="textarea"
               name="postText"
               placeholder="Type something..."
               validate={[ required ]}
        />

        <div className={s.bottom}>
          <div>
            <span>
              <FontAwesomeIcon icon={faCamera} />
            </span>
            <span>
              <FontAwesomeIcon icon={faVideo} />
            </span>
          </div>
          <button>Upload</button>
        </div>
      </form>
    </Container>
  );
};

const AddPostReduxForm = reduxForm({ form: 'addPost' })(AddPostForm);

export default AddPostReduxForm;
