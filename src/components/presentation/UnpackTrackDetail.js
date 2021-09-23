import { CircularProgressbar } from 'react-circular-progressbar';
import PropTypes from 'prop-types';
import Navbar from './Navbar';
import Footer from './Footer';

const UnpackTrackDetail = ({ detailResult }) => {
  const readableDate = (defDateFormat) => {
    const dateObj = new Date(defDateFormat);

    const options = { month: 'long' };
    const month = new Intl.DateTimeFormat('en-US', options).format(dateObj);

    const day = dateObj.getUTCDate();
    const year = dateObj.getUTCFullYear();
    const newdate = `${month}-${day}-${year}`;
    return newdate;
  };

  return (
    <>
      <Navbar title="Track it" />
      <div className="t-con">
        <div className="t-date">{readableDate(detailResult.created_at)}</div>
        <CircularProgressbar value={detailResult.overall_score} maxValue={9} text={`Overall Score\n ${detailResult.overall_score}`} />
        <div className="t-scores">
          <div>
            <i className="fas fa-microphone" />
            <div>
              Speaking:
              {detailResult.speaking_score}
            </div>
          </div>
          <div>
            <i className="fas fa-headphones" />
            <div>
              Listening:
              {detailResult.listening_score}
            </div>
          </div>
          <div>
            <i className="fas fa-pen" />
            <div>
              Writing:
              {detailResult.writing_score}
            </div>
          </div>
          <div>
            <i className="fas fa-book" />
            <div>
              Reading:
              {detailResult.reading_score}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};
export default UnpackTrackDetail;

UnpackTrackDetail.propTypes = {
  detailResult: PropTypes.instanceOf(Object).isRequired,
};
