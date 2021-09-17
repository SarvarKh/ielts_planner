import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { fetchCurrentUser } from '../../actions/index';
import UnpackMore from '../presentation/UnpackMore';

const More = ({ currentUser, fetchCurrentUser }) => {
  useEffect(() => {
    fetchCurrentUser();
  }, [fetchCurrentUser]);

  if (sessionStorage.getItem('token') === 'undefined' || sessionStorage.getItem('token') === null) {
    return <Redirect to="/log_in" />;
  }
  return currentUser.currentUser !== undefined
    ? <UnpackMore currentUser={currentUser.currentUser} />
    : <h2>Loading...</h2>;
};

const mapStateToProps = (state) => ({
  currentUser: state.currentUser,
});

export default connect(mapStateToProps, { fetchCurrentUser })(More);

More.propTypes = {
  currentUser: PropTypes.instanceOf(Object).isRequired,
  fetchCurrentUser: PropTypes.func.isRequired,
};
