import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import HeaderContainer from '../components/Header/HeaderContainer';
import NavbarContainer from '../components/Navbar/NavbarContainer';
import Dialogs from './Dialogs/Dialogs';
import Explore from './Explore/Explore';
import Music from './Music/Music';
import Settings from './Settings/Settings';
import ProfileContainer from './Profile/ProfileContainer';

export const routes = {
  home: '/',
  profile: '/profile/:userId',
  profilePosts: '/profile/:userId/posts',
  profileFollowers: '/profile/:userId/followers',
  profileFollowing: '/profile/:userId/following',
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
      <NavbarContainer />

      <div className="app-content">
        <Switch>
          <Route path={routes.profile} component={ProfileContainer} />
          <Route path={routes.dialogs} component={Dialogs} />
          <Route path={routes.explore} component={Explore} />
          <Route path={routes.music} component={Music} />
          <Route path={routes.settings} component={Settings} />
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default Router;
