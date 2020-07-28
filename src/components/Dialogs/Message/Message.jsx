import React from 'react';

import s from './Message.module.scss';
import Avatar from "../../Avatar/Avatar";

const Message = ({ author, avatar, children, time }) => {
  return (
      <div className={`${s.message} ${author && s.author}`}>
        <div className={s.avatar}>
          <Avatar img={avatar} size='50px' />
        </div>

        <div className={s.text}>
          <p>{children}</p>
          <span>{time}</span>
        </div>
      </div>
  );
};

export default Message;