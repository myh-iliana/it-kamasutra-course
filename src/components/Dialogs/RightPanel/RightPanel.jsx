import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSmile, faImage, faPaperclip } from "@fortawesome/free-solid-svg-icons";

import Ava1 from "../../../img/ava-1.jpg";
import AvaMain from '../../../img/ava-main.jpg';

import s from './RightPanel.module.scss';
import Avatar from "../../Avatar/Avatar";
import Message from "../Message/Message";

const RightPanel = () => {
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
          <Message author avatar={AvaMain} time='Sat, Aug 23, 1:08 PM'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec rutrum congue leo eget malesuada. Vivamus suscipit tortor eget felis porttitor.
          </Message>
          <Message avatar={Ava1} time='5 minutes ago'>
            Cras ultricies ligula.
          </Message>
          <Message author avatar={AvaMain} time='Sat, Aug 23, 1:08 PM'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec rutrum congue leo eget malesuada. Vivamus suscipit tortor eget felis porttitor.
          </Message>
          <Message avatar={Ava1} time='5 minutes ago'>
            Cras ultricies ligula.
          </Message>
          <Message author avatar={AvaMain} time='Sat, Aug 23, 1:08 PM'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec rutrum congue leo eget malesuada. Vivamus suscipit tortor eget felis porttitor.
          </Message>
          <Message avatar={Ava1} time='2 minutes ago'>
            Lorem ipsum dolor sit amet
          </Message>
          <Message author avatar={AvaMain} time='Sat, Aug 23, 1:08 PM'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec rutrum congue leo eget malesuada. Vivamus suscipit tortor eget felis porttitor.
          </Message>
          <Message avatar={Ava1} time='2 minutes ago'>
            Typing...
          </Message>
        </main>

        <footer className={s.footer}>
          <textarea placeholder='Type something & press enter' />
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