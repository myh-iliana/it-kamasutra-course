import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import HeaderContainer from '../components/Header/HeaderContainer';
import NavbarContainer from '../components/Navbar/NavbarContainer';
import Explore from './Explore/Explore';
import Music from './Music/Music';
import Settings from './Settings/Settings';
import ProfileContainer from './Profile/ProfileContainer';
import DialogsContainer from './Dialogs/DialogsContainer';
import LoginContainer from './Auth/Login/LoginContainer';

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

      <Switch>
        <Route path={routes.profile} component={ProfileContainer} />
        <Route path={routes.dialogs} component={DialogsContainer} />
        <Route path={routes.explore} component={Explore} />
        <Route path={routes.music} component={Music} />
        <Route path={routes.settings} component={Settings} />
        <Route path={routes.signIn} component={LoginContainer} />
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
