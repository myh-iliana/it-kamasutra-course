import React from "react";
import { NavLink } from "react-router-dom";

import s from "./Dialog.module.scss";
import Avatar from "../../Avatar/Avatar";

const Dialog = ({
  name,
  lastMessage,
  lastTime,
  img,
  online,
  id,
  ...props
}) => {
  return (
    // <div className={`${s.dialog} ${active && s.active}`} {...props}>
      <NavLink to={`/dialogs/${id}`} className={s.link} activeClassName={s.active}>
        <div className={`${s.dialog}`} {...props}>
        <div className={s.item}>
          <div className={s.photo}>
            <Avatar img={img} />
            {online && <div className={s.dot} />}
          </div>

          <div className={s.info}>
            <h3>{name}</h3>
            <p>{lastMessage}</p>
            <div>{lastTime}</div>
          </div>
        </div>

        {id === 1 && (
          <div className={s.unread_messages}>
            <span>1</span>
          </div>
        )}
        </div>
      </NavLink>
    // </div>
  );
};

export default Dialog;
