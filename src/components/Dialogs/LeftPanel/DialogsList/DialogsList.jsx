import React from 'react';

import s from './DialogsList.module.scss';

import Dialog from "../Dialog/Dialog";

const DialogsList = ({ dialogs }) => {
  return (
      <div>
        <div className={s.list}>
          {dialogs.map((dialog, i) => {
            return (
                <Dialog
                    key={dialog.id}
                    id={dialog.id}
                    online={i === 0 && true}
                    name={dialog.username}
                    lastMessage={dialog.lastMessage}
                    lastTime={dialog.lastTime}
                    img={dialog.avatar}
                />
            );
          })}
        </div>
      </div>
  );
};

export default DialogsList;