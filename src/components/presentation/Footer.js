import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <footer>
            <hr/>
            <ul>
                <li>
                    <Link to='./measurement'>Measurement</Link>
                </li>
                <li>
                    <Link to='./track'>Track</Link>
                </li>
                <li>
                    <Link to='./progress'>Progress</Link>
                </li>
                <li>
                    <Link to='./more'>More</Link>
                </li>
            </ul>
        </footer>
    )
}

export default Footer;