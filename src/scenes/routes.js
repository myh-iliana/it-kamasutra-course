import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import HeaderContainer from "../components/Header/HeaderContainer";
import Navbar from "../components/Navbar/Navbar";
import Dialogs from "./Dialogs/Dialogs";
import Explore from "./Explore/Explore";
import Music from "./Music/Music";
import Settings from "./Settings/Settings";
import ProfileContainer from "./Profile/ProfileContainer";

export const routes = {
  home: '/',
  profile: '/profile/:userId?',
  profilePosts: '/profile/posts',
  profileFollowers: '/profile/followers',
  profileFollowing: '/profile/following',
  dialogs: '/dialogs',
  explore: '/explore',
  music: '/music',
  settings: '/settings',
  signIn: '/login',
};

const Router = () => {
  return (
      <BrowserRouter>
        <HeaderContainer />
        <Navbar />

        <div className="app-content">
          <Route path={routes.profile} component={ProfileContainer} />
          <Route path={routes.dialogs} component={Dialogs} />
          <Route path={routes.explore} component={Explore} />
          <Route path={routes.music} component={Music} />
          <Route path={routes.settings} component={Settings} />
        </div>
      </BrowserRouter>
  );
};

export default Router;