import Navbar from '../presentation/Navbar';
import Footer from '../presentation/Footer';

const UnpackMore = ({currentUser}) => {
    return (
      <div>
        <Navbar title = "More" />
        <main>
          <div>
            <div className="picture">Picture</div>
            <div>
              <div>{currentUser.name}</div>
              <div>{currentUser.email}</div>
            </div>
          </div>
          <div className="more-list">
            <div>
              <div>Icon</div>
              <div>Your goal {currentUser.level_plan}</div>
            </div>
            <div>
              <div>Icon</div>
              <div>Your started at {currentUser.level_initial}</div>
            </div>
            <div>
              <div>Icon</div>
              <div>Mailing list</div>
            </div>
            <div>
              <div>Icon</div>
              <div>Your profile</div>
            </div>
            <div>
              <div>Icon</div>
              <div>Settings</div>
            </div>
            <div>
              <div>Icon</div>
              <div>Help</div>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    );
}

export default UnpackMore;