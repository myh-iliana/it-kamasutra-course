import React from "react";

import s from "./Dialogs.module.scss";
import Container from "../Container/Container";
import LeftPanel from "./LeftPanel/LeftPanel";
import RightPanel from "./RightPanel/RightPanel";

const Dialogs = ({ dialogs, mainUser }) => {
  return (
    <Container white className={s.dialogs}>
      <LeftPanel items={dialogs} />

      <RightPanel mainUser={mainUser} />
    </Container>
  );
};

export default Dialogs;
