import { connect } from 'react-redux';

import Navbar from './Navbar';

const mapStateToProps = (state) => {
  return {
    isAuth: state.auth.isAuth,
    userId: state.auth.userId,
  };
};

export default connect(mapStateToProps)(Navbar);