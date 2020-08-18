import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Header from "../components/Header/Header";
import Navbar from "../components/Navbar/Navbar";
import Profile from "./Profile/Profile";
import Dialogs from "./Dialogs/Dialogs";
import Explore from "./Explore/Explore";
import Music from "./Music/Music";
import Settings from "./Settings/Settings";

export const routes = {
  home: '/',
  profile: '/profile',
  profilePosts: '/profile/posts',
  profileFollowers: '/profile/followers',
  profileFollowing: '/profile/following',
  dialogs: '/dialogs',
  explore: '/explore',
  music: '/music',
  settings: '/settings',
};

const Router = () => {
  return (
      <BrowserRouter>
        <Header />
        <Navbar />

        <div className="app-content">
          <Route path={routes.profile} component={Profile} />
          <Route path={routes.dialogs} component={Dialogs} />
          <Route path={routes.explore} component={Explore} />
          <Route path={routes.music} component={Music} />
          <Route path={routes.settings} component={Settings} />
        </div>
      </BrowserRouter>
  );
};

export default Router;