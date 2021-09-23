import { CircularProgressbar } from 'react-circular-progressbar';
import PropTypes from 'prop-types';
import Navbar from './Navbar';
import Footer from './Footer';
import MyChart from '../container/MyChart';

const UnpackProgress = ({ results }) => {
  const currentScores = results[results.length - 1];
  return (
    <div>
      <Navbar title="Progress" />
      <main>
        <h3 className="g-title">Analyze your progress against plan.</h3>
        <MyChart results={results} />
        <div className="g-description">
          <div>Blue - actual data</div>
          <div>Red - planned data</div>
        </div>
        {
                    currentScores
                      ? (
                        <div className="progress">
                          <h3>Current scores</h3>
                          <CircularProgressbar value={currentScores.overall_score} maxValue={9} text={`Overall Score\n ${currentScores.overall_score}`} />
                          <div className="t-scores">
                            <div>
                              <i className="fas fa-microphone" />
                              <div>
                                Speaking:
                                {currentScores.speaking_score}
                              </div>
                            </div>
                            <div>
                              <i className="fas fa-headphones" />
                              <div>
                                Listening:
                                {currentScores.listening_score}
                              </div>
                            </div>
                            <div>
                              <i className="fas fa-pen" />
                              <div>
                                Writing:
                                {currentScores.writing_score}
                              </div>
                            </div>
                            <div>
                              <i className="fas fa-book" />
                              <div>
                                Reading:
                                {currentScores.reading_score}
                              </div>
                            </div>
                          </div>
                        </div>
                      )
                      : <div className="t-empty">Please add scores to see the charts.</div>
                }
      </main>
      <Footer />
    </div>
  );
};

export default UnpackProgress;

UnpackProgress.propTypes = {
  results: PropTypes.instanceOf(Object).isRequired,
};
