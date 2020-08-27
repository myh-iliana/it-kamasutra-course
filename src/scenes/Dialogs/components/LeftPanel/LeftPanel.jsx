import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

import s from './LeftPanel.module.scss';
import DialogsListContainer from "../../../../containers/Dialogs/DialogsListContainer";

const LeftPanel = () => {
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

        <DialogsListContainer />
      </div>
  );
};

export default LeftPanel;