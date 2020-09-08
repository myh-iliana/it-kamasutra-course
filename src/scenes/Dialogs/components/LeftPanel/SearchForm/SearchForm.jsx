import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

import s from './SearchForm.module.scss';

const SearchForm = ({ handleSubmit }) => {
  const onSubmit = (data) => console.log(data);

  return (
    <form className={s.search} onSubmit={handleSubmit(onSubmit)}>
      <Field component='input' name='search' placeholder='Search' />
      <button>
        <FontAwesomeIcon icon={faSearch} />
      </button>
    </form>
  );
};

const SearchReduxForm = reduxForm({ form: 'dialogSearch' })(SearchForm);

export default SearchReduxForm;