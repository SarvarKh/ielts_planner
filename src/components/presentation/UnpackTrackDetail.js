import { CircularProgressbar } from 'react-circular-progressbar';
import Navbar from './Navbar';
import Footer from './Footer';

const UnpackTrackDetail = ({detailResult}) => {
    const readableDate = (def_date_format) => {
        let dateObj = new Date(def_date_format);
        
        let options = { month: 'long'};
        let month = new Intl.DateTimeFormat('en-US', options).format(dateObj)
        
        let day = dateObj.getUTCDate();
        let year = dateObj.getUTCFullYear();
        let newdate = month + "-" + day + "-" + year;
        return newdate
    }

    return (
        <div>
            <Navbar title = "Track it" />
            <div>{readableDate(detailResult.created_at)}</div>
            <h3>Current scores</h3>
            <div className="prog-circle-score">
                <CircularProgressbar value={detailResult.overall_score} maxValue={9} text={`Overall Score\n ${detailResult.overall_score}`}/>
            </div>
            <div>Speaking: {detailResult.speaking_score}</div>
            <div>Listening: {detailResult.listening_score}</div>
            <div>Writing: {detailResult.writing_score}</div>
            <div>Reading: {detailResult.reading_score}</div>
            <Footer />
        </div>
    )
}
export default UnpackTrackDetail;