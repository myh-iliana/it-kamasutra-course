import React from 'react';

import AvaMain from "../../../../img/ava-main.jpg";
import Ava1 from "../../../../img/ava-1.jpg";

import s from './MessagesList.module.scss';

import Message from "../Message/Message";

const MessagesList = ({ messages }) => {
  return (
      <React.Fragment>
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
      </React.Fragment>
  );
};

export default MessagesList;