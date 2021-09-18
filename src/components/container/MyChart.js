import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchCurrentUser } from '../../actions/index';
import UnpackLineChart from '../presentation/UnpackLineChart';

const MyChart = ({ results, currentUser, fetchCurrentUser }) => {
  useEffect(() => {
    fetchCurrentUser();
  }, [fetchCurrentUser]);

  return currentUser.currentUser !== undefined
    ? <UnpackLineChart results={results} currentUser={currentUser.currentUser} />
    : <h2 className="t-empty">Loading...</h2>;
};

const mapStateToProps = (state) => ({
  currentUser: state.currentUser,
});

export default connect(mapStateToProps, { fetchCurrentUser })(MyChart);

MyChart.propTypes = {
  currentUser: PropTypes.instanceOf(Object).isRequired,
  results: PropTypes.instanceOf(Object).isRequired,
  fetchCurrentUser: PropTypes.func.isRequired,
};
