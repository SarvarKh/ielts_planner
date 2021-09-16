import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import {fetchCurrentUser} from '../../actions/index';
import UnpackLineChart from '../presentation/UnpackLineChart';

const MyChart = ({results, currentUser, fetchCurrentUser}) => {
    useEffect(() => {
        fetchCurrentUser();
    }, [fetchCurrentUser]);

    return currentUser.currentUser !== undefined ? <UnpackLineChart results={results} currentUser={currentUser.currentUser} /> : <h2>Loading...</h2>
}

const mapStateToProps = (state) => ({
    currentUser: state.currentUser,
})

export default connect(mapStateToProps, { fetchCurrentUser })(MyChart);