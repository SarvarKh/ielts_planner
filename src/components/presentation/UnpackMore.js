import PropTypes from 'prop-types';
import Navbar from './Navbar';
import Footer from './Footer';

const UnpackMore = ({ currentUser }) => (
  <div>
    <Navbar title="More" />
    <main>
      <div className="m-header">
        <i className="fas fa-user-circle p-avat" />
        <div>
          <div>{currentUser.name}</div>
          <div className="m-email">{currentUser.email}</div>
        </div>
      </div>
      <div className="more-list">
        <div>
          <i className="fas fa-crosshairs" />
          <div>
            Your goal
            {' '}
            {currentUser.level_plan}
          </div>
        </div>
        <div>
          <i className="fas fa-clipboard" />
          <div>
            Your started at
            {' '}
            {currentUser.level_initial}
          </div>
        </div>
        <div>
          <i className="fas fa-envelope" />
          <div>Mailing list</div>
        </div>
        <div>
          <i className="fas fa-user" />
          <div>Your profile</div>
        </div>
        <div>
          <i className="fas fa-cog" />
          <div>Settings</div>
        </div>
        <div>
          <i className="fas fa-question-circle" />
          <div>Help</div>
        </div>
      </div>
    </main>
    <Footer />
  </div>
);

export default UnpackMore;

UnpackMore.propTypes = {
  currentUser: PropTypes.instanceOf(Object).isRequired,
};
