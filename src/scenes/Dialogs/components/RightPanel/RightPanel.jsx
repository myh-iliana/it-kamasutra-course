import React from "react";

import Ava1 from "../../../../img/ava-1.jpg";

import s from "./RightPanel.module.scss";
import Avatar from "../../../../components/Avatar/Avatar";
import MessagesListContainer from "./MessagesList/MessagesListContainer";
import AddMessageFormRedux from "./AddMessageForm/AddMessageForm";

const RightPanel = ({ sendMessage }) => {
  const addMessage = (data) => {
    sendMessage(1, 0, data.message);
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
        <MessagesListContainer />
      </main>

      <footer className={s.footer}>
        <AddMessageFormRedux onSubmit={addMessage} />
      </footer>
    </div>
  );
};

export default RightPanel;
