import React from 'react';

import s from './LeftPanel.module.scss';
import DialogsListContainer from "./DialogsList/DialogsListContainer";
import SearchReduxForm from './SearchForm/SearchForm';

const LeftPanel = () => {
  return (
      <div className={s.container}>
        <header className={s.header}>
          <div className={s.title}>
            <h4>Messages</h4>
          </div>

          <SearchReduxForm />
        </header>

        <DialogsListContainer />
      </div>
  );
};

export default LeftPanel;