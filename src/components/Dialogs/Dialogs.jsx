import React from "react";

import s from "./Dialogs.module.scss";
import Container from "../Container/Container";
import LeftPanel from "./LeftPanel/LeftPanel";
import RightPanel from "./RightPanel/RightPanel";

const Dialogs = ({ store }) => {
  return (
    <Container white className={s.dialogs}>
      <LeftPanel store={store} />

      <RightPanel store={store} />
    </Container>
  );
};

export default Dialogs;
