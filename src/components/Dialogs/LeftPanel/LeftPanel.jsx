import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

import s from './LeftPanel.module.scss';
import Dialog from "../Dialog/Dialog";

const LeftPanel = ({ items }) => {
  return (
      <div className={s.container}>
        <header className={s.header}>
          <div className={s.title}>
            <h4>Messages</h4>
          </div>

          <div className={s.search}>
            <input type="text" placeholder='Search' />
            <FontAwesomeIcon icon={faSearch} />
          </div>
        </header>

        <div className={s.dialogs}>
          <div className={s.list}>
            {items.map((dialog, i) => {
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
      </div>
  );
};

export default LeftPanel;