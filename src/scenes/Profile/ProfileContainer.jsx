import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import Profile from './Profile';
import { getUser } from '../../store/actions';

const ProfileContainer = ({ user, getUser, match }) => {
  useEffect(() => {
    const { userId } = match.params;
    getUser(userId);
  }, []);

  return (
    <React.Fragment>
      { user && <Profile user={user} /> }
    </React.Fragment>
  );
};

const mapStateToProps = (state) => {
  return {
    user: state.profile.user,
  };
};

const mapDispatchToProps = { getUser };

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(ProfileContainer));
