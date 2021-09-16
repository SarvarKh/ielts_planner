import Navbar from '../presentation/Navbar';
import Footer from '../presentation/Footer';

const UnpackMore = ({currentUser}) => {
    return (
      <div>
        <Navbar title = "More" />
        <main>
          <div className="m-header">
            <i className="fas fa-user-circle p-avat"></i>
            <div>
              <div>{currentUser.name}</div>
              <div className="m-email">{currentUser.email}</div>
            </div>
          </div>
          <div className="more-list">
            <div>
              <i className="fas fa-crosshairs"></i>
              <div>Your goal {currentUser.level_plan}</div>
            </div>
            <div>
              <i className="fas fa-clipboard"></i>
              <div>Your started at {currentUser.level_initial}</div>
            </div>
            <div>
              <i className="fas fa-envelope"></i>
              <div>Mailing list</div>
            </div>
            <div>
              <i className="fas fa-user"></i>
              <div>Your profile</div>
            </div>
            <div>
              <i className="fas fa-cog"></i>
              <div>Settings</div>
            </div>
            <div>
              <i className="fas fa-question-circle"></i>
              <div>Help</div>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    );
}

export default UnpackMore;