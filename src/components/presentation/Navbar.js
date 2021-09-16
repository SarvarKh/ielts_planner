import { useHistory } from 'react-router-dom';

const Navbar = ({title}) => {
    let history = useHistory();

    const logOut = () => {
        sessionStorage.removeItem('token');
        console.log('token:', sessionStorage.getItem('token'));
        history.push('/log_in');
    }
    return (
        <nav>
            <div className="n-title">{title}</div>
            <button type="button" onClick={logOut}>
                <i className="fas fa-power-off"></i>
            </button>
        </nav>
    )
}

export default Navbar;