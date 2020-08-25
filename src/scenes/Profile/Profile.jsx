import React from "react";
import { Route } from "react-router-dom";

import s from "./Profile.module.scss";
import UsersList from "./components/UsersList/UsersList";
import Posts from "./components/Posts/Posts";
import ProfileNav from "./components/ProfileNav/ProfileNav";
import User from "./components/User/User";
import Container from "../../components/Container/Container";
import { routes } from "../routes";

const Profile = ({ user }) => {
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
          <User user={user} />
          <div className={s.nav}>
            <ProfileNav />
          </div>
          <Route path={routes.profilePosts} component={Posts} />
          <Route path={routes.profileFollowers} render={() => <UsersList />} />
          <Route path={routes.profileFollowing} render={() => <UsersList />} />
        </Container>
      </React.Fragment>
  );
};

export default Profile;
