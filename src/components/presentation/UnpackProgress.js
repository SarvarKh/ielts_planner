import Navbar from '../presentation/Navbar';
import Footer from '../presentation/Footer';
import MyChart from '../container/MyChart';
import { CircularProgressbar } from 'react-circular-progressbar';

const UnpackProgress = ({results}) => {
    let current_scores = results[results.length-1];
    return (
    <div>
        <Navbar title = "Progress" />
            <main>
                <h3 className="g-title">Analyze your progress against plan.</h3>
                <MyChart results={results} />
                <div className="g-description">
                    <div>Blue - actual data</div>
                    <div>Red - planned data</div>
                </div>
                {
                    current_scores
                    ? <div className="progress">
                        <h3>Current scores</h3>
                        <CircularProgressbar value={current_scores.overall_score} maxValue={9} text={`Overall Score\n ${current_scores.overall_score}`}/>
                        <div className="t-scores">
                            <div>
                                <i class="fas fa-microphone"></i>
                                <div>Speaking: {current_scores.speaking_score}</div>
                            </div>
                            <div>
                                <i class="fas fa-headphones"></i>
                                <div>Listening: {current_scores.listening_score}</div>
                            </div>
                            <div>
                                <i class="fas fa-pen"></i>
                                <div>Writing: {current_scores.writing_score}</div>
                            </div>
                            <div>
                                <i class="fas fa-book"></i>
                                <div>Reading: {current_scores.reading_score}</div>
                            </div>
                        </div>
                    </div>
                    : <div>Loading...</div>
                }
            </main>
        <Footer />
    </div>
    );
}

export default UnpackProgress;