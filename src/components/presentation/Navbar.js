const Navbar = () => {
    const logOut = () => {
        sessionStorage.removeItem('token');
        console.log('token:', sessionStorage.getItem('token'));
    }
    return (
        <nav>
            <button type="button" onClick={logOut}>Log out</button>
        </nav>
    )
}

export default Navbar;