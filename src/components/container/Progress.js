import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { fetchResults } from '../../actions';
import UnpackProgress from '../presentation/UnpackProgress';

const Progress = ({fetchResults, results}) => {
    useEffect(() => {
        fetchResults();
    }, [fetchResults]);

    if (sessionStorage.getItem('token') === 'undefined' || sessionStorage.getItem('token') === null) {
        return <Redirect to='/log_in'/> 
    } else {
        return results.results !== undefined ? (<UnpackProgress results={results.results} />) : <h2>Loading...</h2>
    }
}

const mapStateToProps = (state) => ({
  results: state.results,
});

export default connect(mapStateToProps, { fetchResults })(Progress);

Progress.propTypes = {
    results: PropTypes.instanceOf(Object).isRequired,
    fetchResults: PropTypes.func.isRequired,
};