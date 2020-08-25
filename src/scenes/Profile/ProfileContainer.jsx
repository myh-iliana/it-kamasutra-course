import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import * as Api from 'src/api';
import Profile from './Profile';
import { setUserProfile } from '../../store/actions';

const ProfileContainer = ({ user, setUserProfile, match }) => {
  useEffect(() => {
    const { userId } = match.params;
    Api.Users.getById(userId).then((data) => setUserProfile(data));
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

const mapDispatchToProps = { setUserProfile };

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(ProfileContainer));
