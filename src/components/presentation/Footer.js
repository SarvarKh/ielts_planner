import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <footer>
            <hr/>
            <ul>
                <li>
                    <Link to={{
                        pathname: "/measurement"
                    }}>
                        Measurement
                    </Link>
                </li>
                <li>
                    <Link to={{
                        pathname: "/track"
                    }}>
                        Track
                    </Link>
                </li>
                <li>
                    <Link to={{
                        pathname: "/progress"
                    }}>
                        Progress
                    </Link>
                </li>
                <li>
                    <Link to={{
                        pathname: "/more"
                    }}>
                        More
                    </Link>
                </li>
            </ul>
        </footer>
    )
}

export default Footer;