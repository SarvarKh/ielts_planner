import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import { fetchResults, fetchDetailResult } from '../../actions/index';
import TrackMap from '../presentation/TrackMap';

const Track = ({ fetchResults, fetchDetailResult, results }) => {
  useEffect(() => {
    fetchResults();
  }, [fetchResults]);

  const clickOnDetailResult = (e) => {
    fetchDetailResult(e);
  };

  if (sessionStorage.getItem('token') === 'undefined' || sessionStorage.getItem('token') === null) {
    return <Redirect to="/log_in" />;
  }
  return results.results !== undefined
    ? (<TrackMap results={results.results} clickOnDetailResult={clickOnDetailResult} />)
    : <h2>Loading...</h2>;
};

const mapStateToProps = (state) => ({
  results: state.results,
});

export default connect(mapStateToProps, { fetchResults, fetchDetailResult })(Track);

Track.propTypes = {
  results: PropTypes.instanceOf(Object).isRequired,
  fetchResults: PropTypes.func.isRequired,
  fetchDetailResult: PropTypes.func.isRequired,
};
