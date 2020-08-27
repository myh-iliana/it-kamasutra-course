import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import Profile from '../../scenes/Profile/Profile';
import { getUser } from '../../store/actions';
import withPrivateRoute from '../../hoc/withPrivateRoute';
import { compose } from 'redux';

const ProfileContainer = ({ user, getUser, match }) => {
  useEffect(() => {
    const { userId } = match.params;
    getUser(userId);
  }, []);

  return <React.Fragment>{user && <Profile user={user} />}</React.Fragment>;
};

const mapStateToProps = (state) => {
  return {
    user: state.profile.user,
  };
};

const mapDispatchToProps = { getUser };

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withRouter,
  withPrivateRoute,
)(ProfileContainer);
