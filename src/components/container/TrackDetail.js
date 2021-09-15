import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchDetailResult } from '../../actions';
import { useParams } from 'react-router-dom';
import UnpackTrackDetail from '../presentation/UnpackTrackDetail';

const TrackDetail = ({ detailResult, fetchDetailResult }) => {
    const { id } = useParams();
    useEffect(() => {
        fetchDetailResult(id);
    }, []);

    return (
        <main>
        {
          Object.keys(detailResult).length !== 0
            ? <UnpackTrackDetail detailResult={detailResult.detailResult} />
            : (
              <h2>
                Please go back to the previous page and select result to see details...
                {id}
              </h2>
            )
        }
      </main>
    )
}

const mapStateToProps = (state) => ({
  detailResult: state.detailResult,
});

export default connect(mapStateToProps, { fetchDetailResult })(TrackDetail);