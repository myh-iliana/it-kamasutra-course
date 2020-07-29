import React, {useState} from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCamera, faVideo } from "@fortawesome/free-solid-svg-icons";

import s from './AddPostInput.module.scss';
import Container from "../../Container/Container";

const AddPostInput = ({ dispatch }) => {
  const [value, setValue] = useState('');

  const handleChange = e => setValue(e.target.value);

  const onPostAdd = () => {
    const action = {
      type: 'ADD_POST',
      text: value,
    };
    dispatch(action);
  };

  return (
      <Container white>
        <div className={s.form}>
          <textarea placeholder='Type something...' value={value} onChange={handleChange} />

          <div className={s.bottom}>
            <div>
              <span>
                <FontAwesomeIcon icon={faCamera} />
              </span>
              <span>
                <FontAwesomeIcon icon={faVideo} />
              </span>
            </div>
            <button onClick={onPostAdd}>Upload</button>
          </div>
        </div>
      </Container>
  );
};

export default AddPostInput;