import React from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import { routes } from '../scenes/routes';

const mapStateToProps = state => ({ isAuth: state.auth.isAuth });

export const withPrivateRoute = (Component) => {
  const RedirectComponent = (props) => {
    if (!props.isAuth) return <Redirect to={routes.signIn} />;

    return <Component {...props} />
  };

  return connect(mapStateToProps)(RedirectComponent);
};

export default withPrivateRoute;