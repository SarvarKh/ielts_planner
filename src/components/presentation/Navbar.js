import { useHistory } from 'react-router-dom';

const Navbar = ({ title }) => {
  const history = useHistory();

  const logOut = () => {
    sessionStorage.removeItem('token');
    console.log('token:', sessionStorage.getItem('token'));
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
