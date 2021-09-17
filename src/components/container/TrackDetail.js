import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';
import { fetchDetailResult } from '../../actions';
import UnpackTrackDetail from '../presentation/UnpackTrackDetail';

const TrackDetail = ({ detailResult, fetchDetailResult }) => {
  const { id } = useParams();
  useEffect(() => {
    fetchDetailResult(id);
  }, [fetchDetailResult, id]);

  return (
    <main>
      {
          Object.keys(detailResult).length !== 0
            ? <UnpackTrackDetail detailResult={detailResult.detailResult} />
            : (
              <h2>
                Loading...
              </h2>
            )
        }
    </main>
  );
};

const mapStateToProps = (state) => ({
  detailResult: state.detailResult,
});

export default connect(mapStateToProps, { fetchDetailResult })(TrackDetail);

TrackDetail.propTypes = {
  detailResult: PropTypes.instanceOf(Object).isRequired,
  fetchDetailResult: PropTypes.func.isRequired,
};
