const Navbar = ({title}) => {
    const logOut = () => {
        sessionStorage.removeItem('token');
        console.log('token:', sessionStorage.getItem('token'));
    }
    return (
        <>
            <h1>Navbar  - {title}</h1>
            <hr/>
        </>
    )
}

export default Navbar;