import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSmile,
  faImage,
  faPaperclip,
} from "@fortawesome/free-solid-svg-icons";

import Ava1 from "../../../img/ava-1.jpg";
import AvaMain from "../../../img/ava-main.jpg";

import s from "./RightPanel.module.scss";
import Avatar from "../../Avatar/Avatar";
import Message from "../Message/Message";
import { addMessage } from "../../../redux/dialogsReducer";

const RightPanel = ({ messages, dispatch }) => {
  const [value, setValue] = useState("");

  const handleTextChange = (e) => setValue(e.target.value);

  const onMessageSend = e => {
    if (e.which === 13) {
      dispatch(addMessage(0, value));
      setValue('');
    }
  };

  return (
    <div className={s.container}>
      <header className={s.header}>
        <div className={s.img}>
          <Avatar img={Ava1} />
        </div>

        <div className={s.info}>
          <h4>John Doe</h4>
          <span>Online</span>
        </div>
      </header>

      <main className={s.main}>
        {messages.map(({ ownerId, createdAt, text, id }) => {
          const isLoggedUser = ownerId === 0;
          return (
            <Message
              key={id}
              author={isLoggedUser}
              avatar={isLoggedUser ? AvaMain : Ava1}
              time={createdAt}
            >
              {text}
            </Message>
          );
        })}
      </main>

      <footer className={s.footer}>
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
      </footer>
    </div>
  );
};

export default RightPanel;
