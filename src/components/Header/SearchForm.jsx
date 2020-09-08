import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { Field, reduxForm } from 'redux-form';

const SearchForm = ({ handleSubmit }) => {
  const onSubmit = data => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Field component='input' name='search' placeholder="Search here" />
      <button>
        <FontAwesomeIcon icon={faSearch} />
      </button>
    </form>
  );
};

const SearchReduxForm = reduxForm({ form: 'headerSearch' })(SearchForm);

export default SearchReduxForm;