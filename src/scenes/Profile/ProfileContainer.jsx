import React, { useEffect } from 'react';
import * as axios from "axios";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import Profile from "./Profile";
import { setUserProfile } from "../../store/actions";

const ProfileContainer = (props) => {
  useEffect(() => {
    const { userId } = props.match.params;
    axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId ? userId : 2}`)
        .then(res => props.setUserProfile(res.data));
  }, []);

  return (
      <Profile {...props} />
  );
};

const mapStateToProps = (state) => {
  return {
    user: state.profile.user,
  };
};

const mapDispatchToProps = { setUserProfile };

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(ProfileContainer));