import { Link } from 'react-router-dom';
import Navbar from '../presentation/Navbar';
import Footer from '../presentation/Footer';
import { CircularProgressbar } from 'react-circular-progressbar';
import '../../circle-styling.css';

const TrackMap = ({results, clickOnDetailResult}) => {
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
            <Navbar title = "Track" />
            <main>
                <h2>Track page</h2>
                {
                    results.map((res) => (
                        <Link
                            to={{
                                pathname: `/track/${res.id}`,
                                state: res,
                            }}
                            key={res.id}
                            onClick={() => clickOnDetailResult(res.id)}
                        >
                            <div>{readableDate(res.created_at)}</div>
                            <CircularProgressbar value={res.overall_score} maxValue={9} />
                            <div>{res.overall_score}</div>
                        </Link>
                    ))
                }
            </main>
            <Footer />
        </div>
    )
}

export default TrackMap;