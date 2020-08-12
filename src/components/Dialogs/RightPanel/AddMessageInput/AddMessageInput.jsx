import React, { useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faImage, faPaperclip, faSmile } from "@fortawesome/free-solid-svg-icons";

import s from './AddMessageInput.module.scss';

const AddMessageInput = ({ sendMessage }) => {
  const [value, setValue] = useState("");

  const handleTextChange = (e) => setValue(e.target.value);

  const onMessageSend = e => {
    if (e.which === 13) {
      sendMessage(1, 0, value);
      setValue('');
    }
  };

  return (
      <React.Fragment>
        <textarea
            placeholder="Type something & press enter"
            value={value}
            onChange={handleTextChange}
            onKeyPress={onMessageSend}
        />
        <div className={s.icons}>
          <FontAwesomeIcon icon={faSmile} />
          <FontAwesomeIcon icon={faImage} />
          <FontAwesomeIcon icon={faPaperclip} />
        </div>
      </React.Fragment>
  );
};

export default AddMessageInput;