import React from "react";

import s from "./Dialogs.module.scss";

import Container from "../../components/Container/Container";
import LeftPanel from "./components/LeftPanel/LeftPanel";
import RightPanel from "./components/RightPanel/RightPanel";

const Dialogs = () => {
  return (
    <Container white className={s.dialogs}>
      <LeftPanel />

      <RightPanel />
    </Container>
  );
};

export default Dialogs;
