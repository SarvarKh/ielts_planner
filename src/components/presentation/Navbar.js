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
            <div>{title}</div>
            <button type="button" onClick={logOut}>Log out</button>
            <hr/>
        </nav>
    )
}

export default Navbar;