import React from "react";

import s from "./Dialogs.module.scss";
import Container from "../Container/Container";
import LeftPanel from "./LeftPanel/LeftPanel";
import RightPanel from "./RightPanel/RightPanel";

const Dialogs = () => {
  return (
    <Container white className={s.dialogs}>
      <LeftPanel />

      <RightPanel />
    </Container>
  );
};

export default Dialogs;
