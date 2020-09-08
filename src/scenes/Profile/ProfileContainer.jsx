import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { compose } from 'redux';

import Profile from './Profile';
import { getUser, getUserStatus, updateUserStatus } from '../../store/actions';
import withPrivateRoute from '../../hoc/withPrivateRoute';
import Loader from '../../components/Loader/Loader';

const ProfileContainer = ({ user, getUser, getUserStatus, match, ...props }) => {
  useEffect(() => {
    const { userId } = match.params;
    getUser(userId);
    getUserStatus(userId);
  }, []);

  if (!user) return <Loader />;

  return <Profile {...props} user={user} />;
};

const mapStateToProps = (state) => {
  return {
    user: state.profile.user,
    status: state.profile.status,
    authUserId: state.auth.userId,
  };
};

const mapDispatchToProps = { getUser, getUserStatus, updateUserStatus };

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withRouter,
  withPrivateRoute,
)(ProfileContainer);
