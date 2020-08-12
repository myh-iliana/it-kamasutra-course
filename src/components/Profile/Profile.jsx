import React from "react";
import { Route } from "react-router-dom";

import s from "./Profile.module.scss";
import Posts from "./Posts/Posts";
import User from "./User/User";
import Container from "../Container/Container";
import ProfileNav from "./ProfileNav/ProfileNav";

const Profile = () => {
  return (
      <React.Fragment>
        <div className={s.row}>
          <div className={s.col_left}>
            <div />
            <div />
          </div>
          <div className={s.col_center}>
            <div />
          </div>
          <div className={s.col_right}>
            <div />
            <div />
          </div>
        </div>

        <Container className={s.profile}>
          <User />
          <div className={s.nav}>
            <ProfileNav />
          </div>
          <Route path='/profile/posts' render={() => <Posts />} />
        </Container>
      </React.Fragment>
  );
};

export default Profile;
