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
        <>
            <Navbar title = "Track it" />
            <div className="t-con">
                <div className='t-date'>{readableDate(detailResult.created_at)}</div>
                <CircularProgressbar value={detailResult.overall_score} maxValue={9} text={`Overall Score\n ${detailResult.overall_score}`}/>
                <div className="t-scores">
                    <div>
                        <i class="fas fa-microphone"></i>
                        <div>Speaking: {detailResult.speaking_score}</div>
                    </div>
                    <div>
                        <i class="fas fa-headphones"></i>
                        <div>Listening: {detailResult.listening_score}</div>
                    </div>
                    <div>
                        <i class="fas fa-pen"></i>
                        <div>Writing: {detailResult.writing_score}</div>
                    </div>
                    <div>
                        <i class="fas fa-book"></i>
                        <div>Reading: {detailResult.reading_score}</div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}
export default UnpackTrackDetail;