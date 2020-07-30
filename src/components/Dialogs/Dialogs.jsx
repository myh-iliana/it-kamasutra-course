import React from "react";

import s from "./Dialogs.module.scss";
import Container from "../Container/Container";
import LeftPanel from "./LeftPanel/LeftPanel";
import RightPanel from "./RightPanel/RightPanel";

const Dialogs = ({ dialogs, mainUser, dispatch }) => {
  return (
    <Container white className={s.dialogs}>
      <LeftPanel items={dialogs} />

      <RightPanel mainUser={mainUser} messages={dialogs[0].messages} dispatch={dispatch} />
    </Container>
  );
};

export default Dialogs;
