import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { fetchResults, fetchDetailResult } from '../../actions/index'
import { Redirect, Link } from 'react-router-dom';
import TrackMap from '../presentation/TrackMap';

const Track = ({fetchResults, fetchDetailResult, results}) => {
    useEffect(() => {
        fetchResults();
    }, []);
        
    const clickOnDetailResult = (e) => {
        fetchDetailResult(e);
    };

    if (sessionStorage.getItem('token') === 'undefined' || sessionStorage.getItem('token') === null) {
        return <Redirect to='/log_in'/> 
    } else {
        return results.results !== undefined ? (<TrackMap results={results.results} clickOnDetailResult={clickOnDetailResult} />) : <h2>Loading...</h2>
    }
}

const mapStateToProps = (state) => ({
  results: state.results,
});

export default connect(mapStateToProps, { fetchResults, fetchDetailResult })(Track);