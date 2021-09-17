import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';

const Navbar = ({ title }) => {
  const history = useHistory();

  const logOut = () => {
    sessionStorage.removeItem('token');
    history.push('/log_in');
  };
  return (
    <nav>
      <div className="n-title">{title}</div>
      <button type="button" onClick={logOut}>
        <i className="fas fa-power-off" />
      </button>
    </nav>
  );
};

export default Navbar;

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
};
